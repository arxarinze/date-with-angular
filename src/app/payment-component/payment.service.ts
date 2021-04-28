import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../models/payment.model';

@Injectable()
export class PaymentService {
    constructor(private http: HttpClient) { }
    private baseUrl = 'http://localhost:8000/payments';
    addPayment(payment: Payment) {
        //this would be the request to the server but i will mock the results as suggested
        return this.http.post<any>(this.baseUrl, payment);
    }
}