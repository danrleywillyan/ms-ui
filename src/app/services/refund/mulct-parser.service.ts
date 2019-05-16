import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GatewayService} from '../gateway.service';
import {LoaderComponent} from '../../components/loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class MulctParserService extends GatewayService{

  constructor(protected http: HttpClient, protected loader: LoaderComponent) {
    super(http, loader);
    this.app = 'parser';
  }
  parseMulct(params) {

    this.method = 'post';
    this.path = 'refund';
    this.params = params;
    return this.perform();
  }
}
