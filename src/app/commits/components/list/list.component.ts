import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

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

  private getList(){
    this.api.getList()
    .subscribe(
      (data: any) => {
        this.list = data;
      }
    );
  }
}
