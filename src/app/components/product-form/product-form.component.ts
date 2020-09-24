import { Component, OnInit } from '@angular/core';
import { product} from '../../interfaces/product';
import { ProductService} from '../../services/product.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: product = {
    name: '',
    price: 0,
    description: ''

  }

  constructor(private ProductService: ProductService,
    private Router:Router) { }

  ngOnInit(): void {
  }

  submitProduct() {
    this.ProductService.createProduct(this.product)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
    this.Router.navigate(['/']);
  }

}
