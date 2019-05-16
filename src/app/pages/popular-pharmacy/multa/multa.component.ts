
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-multa',
  templateUrl: './multa.component.html',
  styleUrls: ['./multa.component.scss']
})
export class MultaComponent implements OnInit {

  private filesToUpload = null;
  public noDownload = true;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  files(files) {//add the selected file to a variable
   this.filesToUpload = files;
 }

 upload() {//calls the microservice Parser / Refund passing POST the csv file for conversion
   const formData = new FormData();
   const files = this.filesToUpload;
   formData.append(`file`, files.item(0), files.item(0).name);

   this.http.post('http://0.0.0.0:5000/refund', formData).subscribe(response => response);
   alert("Arquivo Convertido com sucesso!");
   this.downloadMulta();
   // @ts-ignore
   $('#file').val('');
   //this.noDownload = false;
 }

 downloadMulta() {//calls the microservice Parser / Refund via GET receiving the converted file
   //alert("teste");
    this.http.get('http://0.0.0.0:5000/refund', { responseType: "blob"}).subscribe(r => {
      var blob = new Blob([r], {type: 'application/txt'});
      var url = window.URL.createObjectURL(blob);
      var anchor = document.createElement("a");
      anchor.download = "GRU.txt";
      anchor.href = url;
      anchor.click();

    });

    //alert(response);
 }
}
