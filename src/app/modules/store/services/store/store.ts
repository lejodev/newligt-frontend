import { Injectable } from '@angular/core';
import { HttpService } from '../../../../core/seervices/http/http';
import { Observable } from 'rxjs';
import { Product } from '../../../../shared/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpService: HttpService) { }

  getAllProducts(): Observable<Product[]> {
    return this.httpService.get<Product[]>('products')
  }

}
