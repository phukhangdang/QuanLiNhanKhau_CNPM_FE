import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ThongKeComponent } from './thong-ke.component';
import { ThongKeRoutingModule } from './thong-ke-routing.module';

@NgModule({
  imports: [
    FormsModule,
    ChartsModule,
    BsDropdownModule,
    ThongKeRoutingModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ ThongKeComponent ]
})
export class ThongKeModule { }
