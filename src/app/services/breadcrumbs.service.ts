import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {

  public currentUrl: string = '';
  public currentUrlArray: string[] = [];
  public breadcrumbsLinks: string[] = [];
  public breadcrumbsName: string[] = [];
  public isHomepage: boolean = this.currentUrl === '/home';

  constructor( private router: Router ) { }

  setBreadcrumbs() {
    let that = this;

    this.currentUrl = this.router.url;
    this.isHomepage = this.currentUrl === '/home';
    this.currentUrlArray = this.currentUrl.split('/');
    this.currentUrlArray.splice(0,1);

    this.breadcrumbsLinks = [];
    this.breadcrumbsName = [];

    this.currentUrlArray.forEach((item, index)=>{
      let current = index == 0 ? item : [this.breadcrumbsLinks[index - 1],  item].join('/');
      this.breadcrumbsLinks.push(current);
    });

    function getBreadcrumbs(object) {
      for (const property in object) {
        if (property === 'data') {
          that.breadcrumbsName.push(object[property].breadcrumb);
        }

        if (property === 'children') {
          object[property].forEach(item=>{
            getBreadcrumbs(item);
          });
        }
      }
    }

    this.router.config.forEach(item=>{
      this.breadcrumbsName.push();
      console.log(this.breadcrumbsName);
      console.log();
      getBreadcrumbs(item);
    });
  }
}
