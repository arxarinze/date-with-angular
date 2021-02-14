import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditCardPaymentComponent } from './credit-card-payment-component/credit-card-payment.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { creditCardPaymentFeatureKey, reducer } from './store/creditcard/store/reducer/credit-card-payment.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { MockModule } from './mock/mock.module';
import { CreditCardPaymentService } from './credit-card-payment-component/credit-card-payment.service';
const mockModule = environment.mockApi ? [MockModule] : [];
@NgModule({
  declarations: [
    AppComponent,
    CreditCardPaymentComponent
  ],
  imports: [
    ...mockModule,
    BrowserModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, FormsModule, RxReactiveFormsModule,
    AppRoutingModule,

    RouterModule.forRoot([
      { path: 'credit-card-pay', component: CreditCardPaymentComponent },
    ]),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forFeature(creditCardPaymentFeatureKey, reducer),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [CreditCardPaymentService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
