import { Injectable } from '@angular/core';

@Injectable()
export class BrandService {
  color: string;

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
}
