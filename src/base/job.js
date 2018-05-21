const io = require('socket.io-client')('http://localhost:5000/');
const uidGenerator = require('node-unique-id-generator');
/**
 * Base job class. Connects to the socket io and ready to broadcast event on demand.
 */
class Job{
    
    /** Creates class instance */
    constructor(){
        return this.initializeAsync();
    }

    /** Initializes the class, returns Promise */
    initializeAsync(){
        // generate job unique ID with 'job' prefix
        this.id = uidGenerator.generateUniqueId('job-');
        let initPromise = this.onInitializeAsync();
        return initPromise.then(() => this);
    }

    /** Executes when module need to be initialized. If returns promise, the thread waits for the initialization */
    onInitializeAsync(){
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
    }

    /** Runs the job. */
    run(){
        throw 'Not implemented. The job must implement "run()" method.'
    }
}

module.exports.Job = Job;