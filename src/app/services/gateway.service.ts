import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoaderComponent} from '../components/loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  public app: string;
  public path: string;
  public method: string;
  public debugMsg: string;

  public headers = {};
  public port = '8080';
  public host = window.location.hostname; //35.247.232.147 gateway
  public protocol = 'http';

  public params: object;
  protected loader: LoaderComponent;

  constructor(protected http: HttpClient, public lc: LoaderComponent) {
    this.loader = lc;
  }

  protected loading(promise) {
    this.loader.start();
    if (this.debugMsg) {
      console.log('className', this.constructor.name);
      console.log('debug message: ', this.debugMsg);
    }

    this.debugMsg = null;

    promise.then( data => {
      console.log('data', data);
      setTimeout( () => { this.loader.stop(); }, 1000);
    }, error => {
      console.log('error', error);
      setTimeout( () => { this.loader.stop(); }, 1000);
    });
  }

  protected perform() {
    const promise = this.http.request(this.method, this.mountURL(), this.options()).toPromise();
    this.loading(promise);
    this.headers = {};
    return promise;
  }

  protected mountURL() {
    return `${this.protocol}://${this.host}:${this.port}/${this.app}/${this.path}`;
  }

  private options() {
    return {
      body: this.params,
      headers: this.headers
    };
  }

}
