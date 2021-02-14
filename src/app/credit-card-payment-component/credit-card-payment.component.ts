import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { ToastrService } from 'ngx-toastr';
import { addPayment } from '../store/creditcard/store/action/credit-card-payment.actions';
import { CreditCardPaymentState } from '../store/creditcard/store/reducer/credit-card-payment.reducer';
import { CreditCardPayment } from '../models/credit-card-payment';
import { CreditCardPaymentService } from './credit-card-payment.service';
@Component({
  selector: 'app-credit-card-payment',
  templateUrl: './credit-card-payment.component.html',
  styleUrls: ['./credit-card-payment.component.css']
})
export class CreditCardPaymentComponent implements OnInit {
  registerForm!: FormGroup;
  payment!: CreditCardPayment;
  submitted = false;
  constructor(private formBuilder: RxFormBuilder, private store: Store<CreditCardPaymentState>, private toast: ToastrService, private paymentService: CreditCardPaymentService) { }

  ngOnInit() {
    this.payment = new CreditCardPayment();
    this.registerForm = this.formBuilder.formGroup(this.payment);
  }
  onSubmit() {
    this.submitted = true;
    this.paymentService.addPayment(this.payment).subscribe((data) => {
      if (data.status == 200) {
        this.toast.info('Submitted Successfully');
        this.store.dispatch(addPayment(this.payment));
      }
    });
  }
}
