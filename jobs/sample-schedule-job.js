const { ScheduleJob } = require('../src/base/schedule-job');

/**
 * Sample job that runs on schedule
 */
class SampleScheduleJob extends ScheduleJob {

    /** The method returns the desired schedule. */
    getSchedule(){
        // return CRON schedule format
        // this sample job runs every 15 seconds
        return '*/15 * * * *';
    }

    /**
     * The method executes on schedule.
     */
    onSchedule(){
        // this method fires every time the schedule is matched and activated
        console.log(`Schedule job with ID ${this.id} was activated at ${new Date()}`);
        // sending event to update widgets
        this.sendEvent('schedule-matched', new Date());
    }
}