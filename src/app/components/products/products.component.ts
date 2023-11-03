import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ProductModel} from "../../models/product.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList: ProductModel[] | undefined;
  errorMessage: string | undefined;

  constructor(private productService: ProductsService, private router : Router) {
  }

  ngOnInit(): void {
    this.onGetAllProducts();
  }


  onGetAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.productList = data;
      },
      error: err => {
        this.errorMessage = err.message;
      }
    });
  }

  OnGetAvailableProducts() {
    this.productService.getAvailableProducts().subscribe({
      next: (data) => {
        this.productList = data;
      },
      error: err => {
        this.errorMessage = err.message;
      }
    });

  }

  OnGetSelectedProducts() {
    this.productService.getSelectedProducts().subscribe({
      next: (data) => {
        this.productList = data;
      },
      error: err => {
        this.errorMessage = err.message;
      }
    });
  }


  onSearch(value: any) {
    this.productService.searchProducts(value.keyword).subscribe({
      next: (data) => {
        this.productList = data;
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

  onDelete(product: ProductModel) {
    let verify = confirm("Are you sure about that ?");
    if (verify == true)
    this.productService.deleteProduct(product).subscribe({
      next: (data) => {
        this.onGetAllProducts();
      },
      error: err => {
        this.errorMessage = err.message;
      }
    })

  }

  OnAddProduct() {
    this.router.navigateByUrl("/addProduct");
  }

  onEditProduct(product : ProductModel) {
    this.router.navigateByUrl("/editProduct/"+product.id);
  }
}
