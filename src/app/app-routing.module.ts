import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'costumer',
    pathMatch:'full'
  },
  {
    path:'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdmineModule)
  },
  {
    path:'costumer',
    loadChildren: () => import('./modules/costumer/costumer.module').then(m => m.CostumerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
