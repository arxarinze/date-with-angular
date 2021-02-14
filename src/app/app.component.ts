import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCardPayment } from './models/credit-card-payment';

import { select, Store } from '@ngrx/store';

import { selectPayments } from './store/creditcard/store/selector/credit-card-payment.selectors';

import { CreditCardPaymentState } from './store/creditcard/store/reducer/credit-card-payment.reducer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  payments$: Observable<CreditCardPayment[]>;
  constructor(private store: Store<CreditCardPaymentState>) {
    this.payments$ = this.store.pipe(select(selectPayments));
  }
}
