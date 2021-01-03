import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThongTinKhaiBaoComponent } from './thong-tin-khai-bao.component';

const routes: Routes = [
  {
    path: '',
    component: ThongTinKhaiBaoComponent,
    data: {
      title: 'Home'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThongTinKhaiBaoRoutingModule {}
