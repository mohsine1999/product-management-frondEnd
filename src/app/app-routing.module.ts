import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./components/products/products.component";
import {HomeComponent} from "./components/home/home.component";
import {AddProductComponent} from "./components/add-product/add-product.component";
import {EditProductComponent} from "./components/edit-product/edit-product.component";

const routes: Routes = [
  {path : "products" , component: ProductsComponent},
  {path : "addProduct" , component: AddProductComponent},
  {path : "editProduct/:id" , component: EditProductComponent},
  {path : "" , component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
