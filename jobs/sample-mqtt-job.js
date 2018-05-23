const { MqttMessageJob } = require('../src/base/mqtt-job');

/**
 * Sample job that runs on MQTT event.
 */
class SampleMqttEventJob extends MqttMessageJob {

    /** Gets the MQTT broker address */
    getMqttBrokerUri(){
        // return broker address string.
        return 'mqtt://mqtt.intelligentpackaging.online';
    }
    
    /** Returns the array of topics to subscribe to. */
    getListOfTopics(){
        return [
            'topic1',
            'topic2'
        ]
    }

    /**
     * Executes on MQTT message received.
     * @param {String} topic Topic that fired the message.
     * @param {Buffer} message Message buffer.
     */
    onMessage(topic, message){
        let strMessage = message.toString();
        console.log(`Mqtt message received: ${topic}, ${strMessage}`);
        // update widgets
        this.sendEvent(topic, strMessage);
    }
}

module.exports = SampleMqttEventJob;