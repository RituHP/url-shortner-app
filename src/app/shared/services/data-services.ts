import { Injectable } from "@angular/core";
import { ShortURL } from "../models/short-url";

@Injectable()
export class DataService{
    
    getUrlLocalStorage(shortUrl:string):string{
        let url = localStorage.getItem('http://localhost:4200' + shortUrl);
        if (url !== '') return url;
        else return '';
    }

    addUrl(shortenUrl:ShortURL) {
        localStorage.setItem(shortenUrl.shortUrl, shortenUrl.url);
    }

}