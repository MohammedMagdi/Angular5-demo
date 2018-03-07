import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor(private http: Http) {
  }

  getOrders() {
    const headers = new Headers();
    const token = localStorage.getItem('token');
    headers.append('Authorization', 'Bearer ' + token);

    const options = new RequestOptions({ headers: headers });

    return this.http.get('/api/orders', options)
      .map(response => response.json());

    /* return this.authHttp.get('/api/orders', options)
    .map(response => response.json()); */

  }
}
