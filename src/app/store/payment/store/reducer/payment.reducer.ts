import { Action, createReducer, on } from '@ngrx/store';
import { Payment } from 'src/app/models/payment.model';
import * as PaymentActions from '../action/payment.actions';

export const PaymentFeatureKey = 'Payment';

export interface PaymentState {
  payments: Payment[];
}

export const initialState: PaymentState = {
  payments: []
};

export function reducer(state: PaymentState | undefined, action: Action): any {

  return customerReducer(state, action);
}


export const customerReducer = createReducer(

  initialState,

  on(PaymentActions.addPayment,

    (state: PaymentState, { payment }) =>

    ({
      ...state,

      payments: [...state.payments, payment]

    }))

);

