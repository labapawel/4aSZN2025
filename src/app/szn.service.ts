import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SznService {
  private _sznbs: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public config: any = {};
  constructor() {
    let config = localStorage.getItem('szn_config');
    if (config) {
      this.config = JSON.parse(config);
    }
    this._sznbs.next(this.config);
   }
  get sznbs() {
    return this._sznbs.asObservable();
  }
  sznSetConfig(name: string, value: any) {
    this.config[name] = value
    localStorage.setItem('szn_config', JSON.stringify(this.config));
    this._sznbs.next(this.config);
  }
}
