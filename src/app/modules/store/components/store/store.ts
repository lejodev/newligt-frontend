import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from '../../../../core/seervices/http/http';
import { Product } from '../../../../shared/interfaces/product';
import { StoreService } from '../../services/store/store';
import { SHARED_MATERIAL_IMPORTS } from '../../../../shared/material/material.imports';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  imports: [...SHARED_MATERIAL_IMPORTS, CommonModule],
  templateUrl: './store.html',
  styleUrl: './store.scss',
})
export class Store implements OnInit {

  products: Product[] = [];
  isLoading: boolean = true;

  constructor(
    private storeService: StoreService,
    private router: Router) { }


  ngOnInit(): void {
    this.storeService.getAllProducts().subscribe(res => {
      this.products = Array.isArray(res) ? res : [res]
      this.isLoading = false;
      console.log('Products', this.products);
    })

  }

  selectProduct(name: string) {

    this.router.navigate(['/product', name]);
  }

  trackByName(_: number, item: Product) {
    return item ? item.name : _;
  }

}
