const { Job } = require('../src/base/job');

/**
 * Sample job.
 */
class SampleJob extends Job {

    /**
     * Initializes the job. Can be overwritten to run custom initialization logic.
     */
    initializeAsync(){
        // if returns promise, the main thread waits for it to be finished.
        return new Promise((res, rej) => {
            setTimeout(() =>{
                res(0);
            }, 2000);
        });
    }

    /**
     * Executes the job.
     */
    run(){
        // fetch the data from the backend here
        // when data is ready, send it to the widgets under some dataId
        var data = {
            currentUsers: 10,
            currentServerLoad: 0.12
        }
        // send the data under 'current-server-statistics' data id with the resolved data.
        this.sendEvent('current-server-statistics', data);
    }

}

module.exports = SampleJob;