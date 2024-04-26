import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './homecomponents/header/header.component';
import { CategoriesComponent } from './homecomponents/categories/categories.component';
import { CardComponent } from './homecomponents/dishes/card.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CartpageComponent } from './pages/cartpage/cartpage.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './homecomponents/footer/footer.component';
import { HeadComponent } from './cartcomponents/head/head.component';
import { ProductComponent } from './cartcomponents/product/product.component';
import { CartComponent } from './cartcomponents/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    CardComponent,
    HomepageComponent,
    CartpageComponent,
    FooterComponent,
    HeadComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
