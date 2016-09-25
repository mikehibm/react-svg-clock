import * as React from 'react';
import * as PubSub from 'pubsub-js';
import { PulseGenerator } from './PulseGenerator';
import { ClockStore } from './ClockStore';
import { Clock } from './Clock';

export class App extends React.Component<any, any>{

    pulse = new PulseGenerator(200);

    constructor(props) {
        super(props);
    }

    render() {

        const data = new ClockStore().getState();
        const clocks = data.clocks.map((p, ix) =>
            <Clock key={p.name} {...p} />
        );

        return (
            <div>
                <header>
                    <h1>SVG Clock</h1>
                </header>
                <div>
                    { clocks }
                </div>
                <footer>&copy;2016 Companyname</footer>
            </div>
        );
    }
}