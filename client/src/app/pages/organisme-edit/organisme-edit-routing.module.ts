import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganismeEditComponent } from './organisme-edit.component';

const routes: Routes = [
  {
    path: '',
    component: OrganismeEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganismeEditRoutingModule { }
