import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { ElucidationService } from '../../../../services/elucidation/elucidation.service';

@Component({
  selector: 'app-elucidation',
  templateUrl: './elucidation.component.html',
  styleUrls: ['./elucidation.component.scss']
})
export class ElucidationComponent implements OnInit {

  private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage: string;
  public elucidations = [];
  public elucidation = {};
  public paragraph = '';
  public csv_authorizations = [];
  public loadedCSV: any;
  public hasUploaded: boolean = false;

  constructor(private elucidationService: ElucidationService, private router: Router) {}

  ngOnInit() {
    setTimeout(() => this.staticAlertClosed = true, 20000);
    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);

    this.setupList();
    if(window.localStorage.getItem("loadedCSV") != undefined){
      this.hasUploaded = true;
    }
  }

  getAuthorizationsIds(elucidation) {
    const authorizations = [];
    if(elucidation.authorizations){
      for (const authorization of elucidation.authorizations) {
          authorizations.push(authorization.id);
      }
    }
    return authorizations.join();
  }

  getOccurrencesIds(elucidation) {
    const authorizations = [];
    for (const authorization of elucidation.authorizations) {
      authorizations.push(authorization.occurrences.join());
    }
    return authorizations.join();
  }

  remove(elucidation) {
    this.elucidationService.deleteElucidation(elucidation).then(() => {
      this.setupList();
    });
  }

  processCSV($event) {
    if ($event.target.files && $event.target.files[0]) {
      // Check for the various File API support.
      if (!window['FileReader']) return alert('FileReader are not supported in this browser.');
      else this.getAsText($event.target.files[0]);
      // @ts-ignore
      $('#csvTransactions').val('');
    } else {
      return alert('Nenhum arquivo encontrado, tente novamente');
    }
  }

  getAsText(fileToRead) {
    const reader = new FileReader();

    // attach event, that will be fired, when read is end
    reader.addEventListener('loadend', function() {
      // reader.result contains the contents of blob as a typed array
      // console.log('reader.result', reader.result);
    });
    // start reading a loaded file
    reader.readAsText(fileToRead);
    // Handle errors load
    reader.onload = this.loadHandler.bind(this);
    reader.onerror = this.errorHandler.bind(this);
  }

  loadHandler(event) {
    const csv = event.target.result;
    const allTextLines = csv.split(/\r\n|\n/);
    const lines = [];
    let keys = [];
    for (let i = 0; i < allTextLines.length; i++) {
      const data = allTextLines[i].split(';');
      const tArr = [];
      if (keys.indexOf(data[0])==-1) {
        keys.push(data[0]);
        for (let j = 0; j < data.length; j++) {
          tArr.push(data[j]);
        }
        if(i!==0)lines.push(tArr);
      }
    }
    this.loadedCSV = lines;
    window['loadedCSV'] = this.loadedCSV;
    window.localStorage.setItem("loadedCSV", JSON.stringify(lines));
    this.hasUploaded = true;
    this._success.next("Arquivo importado com sucesso");
  }

  errorHandler(evt) {
    if (evt.target.error.name === 'NotReadableError' || !this.loadedCSV) {
      alert('O arquivo não é legível!');
    }
  }

  setupList() {
    this.elucidationService.getElucidations()
    .then((data: Array<any>) => {
      this.elucidations = data.reverse();
      window.localStorage.setItem("registredElucidations", JSON.stringify(data));
    });
    this.elucidationService.getAuthorizations()
      .then((data: any) => {
        this.csv_authorizations = data.data;
        window['csv_authorizations'] = this.csv_authorizations;
    });
  }

  editElucidation(elucidation) {
    window['elucidation'] = elucidation;
    this.router.navigate(['/popular-pharmacy/notification/form/' + elucidation._id ]);
  }

  getParagraph(elucidation) {
    this.elucidation = elucidation;
    this.elucidationService.getElucidationBody(elucidation)
      .then((data: any) => {
        this.paragraph = data.body.map(line => line.replace(/\(([0-9]{4})-([0-9]{2})-([0-9]{2})\)/g,'($3/$2/$1)')).filter((line, i, data) => line !== data[i+1]);
      });
  }

}
