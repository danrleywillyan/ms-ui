import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MulctParserService} from '../../../services/refund/mulct-parser.service';
import {ConsultsisgruService} from '../../../services/refund/consultsisgru.service';

@Component({
  selector: 'app-mulct',
  templateUrl: './mulct.component.html',
  styleUrls: ['./mulct.component.scss']
})
export class MulctComponent implements OnInit {

  private filesToUpload = null;
  private login = null;
  private pass = null;

  constructor(private mulctParserService: MulctParserService, private consultSisGRUService: ConsultsisgruService) {}

  ngOnInit() {
  }

  /**
   * add the selected file to a variable
   * @param files angular event change input file type
   */

  files(files) {
    this.filesToUpload = files;
  }
  loginUser(user) {
    this.login = user;
  }
  passw(passw){
    this.pass = passw;
  }

  // calls the micro service Parser / Refund passing POST the csv file for conversion
  upload(counterTest = 0) {
    const formData = new FormData();
    const files = this.filesToUpload;
    formData.append(`file`, files.item(0), files.item(0).name);
    const promise = this.mulctParserService.parseMulct(formData);
    promise.then(() => {
      this.downloadMulct();
      // @ts-ignore
      $('#file').val('');
    }).catch((error) => {
      console.log('error mulct parser error: ', error);
      if (counterTest <= 2) return this.upload(counterTest++);
      alert('Não foi possível processar seu arquivo, tente novamente.');
    });
  }

  loginExec(counterTest = 0) {
    const formData = new FormData();
    const login = this.login;
    const pass = this.pass;
    formData.append(`login`, login);
    formData.append(`pass`, pass);
    const promdise = this.consultSisGRUService.consultSisGRU(formData);
    promdise.then(() => {
      alert(promdise);
    }).catch((error) => {
      console.log('error consult SISGRU error: ', error);
      if (counterTest <= 2) return this.upload(counterTest++);
      alert('Não foi possível consultar o sistema SISGRU, tente novamente.');
    });
    // alert(login);
  }

  /**
   * calls the micro service Parser / Refund via GET receiving the converted file
   */
  downloadMulct() {
    this.mulctParserService.downloadParsedMulct();
  }
  requestXML() {//calls the microservice Parser / Refund via GET receiving the converted file
   //alert("teste");
    this.http.get('http://0.0.0.0:5000/encodes', { responseType: "xml"}).subscribe(r => {
      var xml = new Blob([r], {type: 'application/txt'});
      var url = window.URL.createObjectURL(blob);
      var anchor = document.createElement("a");
      anchor.download = "GRU.txt";
      anchor.href = url;
      anchor.click();

    });

    //alert(response);
 }
}
