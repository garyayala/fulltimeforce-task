import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitsRoutingModule } from './commits-routing.module';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';


@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    CommitsRoutingModule
  ]
})
export class CommitsModule { }
