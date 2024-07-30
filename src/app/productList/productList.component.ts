import { Component, Input, OnInit } from '@angular/core';
import { Product } from "../app.component";

@Component({
  selector: 'product-list',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.scss']
})

export class ProductList implements OnInit {

  @Input()
  productList: Product[];

  ngOnInit() {
  }
}
