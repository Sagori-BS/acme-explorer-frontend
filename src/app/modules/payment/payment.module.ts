import { GraphQLModule } from '../graphql/graphql.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbButtonModule,
  NbCardModule,
  NbDialogModule,
  NbFormFieldModule,
  NbInputModule,
  NbSpinnerModule
} from '@nebular/theme';
import { AppRoutingModule } from '../routing/app-routing.module';
import { PaymentComponent } from './payment.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgxTranslateModule } from '../translate/translate.module';

@NgModule({
  declarations: [PaymentComponent],
  imports: [
    NgxPayPalModule,
    GraphQLModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxTranslateModule,
    NbFormFieldModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    NbSpinnerModule,
    NbDialogModule.forChild()
  ],
  exports: [PaymentComponent]
})
export class PaymentModule {}
