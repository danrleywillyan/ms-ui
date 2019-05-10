import { Injectable } from '@angular/core';
import {GatewayService} from '../gateway.service';
import {HttpClient} from '@angular/common/http';
import {LoaderComponent} from '../../components/loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class ConfigServerService extends GatewayService {

  constructor(protected http: HttpClient, protected loader: LoaderComponent) {
    super(http, loader);
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
