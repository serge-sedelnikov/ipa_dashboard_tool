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
            let job = require(jobFile);
            var initPromise = new job();
            jobInitPromises.push(initPromise);
        });

        Promise.all(jobInitPromises)
            .then(initializedJobs => {
                this.jobs = initializedJobs;
            })
            .then(() => {
                // when read and setup, call run for all jobs
                this.jobs.forEach(j => {
                    j.run();
                });
            });
    }
}

module.exports = new JobRunner();