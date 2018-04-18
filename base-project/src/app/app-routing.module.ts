import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// guard
import { AuthGuard } from "./../app/core/guard/auth.guard";

// components 
import { HomeLayoutComponent } from './../app/core/layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './../app/core/layouts/login-layout/login-layout.component';
import { ContentWrapperComponent } from './../app/core/layouts/content-wrapper/content-wrapper.component';
import { LoginComponent } from './../app/core/layouts/login/login.component';


const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '',
      component: ContentWrapperComponent
    }]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [{
      path: 'login',
      component: LoginComponent
    }]
  },

  { path: '**', redirectTo: '' }
]



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
