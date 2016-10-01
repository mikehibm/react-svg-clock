import * as moment from 'moment';
import * as React from 'react';

interface ClockProps {
    name?: string,
    tz?: number,
    now?: Date
}

export class Clock extends React.Component<ClockProps, {}> {

    shouldComponentUpdate(nextProps, nextState) {
        return moment(nextProps.now).second() !== moment(this.props.now).second();
    }

    render() {
        const { name = '???', tz = 0, now = new Date() } = this.props;
        const cur = moment(now).utc().add(tz, 'hours');
        const nowStr = cur.format('YYYY-MM-DD HH:mm:ss');

        const h = cur.hour();
        const m = cur.minute();
        const s = cur.second();

        const angle_offset = (Math.PI / 2)

        const ha = (Math.PI * 2 / 12 * h) + (Math.PI * 2 / 60 / 60 * m) + (Math.PI * 2 / 60 / 60 / 60 * s) + angle_offset;
        const hx = Math.cos(ha) * -180 + 320;
        const hy = Math.sin(ha) * -180 + 320;

        const ma = (Math.PI * 2 / 60 * m) + (Math.PI * 2 / 60 / 60 * s) + angle_offset;
        const mx = Math.cos(ma) * -260 + 320;
        const my = Math.sin(ma) * -260 + 320;

        const sa = (Math.PI * 2 / 60 * s) + angle_offset;
        const sx = Math.cos(sa) * -240 + 320;
        const sy = Math.sin(sa) * -240 + 320;

        return (
            <div>
                <div>{name} {tz} {nowStr}</div>
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="200" height="200"
                    viewBox="0 0 640 640">
                    <circle cx="320" cy="320" r="300" stroke="#333" stroke-width="4" fill="#eef" />
                    <circle cx="320" cy="320" r="20" stroke="#444" stroke-width="4" fill="none" />
                    <line x1="320" y1="320" x2={hx} y2={hy} stroke="#444" stroke-width="1" />
                    <line x1="320" y1="320" x2={mx} y2={my} stroke="#444" stroke-width="1" />
                    <line x1="320" y1="320" x2={sx} y2={sy} stroke="#444" stroke-width="1" />
                </svg>
            </div>
        );
    }
}