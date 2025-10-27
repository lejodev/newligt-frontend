import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../core/seervices/http/http';
import { Product } from '../../../../shared/interfaces/product';
import { StoreService } from '../../services/store/store';

@Component({
  selector: 'app-store',
  imports: [],
  templateUrl: './store.html',
  styleUrl: './store.scss',
})
export class Store implements OnInit {

  products: Product[] = [];
  isLoading: boolean = true;

  constructor(private storeService: StoreService) { }


  ngOnInit(): void {
    this.storeService.getAllProducts().subscribe(res => {
      this.products = Array.isArray(res) ? res : [res]
      console.log('Products', this.products);
    })

  }

}
