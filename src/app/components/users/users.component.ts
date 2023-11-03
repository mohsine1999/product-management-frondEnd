import { Component } from '@angular/core';
import {ProductModel} from "../../models/product.model";
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userList: User[] | undefined;
  errorMessage: string | undefined;

  constructor(private productService: ProductsService, private router : Router) {
  }

  ngOnInit(): void {
    this.onGetAllUsers();
  }


  onGetAllUsers() {
    this.productService.getAllUsers().subscribe({
      next: (data) => {
        this.userList = data;
      },
      error: err => {
        this.errorMessage = err.message;
      }
    });
  }

  onSelect(product: ProductModel) {
    this.productService.selectProduct(product).subscribe({
      next: (data) => {
        product.selected = data.selected;
      },
      error: err => {
        this.errorMessage = err.message;
      }
    });
  }

  OnAddUser() {
    this.router.navigateByUrl("/users");
  }

  onEditUser(user : User) {
    this.router.navigateByUrl("/editProduct/"+user.id);
  }


  onActiveUser(user : User) {
    this.productService.isUserActive(user).subscribe({
      next: (data) => {
        user.active = data.active;
      },
      error: err => {
        this.errorMessage = err.message;
      }
    });
  }
}
