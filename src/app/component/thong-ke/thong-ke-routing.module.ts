import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThongKeComponent } from './thong-ke.component';

const routes: Routes = [
  {
    path: '',
    component: ThongKeComponent,
    data: {
      title: 'ThongKe'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThongKeRoutingModule {}
