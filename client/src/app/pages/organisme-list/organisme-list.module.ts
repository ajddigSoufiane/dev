import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganismeListComponent } from './organisme-list.component';
import { OrganismeListRoutingModule } from './organisme-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    OrganismeListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    OrganismeListComponent
  ]
})
export class OrganismeListModule { }
