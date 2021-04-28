import { required, email, minLength, maxLength } from "@rxweb/reactive-form-validators";
export class Payment {
  @required()
  firstName!: string;
  @required()
  lastName!: string;
  @required()
  @email()
  email!: string;
  @required()
  monthlyAdvertisingBudget!: number
  @required()
  @minLength({ value: 10 })
  phoneNumber !: number;
}