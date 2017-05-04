import { Injectable } from '@angular/core';

@Injectable()
export class BrandService {
  color: string;
  lastBrandTheme:string;

  constructor() {
    this.color = this.getRandomColor();
  }

  getRandomColor() {
    let letters = '0123456789ABCDEF'.split('');
    let rColor = '#';
    for (let i = 0; i < 6; i++){
      rColor += letters[Math.floor(Math.random() * 16)];
    }
    return rColor;
  }

  changeColor() {
    this.color = this.getRandomColor();
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
}
