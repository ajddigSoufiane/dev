import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganismeEditComponent } from './organisme-edit.component';
import { OrganismeEditRoutingModule } from './organisme-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    OrganismeEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    OrganismeEditComponent
  ]
})
export class OrganismeEditModule { }
