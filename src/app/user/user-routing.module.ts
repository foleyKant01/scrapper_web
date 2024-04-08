import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAttributeComponent } from './customer-attribute/customer-attribute.component';
<<<<<<< HEAD
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      { path: '', redirectTo: 'customer_attribute', pathMatch: 'full' },
      { path: 'customer_attribute', component: CustomerAttributeComponent }
    ]
  }

=======
import { HomeComponent } from './home/home.component';
import { FeedsComponent } from './feeds/feeds.component';
import { CustomFieldsComponent } from './custom-fields/custom-fields.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { StoresComponent } from './stores/stores.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'feeds', component: FeedsComponent },
  { path: 'custom_fields', component: CustomFieldsComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'stores', component: StoresComponent }
>>>>>>> 0e95ccb9a27456f411aa409eaceaf225a29a02c4


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
