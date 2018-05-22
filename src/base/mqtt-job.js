const { Job } = require('./job');

/** Runs job on schedule. */
class MqttMessageJob extends Job {

    /** Connects to given MQTT broket, subscribes for topics and waits for messages. */
    run(){
        // get cron schedule
        const cron = this.getSchedule();
        schedule.scheduleJob(cron, this.onSchedule.bind(this));
    }
}

module.exports.MqttMessageJob = MqttMessageJob;