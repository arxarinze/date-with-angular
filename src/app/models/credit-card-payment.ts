import { required, compare, maxLength, date, minDate, minLength, minNumber } from "@rxweb/reactive-form-validators";
export class CreditCardPayment {
  @required()
  creditCardNumber!: string;
  @required()
  cardHolder!: string;
  @required()
  @date()
  @minDate({ value: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1) })
  expirationDate !: string;
  @minLength({ value: 3 })
  @maxLength({ value: 3 })
  securityCode !: number;
  @required()
  @minNumber({ value: 1 })
  amount !: number;
}