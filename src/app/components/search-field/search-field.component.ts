import { Stock } from './../../interfaces/stock';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {
  stockSearchForm = new FormGroup(
    {
      query: new FormControl('', Validators.required)
    }
  )

  @Output() newStockEmitter = new EventEmitter<Stock>();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.http.get<Stock>('https://api.iextrading.com/1.0/tops/last?symbols=' + this.stockSearchForm.value.query).subscribe(stock => {
      this.newStockEmitter.next(stock);
    })
  }

}
