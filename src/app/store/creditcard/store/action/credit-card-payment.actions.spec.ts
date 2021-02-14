import * as fromCreditCardPayment from './credit-card-payment.actions';

describe('loadCreditCardPayments', () => {
  it('should return an action', () => {
    expect(fromCreditCardPayment.loadCreditCardPayments().type).toBe('[CreditCardPayment] Load CreditCardPayments');
  });
});
