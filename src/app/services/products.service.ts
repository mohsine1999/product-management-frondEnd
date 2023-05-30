import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ProductModel} from "../models/product.model";

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
}
