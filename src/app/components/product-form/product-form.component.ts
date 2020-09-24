import { Component, OnInit } from '@angular/core';
import { product} from '../../interfaces/product';
import { ProductService} from '../../services/product.service';
import {Router, ActivatedRoute} from '@angular/router';


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

    edit: Boolean = false;

  constructor(private ProductService: ProductService,
    private Router: Router, private ActivatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    const params = this.ActivatedRoute.snapshot.queryParams;
    if(params){
      this.ProductService.getProduct(params.productID)
      .subscribe(
        res =>{
          console.log(res);
          this.product = res;
          this.edit = true;
        },
        err => console.log(err)
      );
    };
    console.log(params.productID);
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
