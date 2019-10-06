import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private baseUrl = "http://localhost:4300/users";

  constructor(private http: HttpClient) { }

  getData() {
    let data: any;
    return this.http.get(this.baseUrl);
    // console.log('data outside: ', data);
    return data;
  }

}
