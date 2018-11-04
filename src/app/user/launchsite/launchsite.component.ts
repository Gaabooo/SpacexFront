import { Component, OnInit } from '@angular/core';

import { Launchsite } from '../models/launchsite';
import { FlightService } from '../services/flight.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-launchsite',
  templateUrl: './launchsite.component.html',
  styleUrls: ['./launchsite.component.scss']
})
export class LaunchsiteComponent implements OnInit {

  launchSite: Launchsite;

  constructor(private route: ActivatedRoute, private flightService: FlightService, private location: Location) { }

  ngOnInit() {
    this.getLaunch();
  }

  goBack(): void {
    this.location.back();
  }

  getLaunch(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.flightService.getLaunch(id)
      .subscribe(launch => this.launchSite = launch.launch_site);
  }
}
