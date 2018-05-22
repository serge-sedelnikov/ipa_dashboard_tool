const mqtt = require('mqtt');
const { Job } = require('./job');

/** Runs job on schedule. */
class MqttMessageJob extends Job {

    /** Gets the address of the MQTT broker to connect to. */
    getMqttBrokerUri(){
        throw 'The method needs to return MQTT broker URI, for instance: mqtt.mosquitto.com';
    }

    /** Gets the array of topics to subscribe to. */
    getListOfTopics(){
        throw 'The method needs to return the array of strings: topics to subscribe to. For instance: ["topic1/#", "topic2", "topic3/event1/value3"]';
    }

    /** Connects to MQTT */
    initializeAsync(){
        return Promise((res, rej)=> {

        });
    }

    /** Connects to given MQTT broker, subscribes for topics and waits for messages. */
    run(){
        // subscribe for topics
    }
}

module.exports.MqttMessageJob = MqttMessageJob;