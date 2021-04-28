import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from './models/payment.model';

import { select, Store } from '@ngrx/store';

import { selectPayments } from './store/payment/store/selector/payment.selectors';

import { PaymentState } from './store/payment/store/reducer/payment.reducer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  payments$: Observable<Payment[]>;
  constructor(private store: Store<PaymentState>) {
    this.payments$ = this.store.pipe(select(selectPayments));
  }
}
