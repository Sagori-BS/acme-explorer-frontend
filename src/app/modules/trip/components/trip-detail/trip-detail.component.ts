import { AuthService } from 'src/app/modules/authentication/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ITrip } from '../../interfaces/trip.interface';
import { TripService } from '../../trip.service';
import { NbDialogService } from '@nebular/theme';
import { ApplyToTripDialogComponent } from './dialog/apply-to-trip-dialog/apply-to-trip-dialog.component';

@Component({
  selector: 'trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.scss']
})
export class TripDetailComponent implements OnInit {
  trip: ITrip | undefined;
  userRole: string | undefined;
  isOwnTrip = false;

  constructor(
    private route: ActivatedRoute,
    private tripService: TripService,
    private location: Location,
    private dialogService: NbDialogService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getTripDetail();
    this.userRole = this.authService.getRole();
  }

  getTripDetail(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.tripService.getTripDetail(id).subscribe(({ data }) => {
      this.trip = data.getTripById;
      this.checkOwnTrip();
    });
  }

  checkOwnTrip(): void {
    this.authService.getCurrentUser.subscribe((user) => {
      this.isOwnTrip =
        user.role === 'MANAGER' && user.id === this.trip?.manager.id;
    });
  }

  goBack(): void {
    this.location.back();
  }

  openModal(): void {
    this.dialogService.open(ApplyToTripDialogComponent, {
      context: {
        title: 'Apply to trip',
        trip: this.trip
      }
    });
  }

  modifyTrip(): void {
    console.log('modificar');
  }

  cancelTrip(): void {
    console.log('cancelar');
  }
}
