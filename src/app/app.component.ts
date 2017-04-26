import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor (@Inject(DOCUMENT) private document) { }
  ngOnInit() {
    let brands = ['light', 'dark', 'green'];
    let x:number = Math.floor(Math.random() * 3);
    this.document.getElementById('brandcss').setAttribute('href', 'assets/brands/' + brands[x] + '/brand.css');
  }
  title = 'Branded App Works!';
}
