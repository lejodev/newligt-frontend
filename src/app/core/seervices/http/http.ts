import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@envs/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  api(endpoint: string) {
    let base = environment.apiUrl;
    // let apiUrl = `${base}/${endpoint}`
    let apiUrl = import.meta.env['NG_APP_apiUrl'] + `/${endpoint}`;
    console.log(apiUrl);

    return apiUrl
  }

  get<T>(url: string, headers?: HttpHeaders, params?: HttpParams) {
    console.log("API", this.api(url));

    return this.http.get<T>(this.api(url), { headers, params });
  }

  post<T>(url: string, body: any, headers?: HttpHeaders) {
    return this.http.post<T>(this.api(url), body, { headers });
  }

  put<T>(url: string, body: any, headers?: HttpHeaders) {
    return this.http.put<T>(this.api(url), body, { headers });
  }

  patch<T>(url: string, body: any, headers?: HttpHeaders) {
    return this.http.patch<T>(this.api(url), body, { headers });
  }

  delete<T>(url: string, headers?: HttpHeaders) {
    return this.http.delete<T>(this.api(url), { headers });
  }

  head<T>(url: string, headers?: HttpHeaders) {
    return this.http.head<T>(this.api(url), { headers });
  }

  options<T>(url: string, headers?: HttpHeaders) {
    return this.http.options<T>(this.api(url), { headers });
  }

}
