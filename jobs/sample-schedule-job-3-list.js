const { ScheduleJob } = require('../src/base/schedule-job');
let count = 0;
/**
 * Sample job that runs on schedule
 */
class SampleListJob extends ScheduleJob {

    /** The method returns the desired schedule. */
    getSchedule(){
        // return CRON schedule format
        // this sample job runs every 15 seconds
        return '*/15 * * * * *';
    }

    getRandomItems(){
        let arr = [];
        for(let i = 0; i < 5; i++){
            let o = 'Item number: ' + Math.floor((Math.random() * 10) + 1);
            arr.push({
                text: o,
                icon: 'http://pluspng.com/img-png/github-octocat-logo-png-octocat-icon-png-50-px-1600.png'
            });
        }
        return arr;
    }

    /**
     * The method executes on schedule.
     */
    onSchedule(){

        let list = this.getRandomItems();
        // this method fires every time the schedule is matched and activated
        console.log(`Schedule job with ID ${this.id} was activated at ${new Date()}`);
        // sending event to update widgets
        count++;
        this.sendEvent('list-of-items', list);
    }
}

module.exports = SampleListJob;