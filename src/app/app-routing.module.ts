import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './modules/costumer/components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'kids',
    pathMatch:'full'
  },
  {
    path:'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdmineModule)
  },
  {
    path:'kids',
    loadChildren: () => import('./modules/costumer/costumer.module').then(m => m.CostumerModule)
  },
  {
    path:'contact',
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
