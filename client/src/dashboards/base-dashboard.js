import { Component } from 'react';

class Dashboard extends Component {

    static get __name() {
        return this.getName();
    }

    static getName(){
        throw new Error('Method getName need to be implemented. Return name as a string.');
    }

    render(){
        return null;
    }
}

export default Dashboard;