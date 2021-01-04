import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LienQuanCovidComponent } from './lien-quan-covid.component';

const routes: Routes = [
  {
    path: '',
    component: LienQuanCovidComponent,
    data: {
      title: 'Home'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LienQuanCovidRoutingModule {}
