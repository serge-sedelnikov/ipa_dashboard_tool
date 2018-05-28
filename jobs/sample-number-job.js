const { ScheduleJob } = require('../src/base/schedule-job');
let count = 0;
/**
 * Sample job that runs on schedule
 */
class SampleNumberJob extends ScheduleJob {

    /** The method returns the desired schedule. */
    getSchedule(){
        // return CRON schedule format
        // this sample job runs every second
        return '* * * * * *';
    }

    /**
     * The method executes on schedule.
     */
    onSchedule(){
        // this method fires every time the schedule is matched and activated
        console.log(`Schedule job with ID ${this.id} was activated at ${new Date()}`);
        // sending event to update widgets
        count++;
        this.sendEvent('random-number', count);
    }
}

module.exports = SampleNumberJob;