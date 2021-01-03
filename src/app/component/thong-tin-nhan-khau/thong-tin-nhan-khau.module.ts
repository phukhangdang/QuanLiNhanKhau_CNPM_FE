import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common'

import { ThongTinNhanKhauComponent } from './thong-tin-nhan-khau.component';
import { ThongTinNhanKhauRoutingModule } from './thong-tin-nhan-khau-routing.module';

@NgModule({
  imports: [
    FormsModule,
    ThongTinNhanKhauRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule
  ],
  declarations: [ ThongTinNhanKhauComponent ]
})
export class ThongTinNhanKhauModule { }
