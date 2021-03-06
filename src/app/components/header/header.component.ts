import {Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import {BreadcrumbsService} from "../../services/breadcrumbs.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
      public router: Router,
      public breadcrumbsService: BreadcrumbsService
  ) { }



  ngOnInit(): void {
    console.log(this.breadcrumbsService.currentUrl);
  }

}
