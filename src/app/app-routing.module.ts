import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./components/products/products.component";
import {HomeComponent} from "./components/home/home.component";
import {AddProductComponent} from "./components/add-product/add-product.component";
import {EditProductComponent} from "./components/edit-product/edit-product.component";
import {AddUserComponent} from "./components/add-user/add-user.component";
import {UsersComponent} from "./components/users/users.component";

const routes: Routes = [
  {path : "products" , component: ProductsComponent},
  {path : "addProduct" , component: AddProductComponent},
  {path : "addUser" , component: AddUserComponent},
  {path : "users" , component: UsersComponent},
  {path : "editProduct/:id" , component: EditProductComponent},
  {path : "" , component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
