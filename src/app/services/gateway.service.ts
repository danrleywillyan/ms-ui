import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  public app: string;
  public path: string;
  public method: string;

  public port = '8080';
  public host = 'docker';
  public protocol = 'http';

  public params: object;

  constructor(protected http: HttpClient) { }

  protected perform() {
    return this.http.request(this.method, this.mountURL(), this.options());
  }

  private options() {
    return {
      body: this.params
    };
  }

  private mountURL() {
    return `${this.protocol}://${this.host}:${this.port}/${this.app}/${this.path}`;
  }

}
