import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ProductModel} from "../models/product.model";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }

  getProduct(id : number) : Observable<ProductModel>{
    let host = environment.ApiProducts;
    return this.http.get<ProductModel>(host+"/"+id);
  }

  getAllProducts() : Observable<ProductModel[]>{
    let host = environment.ApiProducts;
    return this.http.get<ProductModel[]>(host);
  }


  getAvailableProducts() : Observable<ProductModel[]>{
    let host = environment.ApiProducts;
    return this.http.get<ProductModel[]>(host+"?available=true");
  }


  getSelectedProducts() : Observable<ProductModel[]>{
    let host = environment.ApiProducts;
    return this.http.get<ProductModel[]>(host+"?selected=true");
  }

  searchProducts(keyword : string) : Observable<ProductModel[]>{
    let host = environment.ApiProducts;
    return this.http.get<ProductModel[]>(host+"?name_like="+keyword);
  }


  selectProduct(product : ProductModel) : Observable<ProductModel>{
    let host = environment.ApiProducts;
    product.selected = ! product.selected;
    return this.http.put<ProductModel>(host+"/"+product.id, product);
  }


  deleteProduct(product : ProductModel) : Observable<void>{
    let host = environment.ApiProducts;
    return this.http.delete<void>(host+"/"+product.id);
  }


  saveProduct(product : ProductModel) : Observable<ProductModel>{
    let host = environment.ApiProducts;
    return this.http.post<ProductModel>(host, product);
  }

  updateProduct(product : ProductModel) : Observable<ProductModel>{
    let host = environment.ApiProducts;
    return this.http.put<ProductModel>(host+"/"+product.id,product);
  }

  //user service
  getAllUsers() : Observable<any>{
    let host = environment.ApiUsers;
    return this.http.get<any>(host);
  }

  getUser(id : number) : Observable<any>{
    let host = environment.ApiUsers;
    return this.http.get<any>(host+"/"+id);
  }

  saveUser(user : any) : Observable<any>{
    let host = environment.ApiUsers;
    return this.http.post<any>(host, user);
  }

  updateUser(user : any) : Observable<any>{
    let host = environment.ApiUsers;
    return this.http.put<any>(host+"/"+user.id, user);
  }

  isUserActive(user : User) : Observable<User>{
    let host = environment.ApiUsers;
    user.active = ! user.active;
    return this.http.put<User>(host+"/"+user.id, user);
  }


  getUserByUsername(username : string) : Observable<User>{
    let host = environment.ApiUsers;
    return this.http.get<User>(host+"?username="+username);
  }

  getUserByEmailAddress(email : string) : Observable<User>{
    let host = environment.ApiUsers;
    return this.http.get<User>(host+"?email="+email);
  }

}
