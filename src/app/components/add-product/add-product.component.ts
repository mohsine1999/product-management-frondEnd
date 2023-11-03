import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productFormGroup!: FormGroup;
  submitted : boolean = false;

  constructor(private fb: FormBuilder, private productService: ProductsService, private router : Router) {
  }

  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      name: ["", Validators.required],
      price: [0, Validators.required],
      quantity: [0, Validators.required],
      selected: [true, Validators.required],
      available: [true, Validators.required]
    })
  }

  onSave() {
    this.submitted = true;
    if (this.productFormGroup.invalid) return;
    this.productService.saveProduct(this.productFormGroup.value).subscribe(
      data => {
        alert("Saved as successfully ");
      }
    );

    this.productService.getAllProducts().subscribe(
      data => {
        this.router.navigateByUrl("/products");
      }
    );

  }
}
