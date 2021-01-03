import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { SuaNhanKhauService } from './sua-nhan-khau.service';

@Component({
  templateUrl: 'sua-nhan-khau.component.html',
  providers: [SuaNhanKhauService],
})
export class SuaNhanKhauComponent implements OnInit {
  constructor(private suaNhanKhauService: SuaNhanKhauService) { }
  nhanKhau: [];
  ngOnInit(): void {
    this.suaNhanKhauService.GetAll().subscribe(data => {
      this.nhanKhau = data;
      console.log(this.nhanKhau);
    })
  }
}
