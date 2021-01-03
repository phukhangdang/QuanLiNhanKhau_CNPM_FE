import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()

export class DanhSachKhaiBaoService {
    constructor(private http: HttpClient) {}
    
    GetDaKhaiBao(): Observable<any> {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        const httpOptions = {
          headers: headers
        }
        const url = 'https://localhost:44343/api/NhanKhau/thongke/dakhaibao';
        return this.http.get<any>(url, httpOptions).pipe();
    }
    GetChuaKhaiBao(): Observable<any> {
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json');
      const httpOptions = {
        headers: headers
      }
      const url = 'https://localhost:44343/api/NhanKhau/thongke/chuakhaibao';
      return this.http.get<any>(url, httpOptions).pipe();
  }
}
