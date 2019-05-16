import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MulctParserService} from '../../../services/refund/mulct-parser.service';

@Component({
  selector: 'app-mulct',
  templateUrl: './mulct.component.html',
  styleUrls: ['./mulct.component.scss']
})
export class MulctComponent implements OnInit {

  private filesToUpload = null;

  constructor(private mulctParserService: MulctParserService) {}

  ngOnInit() {
  }

  /**
   * add the selected file to a variable
   * @param files angular event change input file type
   */
  files(files) {
    this.filesToUpload = files;
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

  /**
   * calls the micro service Parser / Refund via GET receiving the converted file
   */
  downloadMulct() {
    this.mulctParserService.downloadParsedMulct();
  }

}
