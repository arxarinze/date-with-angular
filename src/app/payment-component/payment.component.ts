import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { ToastrService } from 'ngx-toastr';

import { PaymentState } from '../store/payment/store/reducer/payment.reducer';
import { Payment } from '../models/payment.model';
import { PaymentService } from './payment.service';
import { addPayment } from '../store/payment/store/action/payment.actions';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  registerForm!: FormGroup;
  payment!: Payment;
  submitted = false;
  constructor(private formBuilder: RxFormBuilder, private store: Store<PaymentState>, private toast: ToastrService, private paymentService: PaymentService) { }

  ngOnInit() {
    this.payment = new Payment();
    this.registerForm = this.formBuilder.formGroup(this.payment);
  }
  onSubmit() {
    this.submitted = true;
    this.paymentService.addPayment(this.payment).subscribe((data:any) => {
      const clone = { 
        pym: Object.assign({}, this.payment) 
       };
      if (data.status == 200) {
    this.registerForm.reset()
        this.toast.info('Submitted Successfully');
        this.store.dispatch(addPayment(clone.pym));
      }
    });
  }
}
