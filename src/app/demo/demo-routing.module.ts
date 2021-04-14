import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DemoComponent } from './components/demo/demo.component';

const routes: Routes = [
  {
    path: '',  // Es necesaria una ruta vacía para cargar el componente correcto
    component: DemoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DemoRoutingModule {

}