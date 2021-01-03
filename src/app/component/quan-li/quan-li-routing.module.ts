import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuanLiComponent } from './quan-li.component';

const routes: Routes = [
  {
    path: '',
    component: QuanLiComponent,
    data: {
      title: 'QuanLi'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuanLiRoutingModule {}
