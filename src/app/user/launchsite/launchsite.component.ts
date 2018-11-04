import { Component, OnInit } from '@angular/core';

import { Launchsite } from '../models/launchsite';
import { FlightService } from '../services/flight.service'

@Component({
  selector: 'app-launchsite',
  templateUrl: './launchsite.component.html',
  styleUrls: ['./launchsite.component.scss']
})
export class LaunchsiteComponent implements OnInit {

  launchSite: Launchsite;

  constructor(private flightService: FlightService) { }

  ngOnInit() {
    this.getLaunch(1);
  }

  getLaunch(flight_number: number): void {
    //this.flightService.getLaunch().subscribe(flight => this.launchSite = flight.launch_site);
  }
}
