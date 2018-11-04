import { Component, OnInit } from '@angular/core';
import { Launch } from '../models/launch';
import { FlightService } from '../services/flight.service'

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  flights: Launch[];
  selectedOrder: any;

  orders: any[] = [
    { value: 'alpha', viewValue: 'Alphabetical Order' },
    { value: 'size', viewValue: 'Diameter' }
  ];

  constructor(private flightService: FlightService) {
  }

  ngOnInit() {
    this.getFlights();
  }

  getFlights(): void {
    this.flightService.getFlights().subscribe(flights => this.flights = flights);
  }
}
