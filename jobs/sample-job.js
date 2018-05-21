const { Job } = require('../src/base/job');

/**
 * Sample job.
 */
class SampleJob extends Job {

    /**
     * Initializes the job. Can be overwritten to run custom initialization logic.
     */
    onInitializeAsync(){
        // if returns promise, the main thread waits for it to be finished.
        return new Promise((res, rej) => {
            setTimeout(() =>{
                res(0);
            }, 2000);
        });
    }
}

module.exports = new SampleJob();