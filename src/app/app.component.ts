import { Component, Inject, Renderer2 } from '@angular/core';
import {DOCUMENT, DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {BrandService} from "./brand.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  lastBrandTheme:string;
  brandResourceUrl:SafeResourceUrl;
  color;
  constructor (@Inject(DOCUMENT) private document,
               private renderer: Renderer2,
               private sanitizer: DomSanitizer,
               private brandService: BrandService)
  {

  }
  ngOnInit() {
    this.color = 'red';
    // this.brandPath = 'assets/brands/' + brands[x] + '/brand.css';
    this.brandResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.brandService.getBrandPath());
    setTimeout(() => {
      this.brandResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.brandService.getBrandPath());
    }, 3000);
    // this.document.getElementById('brandcss').setAttribute('href', 'assets/brands/' + brands[x] + '/brand.css');
    //let ele:any = this.renderer.selectRootElement('.btn-primary');
    //this.renderer.setStyle(this.children, 'background-color', 'red');
  }

  public brandCssUrl() {
    // return this.sanitizer.bypassSecurityTrustResourceUrl(this.brandPath);
  }
  title = 'Branded App Works!';
}
