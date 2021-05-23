import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  quantity = 0;
  got = 'USD';
  want = 'EUR';
  total = 0;
  coins: string[] = ['USD','EUR','GBP']

  constructor() { }

  ngOnInit(): void {
  }

  convert() {
    switch(this.got) {
      case 'USD':
        if (this.want === 'USD') {
          this.total = this.quantity;
        }
        if (this.want === 'EUR') {
          this.total = this.quantity * 0.84;
        }
        if (this.want === 'GBP') {
          this.total = this.quantity * 0.75;
        }
        break;
      case 'GBP':
        if (this.want === 'GBP') {
          this.total = this.quantity;
        }
        if (this.want === 'EUR') {
          this.total = this.quantity * 1.11;
        }
        if (this.want === 'USD') {
          this.total = this.quantity * 1.33;
        }
        break;
      case 'EUR':
        if (this.want === 'EUR') {
          this.total = this.quantity;
        }
        if (this.want === 'GBP') {
          this.total = this.quantity * 0.9;
        }
        if (this.want === 'USD') {
          this.total = this.quantity * 1.20;
        }
        break;
    }
  }
}
