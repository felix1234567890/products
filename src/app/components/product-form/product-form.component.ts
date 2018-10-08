import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

product = {} as Product

  constructor(public prodService: ProductService) { }

  ngOnInit() {
  }

  addProduct(){
    if(this.product.name !== '' || this.product.price !== 0)
    this.prodService.addProduct(this.product)
    this.product = {} as Product;
  }

}
