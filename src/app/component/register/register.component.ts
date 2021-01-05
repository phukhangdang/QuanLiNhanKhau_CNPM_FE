import { analyzeAndValidateNgModules } from '@angular/compiler';
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
  thongKeYTe: any;

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
      DateRegistered: new Date(),
    });
    this.registerService.TimThang((new Date()).getMonth() + 1).subscribe(data => {
      this.thongKeYTe = data;
      console.log(this.thongKeYTe);
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
    });
    if (this.formKhaiBaoYTe.value.trangThaiCachLy == "F0") {
      this.thongKeYTe.soLuongF0 += 1;
    }
    if (this.formKhaiBaoYTe.value.trangThaiCachLy == "F1") {
      this.thongKeYTe.soLuongF1 += 1;
    }
    if (this.formKhaiBaoYTe.value.trangThaiCachLy == "F2") {
      this.thongKeYTe.soLuongF2 += 1;
    }
    if (this.formKhaiBaoYTe.value.trangThaiCachLy == "Khỏe mạnh") {
      this.thongKeYTe.soLuongKhoeManh += 1;
    }
    this.registerService.CapNhatThang(this.thongKeYTe).subscribe(data => {
      console.log(data);
    });
  }
}
