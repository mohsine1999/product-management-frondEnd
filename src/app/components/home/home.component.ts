import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../services/products.service";
import {AuthServiceService} from "../../services/auth-service.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  loginFormGroup!: FormGroup ;
  submitted : boolean = false;


  constructor(private fb: FormBuilder,
              private productService: ProductsService ,
              private authService : AuthServiceService,
              private router: Router) {
  }

  ngOnInit(): void {


    this.loginFormGroup = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    })
  }

  login() {
    this.submitted = true;
    console.log("mosine1");
    if (this.loginFormGroup?.invalid) return;
    console.log("mosine2");

    // @ts-ignore
    if (this.authService.login(this.loginFormGroup.value.username, this.loginFormGroup.value.password)) {
      console.log("mosine3");

      alert("watta sir tl3b ");
    } else {
      //redirect to users
      this.router.navigate(["/users"]);
    }
  }

}
