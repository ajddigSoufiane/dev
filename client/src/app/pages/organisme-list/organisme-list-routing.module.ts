import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganismeListComponent } from './organisme-list.component';

const routes: Routes = [
  {
    path: '',
    component: OrganismeListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganismeListRoutingModule { }
