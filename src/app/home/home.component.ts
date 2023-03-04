import { Component, OnDestroy } from '@angular/core';
import { ShortURL } from '../shared/models/short-url';
import { DataService } from '../shared/services/data-services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnDestroy{
  originalUrl = '';
  shortUrl = '';
  constructor(private dataService: DataService) { }

  onUrlShortening() {
    const randomString = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789';
    let num1 = Math.random() * 100;
    let num2 = Math.random() * 100;
    let num3 = Math.abs(num1 - num2);
    let op = '';
    if (num3 > 56) num3 = num3 % 56;
    op = 'http://localhost:4200/rt/' + randomString.substring(num3, num3 + 5);
    this.dataService.addUrl(new ShortURL(this.originalUrl, op));
    this.shortUrl = op;

  }

  onInput(event: any) {
    if (this.originalUrl === '') {
      this.shortUrl = '';
    }
  }

  ngOnDestroy(): void {
    localStorage.clear();
  }

}
