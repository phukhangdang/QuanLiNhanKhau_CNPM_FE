import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { QuanLiComponent } from './quan-li.component';
import { QuanLiRoutingModule } from './quan-li-routing.module';

@NgModule({
  imports: [
    FormsModule,
    ChartsModule,
    BsDropdownModule,
    QuanLiRoutingModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ QuanLiComponent ]
})
export class QuanLiModule { }
