import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThongTinNhanKhauComponent } from './thong-tin-nhan-khau.component';

const routes: Routes = [
  {
    path: '',
    component: ThongTinNhanKhauComponent,
    data: {
      title: 'Home'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThongTinNhanKhauRoutingModule {}
