import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPayment from '../reducer/credit-card-payment.reducer';
export const selectPaymentState = createFeatureSelector<fromPayment.CreditCardPaymentState>(

    fromPayment.creditCardPaymentFeatureKey,

);



export const selectPayments = createSelector(

    selectPaymentState,

    (state: fromPayment.CreditCardPaymentState) => state.payments

);