import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AdminUser } from './../models/adminuser';
import { Observable } from 'rxjs/Observable';
import { AppSetting } from './../configs/appSetting';
import { LoggerService } from './../services/logger.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BaseService } from './../services/base.service';


@Injectable()
export class AuthService extends BaseService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(
    private router: Router,
    private http: HttpClient,
    private loggerService: LoggerService
  ) {
    super();
  }

  fetchedUser(): Observable<AdminUser[]> {
    
    return this.http.get<AdminUser[]>(AppSetting.API_ENDPOIND + 'user')
      .map(response => { return response; })
      .catch(this.handleError);
  }
}
