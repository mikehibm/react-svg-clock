import * as moment from 'moment';
import * as React from 'react';

interface ClockProps {
    name?: string,
    tz?: number,
    now?: Date
}

const ANGLE_OFFSET = (Math.PI / 2);
const W = 640;
const H = 640;
const CX = W / 2;
const CY = H / 2;

export class Clock extends React.Component<ClockProps, {}> {

    shouldComponentUpdate(nextProps, nextState) {
        return moment(nextProps.now).second() !== moment(this.props.now).second();
    }

    render() {
        const { name = '???', tz = 0, now = new Date() } = this.props;
        const cur = moment(now).utc().add(tz, 'hours');
        const nowStr = cur.format('YYYY-MM-DD HH:mm:ss');

        return (
            <div>
                <div>{name}: {nowStr}</div>
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="200" height="200"
                    viewBox="0 0 640 640">
                    {this.renderBorder()}
                    {this.renderNumbers()}
                    {this.renderHands(cur)}
                </svg>
            </div>
        );
    }

    renderBorder() {
        return (
            <g>
                <circle cx={CX} cy={CY} r={W*30/64} stroke="#666" strokeWidth="4" fill="#fcfcff" />
            </g>
        );
    }

    renderNumbers() {
        const numbers = [];
        for (let i = 0; i < 12; i++) {
            const numberStr = (i + 11) % 12 + 1 + '';
            const a = (Math.PI * 2 / 12 * i) + ANGLE_OFFSET;
            const x1 = Math.cos(a) * -290 + CX;
            const y1 = Math.sin(a) * -290 + CY;
            const x2 = Math.cos(a) * -270 + CX;
            const y2 = Math.sin(a) * -270 + CY;
            const tx = Math.cos(a) * -220 + CX - (numberStr.length * 20);
            const ty = Math.sin(a) * -220 + CY + 20;
            const n =
                <g key={i} fontSize="60">
                    <line x1={x1} y1={y1} x2={x2} y2={y2}  strokeWidth="8" stroke="#444" fill="#444" />
                    <text x={tx} y={ty} className="clock-number" >{numberStr}</text>
                </g>;
            numbers.push(n);
        }
        return numbers;
    }

    renderHands(cur) {
        const h = cur.hour();
        const m = cur.minute();
        const s = cur.second();

        //Hour hand
        const ha = (Math.PI * 2 / 12 * h) + (Math.PI * 2 / 60 / 60 * m) + (Math.PI * 2 / 60 / 60 / 60 * s) + ANGLE_OFFSET;
        const hx = Math.cos(ha) * -180 + CX;
        const hy = Math.sin(ha) * -180 + CY;

        //Minute hand
        const ma = (Math.PI * 2 / 60 * m) + (Math.PI * 2 / 60 / 60 * s) + ANGLE_OFFSET;
        const mx = Math.cos(ma) * -260 + CX;
        const my = Math.sin(ma) * -260 + CY;

        //Second hand
        const sa = (Math.PI * 2 / 60 * s) + ANGLE_OFFSET;
        const sx = Math.cos(sa) * -240 + CX;
        const sy = Math.sin(sa) * -240 + CY;

        return (
            <g>
                <line x1={CX} y1={CY} x2={hx} y2={hy} stroke="#00C" strokeWidth="20" />
                <line x1={CX} y1={CY} x2={mx} y2={my} stroke="#44F" strokeWidth="10" />
                <line x1={CX} y1={CY} x2={sx} y2={sy} stroke="#E00" strokeWidth="3" />
                <circle cx={CX} cy={CY} r="12" stroke="#888" strokeWidth="5" fill="#000" />
            </g>
        );
    }
}