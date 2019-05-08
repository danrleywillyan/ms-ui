import { Injectable } from '@angular/core';
import {GatewayService} from '../gateway.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigServerService extends GatewayService {

  constructor(protected http: HttpClient) {
    super(http);
    this.app = 'config';
  }

  getUIConfig() {
    this.method = 'get';
    this.path = 'ui/default';
    const promise = this.perform();

    promise.subscribe( data => {
      console.log('UIConfig from ZUUL', data);
    });

    return promise;
  }

  getRoutes() {
    this.method = 'get';
    this.path = 'routes';
    const promise = this.http.request(this.method, `${this.protocol}://${this.host}:${this.port}/${this.path}`, {});

    promise.subscribe( data => {
      console.log('getRoutes from ZUUL', data);
    });

    return promise;
  }
}
