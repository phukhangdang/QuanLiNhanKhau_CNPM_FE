import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { ThongTinNhanKhauService } from './thong-tin-nhan-khau.service';

@Component({
  templateUrl: 'thong-tin-nhan-khau.component.html',
  providers: [ThongTinNhanKhauService],
})
export class ThongTinNhanKhauComponent implements OnInit {
  constructor(private thongTinNhanKhauService: ThongTinNhanKhauService) { }
  nhanKhau: [];
  ngOnInit(): void {
    this.thongTinNhanKhauService.GetAll().subscribe(data => {
      this.nhanKhau = data;
      console.log(this.nhanKhau);
    })
  }
}
