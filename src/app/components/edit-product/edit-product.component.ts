import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productId !: number;
  submitted: boolean = false;
  productFormGroup !: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService, private fb: FormBuilder) {
    this.productId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.productService.getProduct(this.productId).subscribe(
      product => {
        this.productFormGroup = this.fb.group({
          id: [product.id, Validators.required],
          name: [product.name, Validators.required],
          price: [product.price, Validators.required],
          quantity: [product.quantity, Validators.required],
          selected: [product.selected, Validators.required],
          available: [product.available, Validators.required]
        })
      }
    );
  }

  onEditProduct() {
    this.productService.updateProduct(this.productFormGroup.value).subscribe(
      data => {
        alert("Product updated as successfully ");
      }
    )
  }
}
