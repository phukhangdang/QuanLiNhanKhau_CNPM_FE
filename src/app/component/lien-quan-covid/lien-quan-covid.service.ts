import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, JsonpClientBackend } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()

export class LienQuanCovidService {
    constructor(private http: HttpClient) {}
    
    GetAll(): Observable<any> {
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json');
      const httpOptions = {
        headers: headers
      }
      const url = 'https://localhost:44343/api/NhanKhau?pageNum=-1&pageSize=1';
      return this.http.get<any>(url, httpOptions).pipe();
    }

    GetByNhanKhauID(id: any) {
      let headers = new HttpHeaders();
      let params = new HttpParams().set('id', id);
      headers = headers.set('Content-Type', 'application/json');
      const httpOptions = {
        headers: headers,
        params: params
      }
      const url = 'https://localhost:44343/api/ToKhaiYTe/nhankhau'
      return this.http.get(url, httpOptions);
    }
}
