import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GatewayService} from '../gateway.service';
import {LoaderComponent} from '../../components/loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class XmlExtractorService extends GatewayService {

  constructor(protected http: HttpClient, protected loader: LoaderComponent) {
    super(http, loader);
    this.app = 'parsers';
  }

  xmlExtractor(params) {
    this.method = 'post';
    this.path = 'gru';
    this.params = params;
    return this.perform();
  }

  downloadParsedMulct() {
    window.open(this.mountURL(), '_blank');
  }

}
