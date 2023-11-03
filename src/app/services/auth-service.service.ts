import { Injectable } from '@angular/core';
import {ProductsService} from "./products.service";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
 user : User | undefined;
  constructor(private productService: ProductsService) {
  }


 //authentication
  login(username: string, password: string) {
    this.productService.getUserByUsername(username).subscribe(
      data => {
        this.user = data;
        if (this.user?.password === password) {
          return true;
        } else {
          return false;
        }
      }
    );
    return false;
  }


}
