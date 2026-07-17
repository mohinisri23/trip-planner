export interface Stop {
  name: string;
  time: string;
  description: string;
}

export interface Day {
  day: number;
  title: string;
  stops: Stop[];
}

export interface Trip {
  tripTitle: string;
  days: Day[];
}