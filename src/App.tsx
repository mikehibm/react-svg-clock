import * as React from 'react';
import * as PubSub from 'pubsub-js';
import { PulseGenerator } from './PulseGenerator';
import { ClockStore, ClockModel } from './ClockStore';
import { Clock } from './Clock';

export class App extends React.Component<any, any>{

    pulseGenerator = new PulseGenerator(200);

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
        const { now } = this.state;
        const data = new ClockStore().getState();
        const clocks = data.clocks.map((p, ix) =>
            <Clock key={p.name} {...p} now={ now } />
        );

        return (
            <div>
                <header>
                    <h1>SVG Clock</h1>
                </header>
                <div className="clocks">
                    { clocks }
                </div>
                <footer>&copy;2016 Companyname</footer>
            </div>
        );
    }
}