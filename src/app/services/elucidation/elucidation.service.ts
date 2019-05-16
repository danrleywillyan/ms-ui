import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GatewayService} from '../gateway.service';
import {LoaderComponent} from '../../components/loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class ElucidationService extends GatewayService {

  constructor(protected http: HttpClient, protected loader: LoaderComponent) {
    super(http, loader);
    this.app = 'elucidation';
  }

  /**
   * OCCURRENCES TYPES CRUD METHODS
   */

  // Occurrences Types CRUD
  getOccurrencesTypes() {
    this.method = 'get';
    this.path = 'occurrence_codes';
    return this.perform();
  }

  // INSERT Occurrences records
  insertOccurrenceTypes(params) {
    this.method = 'post';
    this.path = 'occurrence_codes';
    this.params = params;
    return this.perform();
  }

  // UPDATE Occurrences records
  updateOccurrenceTypes(params) {
    this.method = 'put';
    this.path = `occurrence_codes/${params._id}`;
    delete params._id;
    this.params = params;
    return this.perform();
  }

  // DELETE Occurrences records
  deleteOccurrenceTypes(params) {
    this.method = 'delete';
    this.path = `occurrence_codes/${params._id}`;
    return this.perform();
  }

  // Elucidations CRUD
  getElucidations() {
    this.method = 'get';
    this.path = 'elucidations';
    return this.perform();
  }

  // INSERT Occurrences records
  insertElucidation(params) {
    this.method = 'post';
    this.path = 'elucidations';
    this.params = params;
    return this.perform();
  }

  // UPDATE Elucidations records
  updateElucidation(params) {
    this.method = 'put';
    this.path = `elucidations/${params._id}`;
    delete params._id;
    this.params = params;
    return this.perform();
  }

  // DELETE Elucidations records
  deleteElucidation(params) {
    this.method = 'delete';
    this.path = `elucidations/${params._id}`;
    return this.perform();
  }

  /**
   * AUTHORIZATIONS CRUD METHODS
   */

  // GET ALL Authorizations records
  getAuthorizations() {
    this.method = 'get';
    this.path = 'authorizations';
    return this.perform();
  }

  // INSERT Authorizations records
  insertAuthorizations(params) {
    this.method = 'post';
    this.path = 'authorizations';
    this.params = params;
    return this.perform();
  }
}
