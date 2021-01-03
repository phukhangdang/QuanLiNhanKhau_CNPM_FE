import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()

export class LoginService {
    constructor(private http: HttpClient) {}
    
    Login(value: any): Observable<any> {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        const httpOptions = {
          headers: headers
        }
        const url = 'https://localhost:44343/api/User/login';
        return this.http.put<any>(url, value, httpOptions).pipe();
    }
}
