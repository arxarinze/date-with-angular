import { of } from 'rxjs';
import { HttpRequest, HttpResponse } from '@angular/common/http';
// Local imports

import {Payment } from '../models/payment.model';


let payments: any[] = [];
const addPayment = (request: HttpRequest<any>) => {
    const payment = request.body as Payment;
    const res = {
        status: 200,
        payment: payment
    };
    payments.push(payment);
    return of(new HttpResponse({
        status: 200, body: res
    }));
};

export const selectHandler = (request: HttpRequest<any>) => {
    const requestUrl = new URL(request.url);
    const getOneRegexp: RegExp = new RegExp(`/payments`);
    switch (request.method) {
        case 'POST':
            return addPayment;
        default:
            return null;
    }
};