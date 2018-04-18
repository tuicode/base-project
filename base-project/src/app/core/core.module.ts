import { APP_BASE_HREF } from '@angular/common';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//guards
import { AuthGuard } from './guard/auth.guard';

// components
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { ContentWrapperComponent } from './layouts/content-wrapper/content-wrapper.component';
import { LoaderComponent } from './layouts/loader/loader.component';
import { HomeComponent } from './layouts/home/home.component';
import { LoginComponent } from './layouts/login/login.component';
// services
import { AuthService } from './services/auth.service';
import { LoaderService } from './services/loader.service';
import { LoggerService } from './services/logger.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    HomeComponent, LoginComponent, HomeLayoutComponent, LoginLayoutComponent, ContentWrapperComponent,
    LoaderComponent
  ],
  declarations: [HomeComponent, LoginComponent, HomeLayoutComponent,
    LoginLayoutComponent,
    ContentWrapperComponent,
    LoaderComponent],
  providers: [AuthGuard, AuthService, LoaderService, LoggerService]
})
export class CoreModule { }
