import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from   '@angular/common/http';
import { PolicyComponent } from './policy/policy.component';
import { LocationsComponent } from './locations/locations.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { MyproductsComponent } from './myproducts/myproducts.component';
import { ApiService } from './api.service';
import { PagenationComponent } from './pagenation/pagenation.component';
import { BookComponent } from './book/book.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    PolicyComponent,
    LocationsComponent,
    ProductsComponent,
    LoginComponent,
    MyproductsComponent,
    PagenationComponent,
    BookComponent,
    AboutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
