import { Payment } from 'src/app/models/payment.model';
import * as fromPayment from './payment.actions';

describe('Payments', () => {
  it('should return an action', () => {
    expect(fromPayment.addPayment(new Payment).type).toBe('[Payment] Load Payments');
  });
});
