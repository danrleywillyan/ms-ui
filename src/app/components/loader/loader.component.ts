import {Component, Injectable, OnInit} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})

@Injectable()
export class LoaderComponent implements OnInit {

  title = 'Aguarde, robôs trabalhando.';
  subtitle = 'Estamos carregando os dados e/ou persistindo as informações inseridas.';

  constructor() { }

  ngOnInit() {
  }

  start() {
    // @ts-ignore
    $('#loader').modal({
      backdrop: 'static', // remove ability to close modal with click
      keyboard: false, // remove option to close with keyboard
      show: true // Display loader!
    });
  }

  stop() {
    // @ts-ignore
    $('#loader').modal('hide');
  }

}
