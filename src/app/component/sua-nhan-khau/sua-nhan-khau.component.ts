import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { SuaNhanKhauService } from './sua-nhan-khau.service';

@Component({
  templateUrl: 'sua-nhan-khau.component.html',
  providers: [SuaNhanKhauService],
})
export class SuaNhanKhauComponent implements OnInit {
  nhanKhau: [any];

  constructor(private suaNhanKhauService: SuaNhanKhauService) { }
  
  ngOnInit(): void {
    this.suaNhanKhauService.GetAll().subscribe(data => {
      this.nhanKhau = data;
      console.log(this.nhanKhau);
    });
  }

  XoaNhanKhau(id: number) {
    this.suaNhanKhauService.DeleteByID(id).subscribe(data => {
      const index = this.nhanKhau.findIndex(e => e.id === id);
      this.nhanKhau.splice(index, 1);
      console.log(data);
    })
  }

}
