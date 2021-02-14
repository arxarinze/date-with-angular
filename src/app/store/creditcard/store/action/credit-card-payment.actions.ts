import { createAction, props } from '@ngrx/store';
import { CreditCardPayment } from 'src/app/models/credit-card-payment';


export const addPayment = createAction(

  '[CreditCardPayment] Add CreditCardPayments',
  (payment: CreditCardPayment) => ({ payment })

);



