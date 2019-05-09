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
    const promise = this.perform();

    return promise;
  }

  // INSERT Occurrences records
  insertOccurrenceTypes(params) {
    this.method = 'post';
    this.path = 'occurrence_codes';
    this.params = params;
    const promise = this.perform();

    return promise;
  }

  // UPDATE Occurrences records
  updateOccurrenceTypes(params) {
    this.method = 'put';
    this.path = `occurrence_codes/${params._id}`;
    delete params._id;
    this.params = params;
    const promise = this.perform();

    return promise;
  }

  // DELETE Occurrences records
  deleteOccurrenceTypes(params) {
    this.method = 'delete';
    this.path = `occurrence_codes/${params._id}`;
    const promise = this.perform();

    return promise;
  }

  // Elucidations CRUD
  getElucidations() {
    this.method = 'get';
    this.path = 'elucidations';
    const promise = this.perform();

    return promise;
  }

  // INSERT Occurrences records
  insertElucidation(params) {
    this.method = 'post';
    this.path = 'elucidations';
    this.params = params;
    const promise = this.perform();

    return promise;
  }

  // UPDATE Elucidations records
  updateElucidations(params) {
    this.method = 'put';
    this.path = `elucidations/${params._id}`;
    delete params._id;
    this.params = params;
    const promise = this.perform();

    return promise;
  }

  // DELETE Elucidations records
  deleteElucidations(params) {
    this.method = 'delete';
    this.path = `elucidations/${params._id}`;
    const promise = this.perform();

    return promise;
  }

  /**
   * AUTHORIZATIONS CRUD METHODS
   */

  // GET ALL Authorizations records
  getAuthorizations() {
    this.method = 'get';
    this.path = 'authorizations';
    const promise = this.perform();

   return promise;
  }

  // INSERT Authorizations records
  insertAuthorizations(params) {
    this.method = 'post';
    this.path = 'authorizations';
    this.params = params;
    const promise = this.perform();

   return promise;
  }
}
