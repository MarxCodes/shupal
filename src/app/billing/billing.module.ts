import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing/billing.component';
import { BillAddressComponent } from './components/bill-address/bill-address.component';
import { BillUserComponent } from './components/bill-user/bill-user.component';
import { BankDetailComponent } from './components/bank-detail/bank-detail.component';



@NgModule({
  declarations: [
    BillingComponent,
    BillAddressComponent,
    BillUserComponent,
    BankDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BillingModule { }
