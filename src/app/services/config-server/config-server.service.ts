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

  getRoutes() {
    this.method = 'get';
    this.path = 'eureka/default';
    const promise = this.perform();

    promise.subscribe( data => {
      console.log('getAuthorizations data', data);
    });

    return promise;
  }
}
