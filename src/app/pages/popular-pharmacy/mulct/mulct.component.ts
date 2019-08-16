import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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

  public consultGRU_data= [];
  public mulct1FormGroup: FormGroup;
  constructor(private mulctParserService: MulctParserService, private consultSisGRUService: ConsultsisgruService, private http: HttpClient) {

    this.mulct1FormGroup = new FormGroup({
      login: new FormControl(null),
      pass: new FormControl(null),
      ugArrecadadora: new FormControl(null),
      ugEmitente: new FormControl(null),
      codigoRecolhedor: new FormControl(null),
      dtEmissaoIN: new FormControl(null),
      dtEmissaoFI: new FormControl(null)
    });


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
  // consultGRUConstruct(campo,data){
  //   // alert("123")
  //   this.consultGRU_data[campo] = data;
  // }

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

  clearInputs(){
    this.mulct1FormGroup.controls['login'].setValue('');
    this.mulct1FormGroup.controls['pass'].setValue('');
    this.mulct1FormGroup.controls['ugArrecadadora'].setValue('');
    this.mulct1FormGroup.controls['ugEmitente'].setValue('');
    this.mulct1FormGroup.controls['codigoRecolhedor'].setValue('');
    this.mulct1FormGroup.controls['dtEmissaoIN'].setValue('');
    this.mulct1FormGroup.controls['dtEmissaoFI'].setValue('');

  }


  loginExec(counterTest = 0) {
    var res;
    const formData = new FormData();

    const login = this.mulct1FormGroup.value.login;
    const pass = this.mulct1FormGroup.value.pass;
    const ugArrecadadora = this.mulct1FormGroup.value.ugArrecadadora;
    const ugEmitente = this.mulct1FormGroup.value.ugEmitente;
    const codigoRecolhedor = this.mulct1FormGroup.value.codigoRecolhedor;
    const dtEmissaoIN = this.mulct1FormGroup.value.dtEmissaoIN;
    const dtEmissaoFI = this.mulct1FormGroup.value.dtEmissaoFI;
    // alert(dtEmissaoFI)

    // const login = this.consultGRU_data['login'];
    // const pass = this.consultGRU_data['pass'];
    // const ugArrecadadora = this.consultGRU_data['ugArrecadadora'];
    // const ugEmitente = this.consultGRU_data['ugEmitente'];
    // const codigoRecolhedor = this.consultGRU_data['codigoRecolhedor'];
    // const dtEmissaoIN = this.consultGRU_data['dtEmissaoIN'];
    // const dtEmissaoFI = this.consultGRU_data['dtEmissaoFI'];
    formData.append(`user`, login);
    formData.append(`password`, pass);
    formData.append(`ugArrecadadora`, ugArrecadadora);
    formData.append(`ugEmitente`, ugEmitente);
    formData.append(`codigoRecolhedor`, codigoRecolhedor);
    formData.append(`dtEmissaoIN`, dtEmissaoIN);
    formData.append(`dtEmissaoFI`, dtEmissaoFI);

    // res = this.requestXML(formData);
    this.contructTable(res)
    const promise = this.consultSisGRUService.consultSisGRU(formData);
    promise.then((r) => {

      if(r.indexOf("erro") !== -1) {
        alert(r[1]["message"])
        $('[data-dismiss="modal"]').click();
        this.clearInputs()
      }else{
        this.contructTable(r);
        this.clearInputs()
      }

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
  // requestXML(formData) {//calls the api consultGRU
  //
  //   this.http.post('http://127.0.0.1:5000/requirement',formData,{ responseType: "json"}).subscribe(r => {
  //     if(r.indexOf("erro") !== -1) {
  //       alert(r[1]["message"])
  //       $('[data-dismiss="modal"]').click();
  //       // this.clearInputs()
  //     }else{
  //       this.contructTable(r);
  //       // this.clearInputs()
  //     }
  //     //
  //   });
  // }
  contructTable(obj){
    if(obj==null){
      alert("Problemas na comunicação favor tentar mais tarde ou contactar o administrador.")
    }else{
      // alert(obj)
      var x= obj.length-1
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
}
