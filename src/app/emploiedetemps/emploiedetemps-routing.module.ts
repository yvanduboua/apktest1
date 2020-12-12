import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmploiedetempsPage } from './emploiedetemps.page';

const routes: Routes = [
  {
    path: '',
    component: EmploiedetempsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmploiedetempsPageRoutingModule {}
