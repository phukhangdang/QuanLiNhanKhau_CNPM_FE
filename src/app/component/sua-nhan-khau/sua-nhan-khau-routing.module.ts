import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuaNhanKhauComponent } from './sua-nhan-khau.component';

const routes: Routes = [
  {
    path: '',
    component: SuaNhanKhauComponent,
    data: {
      title: 'Home'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuaNhanKhauRoutingModule {}
