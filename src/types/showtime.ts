export interface ScheduleItem {
  time: string;
  purchase_url: string;
}

export interface ShowtimeGroup {
  cinema: {
    id: number;
    name: string;
  };
  schedule: ScheduleItem[];
}
