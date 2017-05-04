import {Component, OnInit} from '@angular/core';
import { BrandService } from '../brand.service';

import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  posts: string[] = [];

  constructor(public brandService:BrandService, private http: Http) {

  }

  getPosts(): Observable<any>{
    return this.http.get("http://localhost:3000/posts")
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || ' Server Error '));
  }

  ngOnInit() {
    this.getPosts().subscribe(
      data => this.posts = data,
      error => console.error('Unable to fetch posts!')
    );
  }

}
