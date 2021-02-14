import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreditCardPayment } from '../models/credit-card-payment';

@Injectable()
export class CreditCardPaymentService {
    constructor(private http: HttpClient) { }
    private baseUrl = 'http://localhost:8000/payments';
    addPayment(payment: CreditCardPayment) {
        //this would be the request to the server but i will mock the results as suggested
        return this.http.post<any>(this.baseUrl, payment);
    }
}