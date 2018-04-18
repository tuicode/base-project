import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoaderService {

  constructor() { }
  isLoader: boolean = false;
  displayLoader(value: boolean) {
    this.isLoader = value;
  }
}
