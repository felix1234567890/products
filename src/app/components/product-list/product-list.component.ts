import { Component, OnInit } from '@angular/core';
import  {ProductService} from '../../services/product.service'
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [];
  editingProduct: Product;
  editing:boolean = false;

  constructor(public prodService: ProductService) { }

  ngOnInit() {
    this.prodService.getProducts().subscribe(products =>
    this.products = products
  )}

  deleteProduct(event, product){
    this.prodService.deleteProduct(product)
  }
  editProduct(event, product){
    this.editingProduct = product;
    this.editing = !this.editing;
  }
  updateProduct(){
    this.prodService.updateProduct(this.editingProduct)
    this.editingProduct = {} as Product;
    this.editing = false;
  }

}
