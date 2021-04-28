import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment-component/payment.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { PaymentFeatureKey, reducer } from './store/payment/store/reducer/payment.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { MockModule } from './mock/mock.module';
import { PaymentService } from './payment-component/payment.service';
const mockModule = environment.mockApi ? [MockModule] : [];
@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent
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
      { path: 'pay', component: PaymentComponent },
    ]),
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreModule.forFeature(PaymentFeatureKey, reducer),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
