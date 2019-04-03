import { Inject, Injectable } from '@angular/core';

import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
// key that is used to access the data in local storageconst

var STORAGE_KEY = 'local_paragrafos_list';

@Injectable()
export class LocalStorageService {

     anotherTodolist = [];

     constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

     public storeOnLocalStorage(codTransacao: string,codOcorrencia: string,dataTransacao: string): void {

          // get array of tasks from local storage
          const currentTodoList = this.storage.get(STORAGE_KEY) || [];
          // push new task to array
          currentTodoList.push({
              codTransacao: codTransacao,
              codOcorrencia: codOcorrencia,
              dataTransacao: dataTransacao
          });
          // insert updated array to local storage
          this.storage.set(STORAGE_KEY, currentTodoList);
          console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
     }

     public removeItem(id)
     {
       alert('terminar o delete');
       const currentTodoList = this.storage.get('local_paragrafos_list').removeItem(id);
       console.log(this.storage.get('local_paragrafos_list'));
       //this.storage.STORAGE_KEY.removeItem(id);
     }
}
