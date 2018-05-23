const fs = require('fs');

/**
 * Resolves all jobs from the /jobs folder and runs them.
 */
class JobRunner {

    /** Constructor. */
    constructor() {
        // list of resolved jobs
        this.jobs = [];
    }

    /** Runs the job runner. */
    run() {
        const jobsFolder = 'jobs';
        let jobInitPromises = [];

        // finds all jobs in the \jobs folder, imports them and call run method on them
        fs.readdirSync(jobsFolder).forEach(file => {
            const jobFile = `../${jobsFolder}/${file}`;
            // resolve job type from the file
            let job = require(jobFile);
            // create new job of resolved type. notice as we use async method to initialize the job (see jobs/sample-job.js) we need to wait before we can create an instance of a job.
            var initPromise = new job();
            jobInitPromises.push(initPromise);
        });

        // wait for all imported jobs to finish their initialization.
        Promise.all(jobInitPromises)
            .then(initializedJobs => {
                // save them
                this.jobs = initializedJobs;
            })
            .then(() => {
                // when read and setup, call run for all jobs
                this.jobs.forEach(j => {
                    j.run();
                });
                // exit promise
                return Promise.resolve(0);
            });
    }
}

module.exports = new JobRunner();