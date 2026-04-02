import { Routes } from '@angular/router';
import { ListComponent } from '@products/pages/list/list.component';
import { AboutComponent } from '@info/pages/about/about.component';
import { NotFound } from '@info/pages/not-found/not-found';

export const routes: Routes = [
  { 
    path: '', 
    component: ListComponent 
  },
  { 
    path: 'about', 
    component: AboutComponent 
  },
  {
    path: '**',
    component: NotFound
  }
];
