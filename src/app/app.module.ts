import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { CreditCardFormComponent } from './pages/credit-card-form/credit-card-form.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { ShieldCheckComponent } from './components/shield-check/shield-check.component';

@NgModule({
  declarations: [AppComponent, CreditCardFormComponent, FormComponent, ButtonComponent, CardComponent, ShieldCheckComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
