import { Routes } from '@angular/router';
import { HomePage } from './views/home/home';

export const routes: Routes = [
 {
  path: 'home',
  component: HomePage
 },
 {
  path: '',
  component: HomePage
 },
];
