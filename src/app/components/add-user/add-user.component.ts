import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../services/products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  userFormGroup!: FormGroup;
  submitted : boolean = false;

  constructor(private fb: FormBuilder, private productService: ProductsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      name: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", Validators.required],
      email: ["", Validators.required],
      role: ["", Validators.required],
      active: [true, Validators.required]
    })
  }

  onSave() {
    this.submitted = true;
    if (this.userFormGroup.invalid) return;
    //update the password with the encrypted one
    this.userFormGroup.value.password = this.VigenereCipher("LHDSFJIZEFJI", this.userFormGroup.value.password);
    //test if the username is already used
   if ( this.productService.getUserByEmailAddress(this.userFormGroup.value.email)) {
       alert("Email already used");
       this.router.navigate(["/users"]);
       return;
   } else {
     this.productService.saveUser(this.userFormGroup.value).subscribe(
       data => {
         alert("Saved as successfully ");
       }
     );
   }

  }


  VigenereCipher(key : any, str: string) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newKey = "";
    let newStr = "";
    let result = "";
    let i = 0;
    while (newKey.length < str.length) {
      newKey += key;
    }
    while (newKey.length > str.length) {
      newKey = newKey.slice(0, -1);
    }
    while (newStr.length < str.length) {
      newStr += str;
    }
    while (newStr.length > str.length) {
      newStr = newStr.slice(0, -1);
    }
    while (i < str.length) {
      let index = (alphabet.indexOf(newStr[i]) + alphabet.indexOf(newKey[i])) % 26;
      result += alphabet[index];
      i++;
    }
    return result;
  }
}
