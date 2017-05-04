import { Component, Inject, Renderer2 } from '@angular/core';
import {DOCUMENT, DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  lastBrandTheme:string;
  brandResourceUrl:SafeResourceUrl;
  constructor (@Inject(DOCUMENT) private document, private renderer: Renderer2, private sanitizer: DomSanitizer) { }
  ngOnInit() {
    // this.brandPath = 'assets/brands/' + brands[x] + '/brand.css';
    this.brandResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.getBrandPath());
    setTimeout(() => {
      this.brandResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.getBrandPath());
    }, 3000);
    // this.document.getElementById('brandcss').setAttribute('href', 'assets/brands/' + brands[x] + '/brand.css');
    //let ele:any = this.renderer.selectRootElement('.btn-primary');
    //this.renderer.setStyle(this.children, 'background-color', 'red');
  }

  public getBrandPath():string{
    let brands = ['light', 'dark', 'green'];
    if (this.lastBrandTheme)
    {
      brands.splice(brands.indexOf(this.lastBrandTheme), 1);
    }
    let x:number = Math.floor(Math.random() * brands.length);
    this.lastBrandTheme = brands[x];
    return 'assets/brands/' + this.lastBrandTheme + '/brand.css';
  }

  public brandCssUrl() {
    // return this.sanitizer.bypassSecurityTrustResourceUrl(this.brandPath);
  }
  title = 'Branded App Works!';
}
