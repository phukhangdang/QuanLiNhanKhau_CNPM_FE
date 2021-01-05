import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

import { LienQuanCovidComponent } from './lien-quan-covid.component';
import { LienQuanCovidRoutingModule } from './lien-quan-covid-routing.module';

@NgModule({
  imports: [
    FormsModule,
    LienQuanCovidRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    CommonModule,
    ModalModule.forRoot()
  ],
  declarations: [ LienQuanCovidComponent ]
})
export class LienQuanCovidModule { }
