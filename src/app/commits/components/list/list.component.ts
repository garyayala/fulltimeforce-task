import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list: any[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(): void{
    this.list = [];
    this.api.getList()
    .subscribe(
      (data: any) => {
        this.list = data;
      },
      (error: HttpErrorResponse)  => {

      }
    );
  }
}
