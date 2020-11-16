import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';


const routes: Routes = [
  {
    path: 'main',
    component: SidenavComponent,
    children: [
      {
        path: 'commits',
        loadChildren: () => import('./commits/commits.module').then(m => m.CommitsModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'commits'
      }
    ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
