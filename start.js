const storage = require('node-persist');
const jobRunner = require('./src/job-runner');
const cacheResolver = require('./src/cache-resolver');

// wrapper for async storage init method
async function run() {
    // initialize cache store
    await storage.init();
    // resolve jobs and start logic
    jobRunner.run();
    // start cache resolver
    cacheResolver.run();
}
// main run method call
run();
