const { Job } = require('../src/base/job');

/**
 * Sample job.
 */
class SampleJob extends Job {

    /**
     * Initializes the job. Can be overwritten to run custom initialization logic.
     */
    initializeAsync() {
        // if returns promise, the main thread waits for it to be finished.
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(0);
            }, 2000);
        });
    }

    /**
     * Executes the job.
     */
    run() {
        // fetch the data from the backend here
        // when data is ready, send it to the widgets under some dataId
        new Promise((res, rej) => {
            // make call to API or fetch data somehow
            setTimeout(() => {
                res({
                    currentUsers: 10,
                    currentServerLoad: 0.12
                });
            }, 2000)
        })
        .then((data) => {
            // send the data under 'current-server-statistics' data id with the resolved data.
            console.log(`Updating widhet with data id "current-server-statistics"`);
            this.sendEvent('current-server-statistics', data);
        });
    }

}

module.exports = SampleJob;