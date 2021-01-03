import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  isLogin: false;
  formLogin: FormGroup;
  user: any;
  constructor(private route: Router, private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: '',
      password:''
    });
  }

  Register() {
    this.route.navigate(['register']);
  }
  Login() {
    this.loginService.Login(this.formLogin.value).subscribe(data => {
      this.user = data;
      if(this.user.role == 'ToTruong') {
        this.route.navigate(['/quanli/home']);
      }
      if(this.user.role == 'YTe') {
        this.route.navigate(['/thongke/home']);
      }
      if(this.user.role == null) {
        alert("Sai thông tin");
      }
    })
  }
}
