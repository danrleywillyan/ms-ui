import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MulctParserService} from '../../../services/refund/mulct-parser.service';
import {XmlExtractorService} from '../../../services/refund/xml-extractor.service';
import {ConsultsisgruService} from '../../../services/refund/consultsisgru.service';
import xml2js from 'xml2js';

declare var $: any;

@Component({
  selector: 'app-mulct',
  templateUrl: './mulct.component.html',
  styleUrls: ['./mulct.component.scss']
})
export class MulctComponent implements OnInit {
  public grus = [];
  private filesToUpload = null;
  private xmlTofill = null;
  private login = null;
  private pass = null;
  private ugArrecadadora = null;
  private ugEmitente = null;
  private codigoRecolhedor = null;
  private dtEmissaoIN = null;
  private dtEmissaoFI = null;
  public hideElement= false;
  public consultGRUFormGroup = null;
  public generateGRUFormGroup = null;

  public consultGRU_data= [];
  constructor(private mulctParserService: MulctParserService, private xmlExtractorService: XmlExtractorService, private consultSisGRUService: ConsultsisgruService, private fb: FormBuilder,private http: HttpClient) {
    this.consultGRUFormGroup = new FormGroup({
      login: new FormControl(null, Validators.minLength(2)),
      pass: new FormControl(null, Validators.minLength(2)),
      ugArrecadadora: new FormControl(null),
      ugEmitente: new FormControl(null),
      codigoRecolhedor: new FormControl(null),
      dtEmissaoIN: new FormControl(null, null),
      dtEmissaoFI: new FormControl(null)
    });

    this.generateGRUFormGroup = new FormGroup({
      referencia: new FormControl(null),
      competencia: new FormControl(null),
      vencimento: new FormControl(null),
      cnpj_cpf: new FormControl(null),
      nome_contribuinte: new FormControl(null),
      valorPrincipal: new FormControl(null),
      descontos: new FormControl(null),
      deducoes: new FormControl(null),
      multa: new FormControl(null),
      juros: new FormControl(null),
      acrescimos: new FormControl(null),
      valorTotal: new FormControl(null),

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
  consultGRUConstruct(campo,data){
    this.consultGRU_data[campo] = data;
  }

  // calls the micro service Parser / Refund passing POST the csv file for conversion
  upload(counterTest = 0) {
    const formData = new FormData();
    const files = this.filesToUpload;
    if(!files || !files.item) return;
    formData.append(`file`, files.item(0), files.item(0).name);
    const promise = this.xmlExtractorService.xmlExtractor(formData);
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
    formData.append('user', this.consultGRUFormGroup.value.login);
    formData.append('password', this.consultGRUFormGroup.value.pass);
    formData.append('ugArrecadadora', this.consultGRUFormGroup.value.ugArrecadadora);
    formData.append('ugEmitente', this.consultGRUFormGroup.value.ugEmitente);
    formData.append('codigoRecolhedor', this.consultGRUFormGroup.value.codigoRecolhedor);
    formData.append('dtEmissaoIN', this.consultGRUFormGroup.value.dtEmissaoIN);
    formData.append('dtEmissaoFI', this.consultGRUFormGroup.value.dtEmissaoFI);
    const promise = this.consultSisGRUService.consultSisGRU(formData);

    promise.then((res) => {
      // console.log('loginExec resp:', res);
      this.contructTable(res);
    }).catch((error) => {
      console.log('error consult SISGRU error: ', error);
      if (counterTest <= 2) return this.upload(counterTest++);
      alert('Não foi possível consultar o sistema SISGRU, tente novamente.');
    });
  }
  fill_data_xml(){
    const formData = new FormData();

    const files = this.filesToUpload;
    // if(!files || !files.item) return;

    formData.append(`file`, files.item(0), files.item(0).name);
    const promise = this.xmlExtractorService.xmlExtractor(formData);
    promise.then((r) => {
      this.generateGRUFormGroup.controls['valorPrincipal'].setValue(r["princ"]);
      this.generateGRUFormGroup.controls['descontos'].setValue("0,00");
      this.generateGRUFormGroup.controls['deducoes'].setValue("0,00");
      this.generateGRUFormGroup.controls['multa'].setValue("0,00");
      this.generateGRUFormGroup.controls['juros'].setValue(r["juros"]);
      this.generateGRUFormGroup.controls['acrescimos'].setValue("0,00");
      this.generateGRUFormGroup.controls['valorTotal'].setValue(r["total"]);
    }).catch((error) => {
      console.log('error xml generate error: ', error);
      if (counterTest <= 2) return this.upload(counterTest++);
      alert('Não foi possível processar seu arquivo, tente novamente.');
    });
    // const promise = this.http.post('http://0.0.0.0:80/gru',formData);
    // this.http.post('http://0.0.0.0/gru',formData,{ responseType: "json"}).subscribe(r => {
    //   this.generateGRUFormGroup.controls['valorPrincipal'].setValue(r["princ"]);
    //   this.generateGRUFormGroup.controls['descontos'].setValue("0,00");
    //   this.generateGRUFormGroup.controls['deducoes'].setValue("0,00");
    //   this.generateGRUFormGroup.controls['multa'].setValue("0,00");
    //   this.generateGRUFormGroup.controls['juros'].setValue(r["juros"]);
    //   this.generateGRUFormGroup.controls['acrescimos'].setValue("0,00");
    //   this.generateGRUFormGroup.controls['valorTotal'].setValue(r["total"]);
    // });

  }



  /**
   * calls the micro service Parser / Refund via GET receiving the converted file
   */
  downloadMulct() {
    this.mulctParserService.downloadParsedMulct();
  }
  requestXML(formData) {//calls the api consultGRU
    // this.http.post('http://127.0.0.1:5000/requirement',formData,{ responseType: "json"}).subscribe(r => {
    //
    //   this.contructTable(r);
    // });
  }
  contructTable(obj){
    // console.log('contructTable called: ', obj);
    // data = obj;
    this.grus = obj;

    // var x=obj.length-1
    // var i=0
    // while(x>i){
    //   var array=obj[i]
    //   var data = []
    //   data["id"]=JSON.stringify(array["id"]).replace(`\"`, '').replace(`\"`, '');
    //   // data["ugEmitente"]=JSON.stringify(array["ugEmitente"]).replace(`\"`, '').replace(`\"`, '');
    //   // data["ugArrecadadora"]=JSON.stringify(array["ugArrecadadora"]).replace(`\"`, '').replace(`\"`, '');
    //   data["dtEmissao"]=JSON.stringify(array["dtEmissao"]).replace(`\"`, '').replace(`\"`, '');
    //   data["dtContabilizacaoSiafi"]=JSON.stringify(array["dtContabilizacaoSiafi"]).replace(`\"`, '').replace(`\"`, '');
    //   data["recolhimentoContabilizado"]=JSON.stringify(array["recolhimentoContabilizado"]).replace(`\"`, '').replace(`\"`, '');
    //   data["codigoRecolhedor"]=JSON.stringify(array["codigoRecolhedor"]).replace(`\"`, '').replace(`\"`, '');
    //   data["numReferencia"]=JSON.stringify(array["numReferencia"]).replace(`\"`, '').replace(`\"`, '');
    //   data["vlTotal"]=JSON.stringify(array["vlTotal"]).replace(`\"`, '').replace(`\"`, '');
    //   data["situacao"]=JSON.stringify(array["situacao"]).replace(`\"`, '').replace(`\"`, '');
    //   this.grus[i]= data;
    //   i++;
    // }
    this.hideElement=true;
    $('[data-dismiss="modal"]').click();
  }
}
