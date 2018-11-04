import { Launchsite } from "./launchsite";

export class Launch {
  flight_number: number;
  mission_name: String;
  mission_id: any[];
  upcoming: Boolean;
  launch_year: String;
  launch_date_unix: Date;
  launch_date_utc: Date;
  launch_date_local: Date;
  is_tentative: Boolean;
  tentative_max_precision: String;
  rocket: any;
  ships: any[];
  telemetry: any;
  launch_site: Launchsite;
  launch_success: Boolean;
  links: any;
  details: String;
  static_fire_date_utc: Date;
  static_fire_date_unix: Date;
};