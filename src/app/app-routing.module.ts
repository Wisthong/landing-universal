import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import HomeComponent from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Landing page',
  },
  // {
  //   path: 'home',
  //   loadComponent() {
  //     return import('./home/home.component');
  //   },
  // },
  {
    path: '**',
    component: HomeComponent,
    title: 'Redirige ...',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
