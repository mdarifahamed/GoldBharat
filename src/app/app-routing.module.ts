import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { PolicyComponent } from './policy/policy.component';
import { LocationsComponent } from './locations/locations.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { MyproductsComponent } from './myproducts/myproducts.component';
import { PagenationComponent } from './pagenation/pagenation.component';




const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"register", component:RegisterComponent},
  {path:"policy", component:PolicyComponent},
  {path:"locations", component:LocationsComponent},
  {path:"products", component:ProductsComponent},
  {path:"login", component:LoginComponent},
  {path:"myproducts", component:MyproductsComponent},
  {path:"page", component:PagenationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
