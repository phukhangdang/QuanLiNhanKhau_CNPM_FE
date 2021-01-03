import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common'

import { DanhSachKhaiBaoComponent } from './danh-sach-khai-bao.component';
import { DanhSachKhaiBaoRoutingModule } from './danh-sach-khai-bao-routing.module';

@NgModule({
  imports: [
    FormsModule,
    DanhSachKhaiBaoRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule
  ],
  declarations: [ DanhSachKhaiBaoComponent ]
})
export class DanhSachKhaiBaoModule { }
