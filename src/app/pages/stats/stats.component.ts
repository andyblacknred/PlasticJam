import {Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Router} from "@angular/router";
import {BreadcrumbsService} from "../../services/breadcrumbs.service";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  constructor(
      private http: HttpClient,
      private router: Router,
      private breadcrubsService: BreadcrumbsService
      ) { }

  public users: any;

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data)=>{
      this.users = data;
    });
    this.breadcrubsService.setBreadcrumbs();
  }

}
