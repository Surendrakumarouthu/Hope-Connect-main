import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductComponent } from './product/product.component';
import { ManageproductComponent } from './manageproduct/manageproduct.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HiglightPipe } from './higlight.pipe';
import { FilteredproductsComponent } from './filteredproducts/filteredproducts.component';
import { ApiDataComponent } from './api-data/api-data.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    LoginComponent,
    AddproductComponent,
    ProductComponent,
    ManageproductComponent,
    HiglightPipe,
    FilteredproductsComponent,
    ApiDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
