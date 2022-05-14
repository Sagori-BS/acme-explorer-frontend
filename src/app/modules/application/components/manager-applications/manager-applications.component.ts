import { Component, OnInit } from '@angular/core';
import { TripService } from 'src/app/modules/trip/trip.service';

@Component({
  selector: 'manager-applications',
  templateUrl: './manager-applications.component.html',
  styleUrls: ['./manager-applications.component.scss']
})
export class ManagerApplicationsComponent implements OnInit {
  loading = false;

  constructor(private tripService: TripService) {}

  ngOnInit(): void {}
}
