import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { LienQuanCovidService } from './lien-quan-covid.service';

@Component({
  templateUrl: 'lien-quan-covid.component.html',
  providers: [LienQuanCovidService],
})
export class LienQuanCovidComponent implements OnInit {
  constructor(private lienQuanCovidService: LienQuanCovidService) { }
  nhanKhau: [];
  ngOnInit(): void {
    this.lienQuanCovidService.GetAll().subscribe(data => {
      this.nhanKhau = data;
      console.log(this.nhanKhau);
    })
  }
}
