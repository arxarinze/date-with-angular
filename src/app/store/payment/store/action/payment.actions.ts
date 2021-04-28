import { createAction, props } from '@ngrx/store';
import { Payment } from 'src/app/models/payment.model';


export const addPayment = createAction(

  '[Payment] Add Payments',
  (payment: Payment) => ({ payment })

);



