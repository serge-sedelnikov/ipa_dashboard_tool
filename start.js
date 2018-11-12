const storage = require('node-persist');
const jobRunner = require('./src/job-runner');

// wrapper for async storage init method
async function run() {
    // initialize cache store
    await storage.init();
    // resolve jobs and start logic
    jobRunner.run();
}
// main run method call
run();
