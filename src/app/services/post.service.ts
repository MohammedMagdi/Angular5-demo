import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from '../common/data.service';


/* import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; */

@Injectable()
export class PostService extends DataService {

  constructor(http: Http) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }

}
