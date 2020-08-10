import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { BreadcrumbsService } from "../../services/breadcrumbs.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public id: number;
  public data: any;


  constructor(
    private activateRoute: ActivatedRoute,
    private http: HttpClient,
    private breadcrubsService: BreadcrumbsService,
  ) { }

  ngOnInit(): void {
    this.breadcrubsService.setBreadcrumbs();
    this.id = this.activateRoute.snapshot.params['id'];
    this.http.get(`https://jsonplaceholder.typicode.com/users/${this.id}`).subscribe((data)=>{
      this.data = data;
    });
  }



}
