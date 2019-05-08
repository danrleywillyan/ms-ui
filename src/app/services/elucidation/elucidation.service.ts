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

  }



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
