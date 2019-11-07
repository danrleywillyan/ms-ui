import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-material-detail',
  templateUrl: './material-detail.component.html',
  styleUrls: ['./material-detail.component.scss']
})
export class MaterialDetailComponent implements OnInit {

  public medicines = [ {id: 1, name: 'Insulina', predictions: { arima: 120000, RNA: 134000, LSTM: 134200 }, selection: 'RNA', price: 0.84} ];
  public medicine: any;
  constructor(
    private activatedroute: ActivatedRoute,
    private router: Router, 
  ) { }

  ngOnInit() {
    this.activatedroute.paramMap.subscribe((params : ParamMap)=> { 
      this.medicine = this.medicines[params.get('id')];
      console.log(this.medicine);
    });
  }

  computeValue(medicine) {
    return medicine.predictions[medicine.selection] * medicine.price;
  }

  openMedicine(id) {

  }
}
