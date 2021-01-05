import { Component, OnInit, ViewChild } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { ThongTinKhaiBaoService } from './thong-tin-khai-bao.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: 'thong-tin-khai-bao.component.html',
  providers: [ThongTinKhaiBaoService],
})
export class ThongTinKhaiBaoComponent implements OnInit {
  khaiBao: [];
  person: any;
  @ViewChild('primaryModal') public primaryModal: ModalDirective;

  constructor(private thongTinKhaiBaoService: ThongTinKhaiBaoService) { }

  ngOnInit(): void {
    this.thongTinKhaiBaoService.GetAll().subscribe(data => {
      this.khaiBao = data;
      console.log(this.khaiBao);
    })
  }

  khoiTaoPerson(id: any) {
    this.thongTinKhaiBaoService.GetNhanKhauByID(id).subscribe(data => {
      this.person = data;
    })
  }
}
