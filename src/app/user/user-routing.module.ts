import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAttributeComponent } from './customer-attribute/customer-attribute.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      { path: '', redirectTo: 'customer_attribute', pathMatch: 'full' },
      { path: 'customer_attribute', component: CustomerAttributeComponent }
    ]
  }



  // {
  //   path: 'user',
  //   loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
  // },

  // { path: '**', component: NotfoundComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
