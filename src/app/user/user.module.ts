import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CustomerAttributeComponent } from './customer-attribute/customer-attribute.component';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [
    CustomerAttributeComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
