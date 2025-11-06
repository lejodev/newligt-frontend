import { Routes } from '@angular/router';
import { Home } from './modules/home/components/home/home';
import { Store } from './modules/store/components/store/store';
import { Pagenotfound } from './modules/pagenotfound/components/pagenotfound/pagenotfound';

export const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: Home },
            { path: 'store', loadComponent: () => import('./modules/store/components/store/store').then(m => m.Store) },
            { path: 'product/:id', loadComponent: () => import('./modules/store/components/product-details/product-details').then(m => m.ProductDetails) }
        ]
    }, {

        path: '**',
        component: Pagenotfound
    }
];
