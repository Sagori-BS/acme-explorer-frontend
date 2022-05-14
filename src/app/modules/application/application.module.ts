import { GraphQLModule } from './../graphql/graphql.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListApplicationsComponent } from './components/list-applications/list-applications.component';
import { NbAccordionModule, NbCardModule } from '@nebular/theme';
import { ManagerApplicationsComponent } from './components/manager-applications/manager-applications.component';

@NgModule({
  declarations: [ListApplicationsComponent, ManagerApplicationsComponent],
  imports: [CommonModule, GraphQLModule, NbCardModule, NbAccordionModule],
  exports: [ListApplicationsComponent, ManagerApplicationsComponent]
})
export class ApplicationModule {}
