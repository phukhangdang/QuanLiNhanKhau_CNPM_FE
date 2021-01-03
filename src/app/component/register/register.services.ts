import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';

@Injectable()

export class RegisterService {
    constructor(private http: HttpClient) {}

    khaiBaoYTe(value: any) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        const httpOptions = {
          headers: headers
        }
        const url = 'https://localhost:44343/api/ToKhaiYTe';
        return this.http.post(url, value, httpOptions).pipe();
    }
}
