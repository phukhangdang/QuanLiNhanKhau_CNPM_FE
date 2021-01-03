import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThemNhanKhauComponent } from './them-nhan-khau.component';

const routes: Routes = [
  {
    path: '',
    component: ThemNhanKhauComponent,
    data: {
      title: 'Home'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemNhanKhauRoutingModule {}
