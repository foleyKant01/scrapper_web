import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAttributeComponent } from './customer-attribute/customer-attribute.component';
import { UserComponent } from './user.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CustomFieldsComponent } from './custom-fields/custom-fields.component';
import { FeedsComponent } from './feeds/feeds.component';
import { HomeComponent } from './home/home.component';
import { StoresComponent } from './stores/stores.component';

const routes: Routes = [
  {
    path: '', component: UserComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'feeds', component: FeedsComponent },
      { path: 'custom-fields', component: CustomFieldsComponent },
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'stores', component: StoresComponent },
      { path: 'customer-attribute', component: CustomerAttributeComponent }
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
