import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { LocalStorageService } from '../services/admin-storage-service';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';


@Component({
  selector: 'app-daf-form3',
  templateUrl: './daf-form3.component.html',
  styleUrls: ['./daf-form3.component.css']
})

export class DafForm3Component implements OnInit {

  codTransacao: string;
  codOcorrencia: string;
  dataTransacao: string;
  list = [];

 constructor (private localStorageService: LocalStorageService,@Inject(LOCAL_STORAGE) private storage: StorageService) {}

  ngOnInit(): void {
    this.list = this.storage.get('local_paragrafos_list');
  }

  inserirParagrafo() {
      this.localStorageService.storeOnLocalStorage (this.codTransacao,this.codOcorrencia, this.dataTransacao);
  }

  deleteParagrafo(id){
    this.localStorageService.removeItem(id);
  }

}
