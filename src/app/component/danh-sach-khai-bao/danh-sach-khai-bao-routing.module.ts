import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DanhSachKhaiBaoComponent } from './danh-sach-khai-bao.component';

const routes: Routes = [
  {
    path: '',
    component: DanhSachKhaiBaoComponent,
    data: {
      title: 'Home'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DanhSachKhaiBaoRoutingModule {}
