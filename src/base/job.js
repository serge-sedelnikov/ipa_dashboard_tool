const io = require('socket.io-client')(`http://localhost:${global.port || 5000}`)
const uidGenerator = require('node-unique-id-generator');
const storage = require('node-persist');

/**
 * Base job class. Connects to the socket io and ready to broadcast event on demand.
 */
class Job{
    
    /** Creates class instance */
    constructor(){
        return this.private__InitializeAsync();
    }

    /** Initializes the class, returns Promise */
    private__InitializeAsync(){
        // generate job unique ID with 'job' prefix
        this.id = uidGenerator.generateUniqueId('job-');

        // subscribe for the job parameters change event
        io.on('/parameterChanged', this.private__parameterChanged.bind(this));

        // wait for user initialization promise
        let initPromise = this.initializeAsync();
        return initPromise.then(() => this);
    }

    /**
     * Executes on widget sends new parameter values.
     * @param {*} paramName Name of the parameter.
     * @param {*} newValue New value of the parameter.
     */
    private__parameterChanged(data){
        const { paramName, newValue } = data;
        // compose the method of the param changed method
        const paramChangedMethod = `${paramName}Changed`;
        const exec = this[paramChangedMethod];
        if(exec && Object.isExtensible(exec)){
            // if possible to execute, do this with new value as argument
            exec.bind(this)(newValue);
        }
    }

    /** Executes when module need to be initialized. If returns promise, the thread waits for the initialization */
    initializeAsync(){
        return Promise.resolve(this);
    }

    /**
     * Sends the event with certain data ID and payload so widgets which are subscribed for that event are reacting accordingly.
     * @param {String} dataId Data ID to send event to.
     * @param {*} payload The message payload.
     */
    sendEvent(dataId, payload){
        if(!dataId){
            throw 'dataId is required but not provided.'
        }
        if(!payload){
            throw 'payload is required but not provided.'
        }
        // emit the event
        io.emit(dataId, payload);
        // save latest value to cache
        storage.setItem(dataId, payload); // this call is async but we don't want to lock the thread, it will be eventually finished.
    }

    /** Runs the job. */
    run(){
        throw 'Not implemented. The job must implement "run()" method.'
    }
}

module.exports.Job = Job;