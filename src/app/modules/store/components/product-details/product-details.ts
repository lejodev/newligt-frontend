import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '../store/store';
import { StoreService } from '../../services/store/store';
import { MatCard } from "@angular/material/card";
import { SHARED_MATERIAL_IMPORTS } from '../../../../shared/material/material.imports';
import { Product } from '../../../../shared/interfaces/product';

@Component({
  selector: 'app-product-details',
  imports: [SHARED_MATERIAL_IMPORTS, MatCard],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails implements OnInit {

  productId: string | null = null;
  product: Product | null = null;

  ngOnInit(): void {
    this.getRoute()
    this.getProductDetails(this.productId as string);
  }

  productName: string | null = null

  constructor(
    private route: ActivatedRoute,
    private productService: StoreService
  ) { }

  getRoute() {
    this.route.paramMap.subscribe((param) => {
      console.log(param.get('id'));
      this.productId = param.get('id');
    })
  }

  getProductDetails(id: string) {
    this.productService.getProductById(id).subscribe(res => {
      console.log('Product Details', res);
      this.product = res;
    })
  }


}
