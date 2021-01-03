import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { ThongTinKhaiBaoService } from './thong-tin-khai-bao.service';

@Component({
  templateUrl: 'thong-tin-khai-bao.component.html',
  providers: [ThongTinKhaiBaoService],
})
export class ThongTinKhaiBaoComponent implements OnInit {
  khaiBao: [];

  constructor(private thongTinKhaiBaoService: ThongTinKhaiBaoService) { }

  ngOnInit(): void {
    this.thongTinKhaiBaoService.GetAll().subscribe(data => {
      this.khaiBao = data;
      console.log(this.khaiBao);
    })
  }
}
