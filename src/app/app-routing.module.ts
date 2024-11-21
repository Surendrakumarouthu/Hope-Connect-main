import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ManageproductComponent } from './manageproduct/manageproduct.component';
import { ProductComponent } from './product/product.component';
import { FilteredproductsComponent } from './filteredproducts/filteredproducts.component';
import { ApiDataComponent } from './api-data/api-data.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:HomeComponent,
    children:[
      {path:'api',component:ApiDataComponent},
      {path:'filter',component:FilteredproductsComponent},
      {path:'add',component:AddproductComponent},
      {path:'manage',component:ManageproductComponent},
      {path:'product',component:ProductComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
