import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: 'signin'
    , component: SigninComponent
  },
  {
    path: 'main',
    component: SidenavComponent,
    // Disabled authentication check because it was not required
    // canActivateChild: [ AuthGuard ],
    // canActivate: [ AuthGuard ],
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
