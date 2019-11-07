import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {

  public medicines = [ {id: 1, name: 'Insulina', predictions: { arima: 120000, RNA: 134000, LSTM: 134200 }, selection: 'RNA', price: 0.84} ];
  constructor() { }

  ngOnInit() {
    
  }

  computeValue(medicine) {
    return medicine.predictions[medicine.selection] * medicine.price;
  }

  openMedicine(id) {
    
  }
}
