import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GatewayService} from '../gateway.service';

@Injectable({
  providedIn: 'root'
})
export class ElucidationService extends GatewayService {

  constructor(protected http: HttpClient) {
    super(http);
    this.app = 'elucidation';
  }

  /**
   * OCCURRENCES TYPES CRUD METHODS
   */

  // Occurrences Types CRUD
  getOccurrencesTypes() {
    this.method = 'get';
    this.path = 'occurrence_codes';
    console.log('getOccurrencesTypes CALLED');
    const promise = this.perform();

    promise.subscribe( data => {
      console.log('getOccurrencesTypes data', data);
    });

    return promise;
  }


  /*
  [19:43, 8/5/2019] Arthur Jahn: as rotas:
list e add elucidations -  @app.route('/elucidations', methods=['POST', 'GET'])
get remove e update @app.route('/elucidations/<id>', methods=['PUT', 'DELETE', 'GET'])

list e add ocurrence_codes - @app.route('/occurrence_codes', methods=['POST', 'GET'])
get remove e update @app.route('/occurrence_codes/<id>', methods=['PUT', 'DELETE', 'GET'])

get e add @app.route('/authorizations', methods=['POST', 'GET'])
[19:43, 8/5/2019] Arthur Jahn: o POST em authorizations substitui o que tinha lá antes
   */

  /**
   * AUTHORIZATIONS CRUD METHODS
   */

  // GET ALL Authorizations records
  getAuthorizations() {
    this.method = 'get';
    this.path = 'authorizations';
    const promise = this.perform();

    promise.subscribe( data => {
      console.log('getAuthorizations data', data);
    });

   return promise;
  }
}
