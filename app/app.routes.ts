import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FAQComponent } from './faq/faq.component';
import { TravelInfoComponent } from './travel-info/travel-info.component';

export const routes: Routes = [
    {
      path: '',
      loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
      path: 'faq',
      loadComponent: () => import('./faq/faq.component').then(m => m.FAQComponent)
    },
    {
      path:'travel',
      loadComponent: () => import('./travel-info/travel-info.component').then(m => m.TravelInfoComponent)
    },
    {
      path:'things-to-do',
      loadComponent: () => import('./local-guide/local-guide.component').then(m => m.LocalGuideComponent)
    }
  ];
  
