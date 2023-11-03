import { Component } from '@angular/core';
import {AuthServiceService} from "../../services/auth-service.service";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private auth : AuthServiceService, productService : ProductsService) { }


}
