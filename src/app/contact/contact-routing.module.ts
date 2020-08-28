import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: '',  // Es necesaria una ruta vacía para cargar el componente correcto
    component: ContactComponent
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
export class ContactRoutingModule {

}