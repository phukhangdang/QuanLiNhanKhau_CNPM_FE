import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { DanhSachKhaiBaoService } from './danh-sach-khai-bao.service';

@Component({
  templateUrl: 'danh-sach-khai-bao.component.html',
  providers: [DanhSachKhaiBaoService],
})
export class DanhSachKhaiBaoComponent implements OnInit {
  constructor(private thongTinNhanKhauService: DanhSachKhaiBaoService) { }
  daKhaiBao: [];
  chuaKhaiBao: [];
  ngOnInit(): void {
    this.thongTinNhanKhauService.GetDaKhaiBao().subscribe(data => {
      this.daKhaiBao = data;
      console.log(this.daKhaiBao);
    });
    this.thongTinNhanKhauService.GetChuaKhaiBao().subscribe(data => {
      this.chuaKhaiBao = data;
      console.log(this.chuaKhaiBao);
    });
  }
}
