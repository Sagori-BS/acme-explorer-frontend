import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/modules/user/services/user.service';
import { ApplicationService } from '../../application.service';
import { IApplication } from '../../interfaces/application.interface';

@Component({
  selector: 'manager-applications',
  templateUrl: './manager-applications.component.html',
  styleUrls: ['./manager-applications.component.scss']
})
export class ManagerApplicationsComponent implements OnInit {
  applications: IApplication[] = [];
  loading = false;

  constructor(
    private applicationService: ApplicationService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadNext();
  }

  loadNext() {
    this.loading = true;

    this.userService.getCurrentUser.subscribe((user) => {
      console.log(user.id);
      this.applicationService
        .getApplications({
          where: {
            manager: {
              id: user.id
            }
          }
        })
        .subscribe({
          next: ({ data }) => {
            console.log(data);
            this.applications = data.getApplications;
            this.loading = false;
          }
        });
    });
  }
}
