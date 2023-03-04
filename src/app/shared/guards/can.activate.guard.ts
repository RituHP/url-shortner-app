import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { DataService } from "../services/data-services";

@Injectable()
export class CanActivateGuard implements CanActivate {
    originalURL : string | undefined;
    constructor(
        private dataService: DataService,
        private router: Router,
        @Inject(DOCUMENT) private document: Document
    ) {}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean | Observable<boolean> | Promise<boolean>{
        this.originalURL = this.dataService.getUrlLocalStorage(state.url);
        if (this.originalURL !== '') {
            this.goToUrl(this.originalURL);
        }
        return false;
    }

    goToUrl(url:string):void {
        this.document.location.href = url;
    }
}