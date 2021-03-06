import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  constructor(
      private http: HttpClient
  ) { }


  register(data: any) {
      return this.http.get('https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d', data);
  }

  getProfile() {
      return this.http.get('https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2');
  }

}