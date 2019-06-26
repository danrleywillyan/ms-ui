import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MulctParserService} from '../../../services/refund/mulct-parser.service';
import {ConsultsisgruService} from '../../../services/refund/consultsisgru.service';

declare var $: any;

@Component({
  selector: 'app-mulct',
  templateUrl: './mulct.component.html',
  styleUrls: ['./mulct.component.scss']
})
export class MulctComponent implements OnInit {
  public grus = [];
  private filesToUpload = null;
  private login = null;
  private pass = null;
  private ugArrecadadora = null;
  private ugEmitente = null;
  private codigoRecolhedor = null;
  private dtEmissaoIN = null;
  private dtEmissaoFI = null;
  public hideElement= false;

  constructor(private mulctParserService: MulctParserService, private consultSisGRUService: ConsultsisgruService, private http: HttpClient) {
  }

  ngOnInit() {
  }

  /**
   * add the selected file to a variable
   * @param files angular event change input file type
   */

  files(files) {
    this.filesToUpload = files;
  }
  loginfc(user) {
    this.login = user;
  }
  passfc(passw){
    this.pass = passw;
  }
  ugArrecadadorafc(ugArrecadadora){
    this.ugArrecadadora = ugArrecadadora;
  }
  ugEmitentefc(ugEmitente){
    this.ugEmitente = ugEmitente;
  }
  codigoRecolhedorfc(codigoRecolhedor){
    this.codigoRecolhedor = codigoRecolhedor;
  }
  dtEmissaoINfc(dtEmissaoIN){
    this.dtEmissaoIN = dtEmissaoIN;
  }
  dtEmissaoFIfc (dtEmissaoFI){
    this.dtEmissaoFI = dtEmissaoFI;
  }
  // calls the micro service Parser / Refund passing POST the csv file for conversion
  upload(counterTest = 0) {
    const formData = new FormData();
    const files = this.filesToUpload;
    formData.append(`file`, files.item(0), files.item(0).name);
    const promise = this.mulctParserService.parseMulct(formData);
    promise.then(() => {
      this.downloadMulct();
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
    const ugArrecadadora = this.ugArrecadadora;
    const ugEmitente = this.ugEmitente;
    const codigoRecolhedor = this.codigoRecolhedor;
    const dtEmissaoIN = this.dtEmissaoIN;
    const dtEmissaoFI = this.dtEmissaoFI;
    formData.append(`user`, login);
    formData.append(`password`, pass);
    formData.append(`ugArrecadadora`, ugArrecadadora);
    formData.append(`ugEmitente`, ugEmitente);
    formData.append(`codigoRecolhedor`, codigoRecolhedor);
    formData.append(`dtEmissaoIN`, dtEmissaoIN);
    formData.append(`dtEmissaoFI`, dtEmissaoFI);

    // this.requestXML(formData);

    const promise = this.consultSisGRUService.consultSisGRU(formData);
    promise.then((res) => {
      this.contructTable(res);
    }).catch((error) => {
      console.log('error consult SISGRU error: ', error);
      if (counterTest <= 2) return this.upload(counterTest++);
      alert('Não foi possível consultar o sistema SISGRU, tente novamente.');
    });
  }

  /**
   * calls the micro service Parser / Refund via GET receiving the converted file
   */
  downloadMulct() {
    this.mulctParserService.downloadParsedMulct();
  }
  requestXML(formData) {//calls the api consultGRU
    this.http.post('http://127.0.0.1:5000/requirement',formData,{ responseType: "json"}).subscribe(r => {

      this.contructTable(r);
    });
  }
  contructTable(obj){
    var x=obj.length-1
    var i=0
    while(x>i){
      var array=obj[i]
      var data = []
      data["id"]=JSON.stringify(array["id"]).replace(`\"`, '').replace(`\"`, '');
      // data["ugEmitente"]=JSON.stringify(array["ugEmitente"]).replace(`\"`, '').replace(`\"`, '');
      // data["ugArrecadadora"]=JSON.stringify(array["ugArrecadadora"]).replace(`\"`, '').replace(`\"`, '');
      data["dtEmissao"]=JSON.stringify(array["dtEmissao"]).replace(`\"`, '').replace(`\"`, '');
      data["dtContabilizacaoSiafi"]=JSON.stringify(array["dtContabilizacaoSiafi"]).replace(`\"`, '').replace(`\"`, '');
      data["recolhimentoContabilizado"]=JSON.stringify(array["recolhimentoContabilizado"]).replace(`\"`, '').replace(`\"`, '');
      data["codigoRecolhedor"]=JSON.stringify(array["codigoRecolhedor"]).replace(`\"`, '').replace(`\"`, '');
      data["numReferencia"]=JSON.stringify(array["numReferencia"]).replace(`\"`, '').replace(`\"`, '');
      data["vlTotal"]=JSON.stringify(array["vlTotal"]).replace(`\"`, '').replace(`\"`, '');
      data["situacao"]=JSON.stringify(array["situacao"]).replace(`\"`, '').replace(`\"`, '');
      this.grus[i]= data;
      i++;
    }
    this.hideElement=true;
    $('[data-dismiss="modal"]').click();
  }
}
