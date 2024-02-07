import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestGlobalCSSComponent } from './components/test-global-css/test-global-css.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './reusables/button/button.component';
import { BannerComponent } from './reusables/banner/banner.component';
import { AllCategoriesComponent } from './pages/all-categories/all-categories.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderSummaryComponent } from './pages/order-summary/order-summary.component'

@NgModule({
  declarations: [
    AppComponent,
    TestGlobalCSSComponent,
    HeaderComponent,
    HomeComponent,
    Error404Component,
    FooterComponent,
    ButtonComponent,
    BannerComponent,
    AllCategoriesComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    OrderSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
