const mqtt = require('mqtt');
const { Job } = require('./job');

/** Runs job on schedule. */
class MqttMessageJob extends Job {

    /** Gets the address of the MQTT broker to connect to. For instance: mqtt://test.mosquitto.org*/
    getMqttBrokerUri() {
        throw 'The method needs to return MQTT broker URI, for instance: mqtt://test.mosquitto.org';
    }

    /** Gets the array of topics to subscribe to. */
    getListOfTopics() {
        throw 'The method needs to return the array of strings: topics to subscribe to. For instance: ["topic1/#", "topic2", "topic3/event1/value3"]';
    }

    /**
     * Executes on MQTT message arrived
     * @param {String} topic Received topic
     * @param {Buffer} message Message buffer
     */
    onMessage(topic, message){
        throw 'Method onMessage(topic, message) need to be implemented. The method fires on MQTT message received.'
    }

    /** Connects to given MQTT broker, subscribes for topics and waits for messages. */
    run() {
        // get MQTT broker 
        const brokerAddress = this.getMqttBrokerUri();
        // subscribe for topics
        const client = mqtt.connect(brokerAddress);

        client.on('connect', function () {
            console.log(`Job ${this.id} is connected to MQTT ${brokerAddress}. Waiting for messages...`);
            // on connected, subscribe for topics
            let topics = getListOfTopics();
            topics.forEach(topic => {
                client.subscribe(topic);
            });
        });

        client.on('message', this.onMessage.bind(this));

        client.on('error', (err) => {
            throw err;
        })
    }
}

module.exports.MqttMessageJob = MqttMessageJob;