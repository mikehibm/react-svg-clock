export interface ClockProps {
  name: string,
  tz: number
}

export class ClockStore {
  private clocks: Array<ClockProps> = [
    { name: 'UTC', tz: 0 },
    { name: 'JPN', tz: 9 },
    { name: 'HWI', tz: -10 }
  ];

  getState() {
    return { clocks: this.clocks };
  }
}