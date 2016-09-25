import * as PubSub from 'pubsub-js';

export class PulseGenerator {

    timer: number;

    constructor(interval: number) {
        this.timer = setInterval(() => {
            const now = new Date();
            PubSub.publish('pulse', now);
        }, interval);
    }
}