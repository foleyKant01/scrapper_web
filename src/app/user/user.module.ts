import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CustomerAttributeComponent } from './customer-attribute/customer-attribute.component';
import { UserComponent } from './user.component';
import { HomeComponent } from './home/home.component';
import { FeedsComponent } from './feeds/feeds.component';
import { CustomFieldsComponent } from './custom-fields/custom-fields.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { StoresComponent } from './stores/stores.component';


@NgModule({
  declarations: [
    CustomerAttributeComponent,
    UserComponent,
    HomeComponent,
    FeedsComponent,
    CustomFieldsComponent,
    AnalyticsComponent,
    StoresComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
