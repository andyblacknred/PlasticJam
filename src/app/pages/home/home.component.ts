import { Component, OnInit } from '@angular/core';
import {BreadcrumbsService} from "../../services/breadcrumbs.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
      private breadcrubsService: BreadcrumbsService
  ) { }

  ngOnInit(): void {
    this.breadcrubsService.setBreadcrumbs();
  }

}
