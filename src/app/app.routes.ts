import { Routes } from '@angular/router';
import { ListComponent } from '@products/pages/list/list.component';
import { ProductDetail } from '@products/pages/product-detail/product-detail';
import { AboutComponent } from '@info/pages/about/about.component';
import { NotFound } from '@info/pages/not-found/not-found';
import { Layout } from '@shared/components/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: ListComponent,

      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'product/:id',
        component: ProductDetail
      }
    ]
  },
  {
    path: '**',
    component: NotFound
  }
];
