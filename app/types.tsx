import { StaticImageData } from "next/image";

export interface Event {
  post?: string;
  group?: string;
  message?: string;
  photo?: StaticImageData;
}

export interface Notification {
  id: number;
  name: string;
  profileImg: StaticImageData;
  timeNotified: string;
  event: Event;
  notif: string;
  read: boolean;
}
