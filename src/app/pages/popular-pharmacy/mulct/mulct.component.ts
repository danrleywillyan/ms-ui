import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-mulct',
  templateUrl: './mulct.component.html',
  styleUrls: ['./mulct.component.scss']
})
export class MulctComponent implements OnInit {

  private filesToUpload = null;

  constructor(private http: HttpClient) {
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

  // calls the micro service Parser / Refund passing POST the csv file for conversion
  upload() {
    const formData = new FormData();
    const files = this.filesToUpload;
    formData.append(`file`, files.item(0), files.item(0).name);

    this.http.post('http://0.0.0.0:5000/refund', formData).subscribe(response => response);
    alert('Arquivo Convertido com sucesso!');
    this.downloadMulct();

    // @ts-ignore
    $('#file').val('');
  }

  /**
   * calls the micro service Parser / Refund via GET receiving the converted file
   */
  downloadMulct() {
    this.http.get('http://0.0.0.0:5000/refund', {responseType: 'blob'}).subscribe(r => {
      const blob = new Blob([r], {type: 'application/txt'});
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.download = 'GRU.txt';
      anchor.href = url;
      anchor.click();

    });
  }

}
