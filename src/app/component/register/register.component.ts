import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { RegisterService } from './register.services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

  formKhaiBaoYTe: FormGroup;
  constructor(private fb: FormBuilder, private registerService: RegisterService) { }

  ngOnInit(): void {
    this.formKhaiBaoYTe = this.fb.group({
      nhanKhauID: null,
      sot: false,
      ho: false,
      khoTho: false,
      viemPhoi: false,
      dauHong: false,
      metMoi: false,
      trangThaiCachLy: '',
      thoiGianBatDau: '',
      thoiGianKetThuc: '',
      ketQuaXetNghiem: false,
      hinhThucTest: '',
      tiepXuc: 'Không',
    });
  }

  onSubmit(f: NgForm) {
    this.registerService.khaiBaoYTe(this.formKhaiBaoYTe.value).subscribe(data => {
      console.log(data);
      alert("Khai báo thành công!");
      f.resetForm();
    },
    (err) => {
      console.log(err);
      alert("Có lỗi xảy ra!");
      f.resetForm();
    })
  }
}
