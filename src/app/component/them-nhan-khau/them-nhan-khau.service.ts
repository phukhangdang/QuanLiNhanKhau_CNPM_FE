import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()

export class ThemNhanKhauService {
    constructor(private http: HttpClient) {}
    
    themNhanKhau(value: any) {
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json');
      const httpOptions = {
        headers: headers
      }
      const url = 'https://localhost:44343/api/NhanKhau';
      return this.http.post(url, value, httpOptions).pipe();
  }
}
