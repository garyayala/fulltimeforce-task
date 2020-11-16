import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  commit: any;

  constructor(private api: ApiService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(p => {
      this.commit = { sha: p.sha };
      this.get();
    });
  }

  ngOnInit(): void {
  }

  private get(): void{
    this.api.get(this.commit.sha)
    .subscribe(
      (data: any) => {
        this.commit = data;
      },
      (error: HttpErrorResponse)  => {

      }
    );
  }
}
