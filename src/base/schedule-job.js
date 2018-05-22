const schedule = require('node-schedule');

const { Job } = require('./job');

/** Runs job on schedule. */
class ScheduleJob extends Job {

    /** Gets the CRON format string to define schedule. */
    getSchedule(){
        throw 'Method getSchedule() need to return CRON format schedule (* * * * * *). Implement method getSchedule().'
    }

    /** Activates the scheduler using CRON string from getSchedule() method. */
    run(){
        // get cron schedule
        const cron = this.getSchedule();
        schedule.scheduleJob(cron, this.onSchedule.bind(this));
    }

    /** Executes on schedule. */
    onSchedule(){
        throw 'Method onSchedule() need to be implemented. This method executes on given schedule.'
    }
}

module.exports.ScheduleJob = ScheduleJob;