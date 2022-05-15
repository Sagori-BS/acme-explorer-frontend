import { ListTripsComponent } from './../trip/components/list-trips/list-trips.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../authentication/components/login/login.component';
import { RegisterComponent } from './../authentication/components/register/register.component';
import { TripDetailComponent } from '../trip/components/trip-detail/trip-detail.component';
import { CreateTripComponent } from '../trip/components/create-trip/create-trip.component';
import { ListApplicationsComponent } from '../application/components/list-applications/list-applications.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { AuthGuard } from 'src/app/modules/authentication/auth.guard';
import {
  ALL_ROLES,
  MANAGER,
  SPONSOR,
  UserRoles
} from 'src/utils/enums/user-roles.enum';
import { ProfileComponent } from '../user/components/profile/profile.component';
import { SelfTripsComponent } from '../trip/components/self-trips/self-trips.component';
import { CreateSponsorshipComponent } from '../sponsorship/components/create-sponsorship/create-sponsorship.component';

const routes: Routes = [
  { path: '', redirectTo: 'trips', pathMatch: 'full' },
  {
    path: 'trips',
    component: ListTripsComponent
  },
  {
    path: 'trips/:id',
    component: TripDetailComponent
  },
  {
    path: 'trips/create',
    component: CreateTripComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRoles: MANAGER
    }
  },
  {
    path: 'trips/self',
    component: SelfTripsComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRoles: MANAGER
    }
  },
  {
    path: 'sponsors/create',
    component: CreateSponsorshipComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRoles: SPONSOR
    }
  },
  {
    path: 'applications',
    component: ListApplicationsComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRoles: [UserRoles.EXPLORER, UserRoles.MANAGER, UserRoles.ADMIN]
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRoles: [UserRoles.GUEST]
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRoles: ALL_ROLES
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRoles: [UserRoles.GUEST]
    }
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
