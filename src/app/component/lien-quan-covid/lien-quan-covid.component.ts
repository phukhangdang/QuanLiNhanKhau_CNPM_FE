import { Component, OnInit, ViewChild } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { LienQuanCovidService } from './lien-quan-covid.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'lien-quan-covid.component.html',
  providers: [LienQuanCovidService],
})
export class LienQuanCovidComponent implements OnInit {
  constructor(private lienQuanCovidService: LienQuanCovidService) { }
  @ViewChild('primaryModal') public primaryModal: ModalDirective;
  
  nhanKhau: [any];
  toKhaiYTe: any;

  ngOnInit(): void {
    this.lienQuanCovidService.GetAll().subscribe(data => {
      this.nhanKhau = data;
      console.log(this.nhanKhau);
    })
    this.lienQuanCovidService.GetByNhanKhauID(1).subscribe(data => {
      this.toKhaiYTe = data;
    })
  }

  khoiTaoToKhaiYTe(id: any) {
    this.lienQuanCovidService.GetByNhanKhauID(id).subscribe(data => {
      this.toKhaiYTe = data;
      console.log(this.toKhaiYTe);
    })
  }
}
