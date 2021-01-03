import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common'

import { ThemNhanKhauComponent } from './them-nhan-khau.component';
import { ThemNhanKhauRoutingModule } from './them-nhan-khau-routing.module';

@NgModule({
  imports: [
    FormsModule,
    ThemNhanKhauRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ ThemNhanKhauComponent ]
})
export class ThemNhanKhauModule { }
