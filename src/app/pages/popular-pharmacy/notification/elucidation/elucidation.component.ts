import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElucidationService } from '../../../../services/elucidation/elucidation.service';

@Component({
  selector: 'app-elucidation',
  templateUrl: './elucidation.component.html',
  styleUrls: ['./elucidation.component.scss']
})
export class ElucidationComponent implements OnInit {

  public elucidations = [];
  public elucidation = {};
  public paragraph = '';
  public csv_authorizations = [];

  constructor(private elucidationService: ElucidationService, private router: Router) {}

  ngOnInit() {
    this.setupList();
  }

  getAuthorizationsIds(elucidation) {
    const authorizations = [];
    for (const authorization of elucidation.authorizations) {
      authorizations.push(authorization.id);
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
    this.elucidationService.deleteElucidation(elucidation);
    this.setupList();
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
    for (let i = 0; i < allTextLines.length; i++) {
      const data = allTextLines[i].split(';');
      const tArr = [];
      for (let j = 0; j < data.length; j++) {
        tArr.push(data[j]);
      }
      lines.push(tArr);
    }

    this.csv_authorizations = lines;
    this.elucidationService.insertAuthorizations({ data: lines })
      .then((data: any) => {
      this.csv_authorizations = data.data;
      window['csv_authorizations'] = this.csv_authorizations;
      alert(`Registros obtidos do CSV: ${this.csv_authorizations.length} elementos`);
    });
  }

  errorHandler(evt) {
    if (evt.target.error.name === 'NotReadableError' || !this.csv_authorizations) {
      alert('O arquivo não é legível!');
    }
  }

  setupList() {
    this.elucidationService.getElucidations()
      .then((data: Array<any>) => {
      this.elucidations = data;
    });
    this.elucidationService.getAuthorizations()
      .then((data: any) => {
      this.csv_authorizations = data.data;
      window['csv_authorizations'] = this.csv_authorizations;
    });
  }

  editElucidation(elucidation) {
    window['elucidation'] = elucidation;
    this.router.navigate(['/popular-pharmacy/notification/elucidation/form']);
  }

  getParagraph(elucidation) {
    this.elucidation = elucidation;
    this.elucidationService.getElucidationBody(elucidation)
      .then((data: any) => {
        this.paragraph = data.body;
      });
  }

}
