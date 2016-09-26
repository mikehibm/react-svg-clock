import * as moment from 'moment';
import * as React from 'react';

interface ClockProps {
    name?: string,
    tz?: number,
    now?: Date
}

export class Clock extends React.Component<ClockProps, {}> {

    render() {
        const { name = '???', tz = 0, now = new Date() } = this.props;
        const nowStr = moment(now).utc().add(tz, 'hours').format('YYYY-MM-DD HH:mm:ss');

        return (
            <div>{name} {tz} {nowStr}</div>
        );
    }
}