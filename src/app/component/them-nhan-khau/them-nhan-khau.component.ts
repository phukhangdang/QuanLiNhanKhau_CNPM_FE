import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { ThemNhanKhauService } from './them-nhan-khau.service';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms'

@Component({
  templateUrl: 'them-nhan-khau.component.html',
  providers: [ThemNhanKhauService],
})

export class ThemNhanKhauComponent implements OnInit {
  formNhanKhau: FormGroup;

  constructor(private themNhanKhauService: ThemNhanKhauService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formNhanKhau = this.fb.group({
      maNhanKhau: '',
      hoTen: '',
      bietDanh: '',
      ngaySinh: '',
      gioiTinh: '',
      noiSinh: '',
      nguyenQuan: '',
      danToc: '',
      tonGiao: '',
      quocTich: ''
    })
  }

  onSubmit(f: NgForm) {
    this.themNhanKhauService.themNhanKhau(this.formNhanKhau.value).subscribe(data => {
      console.log(data);
      alert("Nhập thành công nhân khẩu mới");
      f.resetForm();
    })
  }
}
