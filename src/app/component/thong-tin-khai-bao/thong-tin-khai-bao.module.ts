import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common'

import { ThongTinKhaiBaoComponent } from './thong-tin-khai-bao.component';
import { ThongTinKhaiBaoRoutingModule } from './thong-tin-khai-bao-routing.module';

@NgModule({
  imports: [
    FormsModule,
    ThongTinKhaiBaoRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule
  ],
  declarations: [ ThongTinKhaiBaoComponent ]
})
export class ThongTinKhaiBaoModule { }
