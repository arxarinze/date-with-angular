import { Action, createReducer, on } from '@ngrx/store';
import { CreditCardPayment } from 'src/app/models/credit-card-payment';
import * as CreditCardPaymentActions from '../action/credit-card-payment.actions';

export const creditCardPaymentFeatureKey = 'creditCardPayment';

export interface CreditCardPaymentState {
  payments: CreditCardPayment[];
}

export const initialState: CreditCardPaymentState = {
  payments: []
};

export function reducer(state: CreditCardPaymentState | undefined, action: Action): any {

  return customerReducer(state, action);
}


export const customerReducer = createReducer(

  initialState,

  on(CreditCardPaymentActions.addPayment,

    (state: CreditCardPaymentState, { payment }) =>

    ({
      ...state,

      payments: [...state.payments, payment]

    }))

);

