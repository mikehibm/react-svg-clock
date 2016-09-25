import * as moment from 'moment';
import * as React from 'react';
import * as PubSub from 'pubsub-js';
import { ClockStore, ClockProps } from './ClockStore';

export class Clock extends React.Component<ClockProps, any> {

    constructor(props) {
        super(props);
        this.state = { now: new Date() };
    }

    componentWillMount() {
        PubSub.subscribe('pulse', (msg, data) => {
            const now = data;
            this.setState({ now });
        });
    }

    render() {
        const { name = '???', tz = 0 } = this.props;
        const { now = new Date() } = this.state;

        const nowStr = moment(now).utc().add(tz, 'hours').format('YYYY-MM-DD HH:mm:ss');
        return (
            <div>{name} {tz} {nowStr}</div>
        );
    }
}