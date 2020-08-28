import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: '',  // Es necesaria una ruta vacía para cargar el componente correcto
    component: ProductsComponent
  },
  {
    path: ':id',
    component: ProductDetailComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule {
}