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
        // finds all jobs in the \jobs folder, imports them and call run method on them
        fs.readdirSync(jobsFolder).forEach(file => {
            console.log(file);
        });
    }
}

module.exports = new JobRunner();