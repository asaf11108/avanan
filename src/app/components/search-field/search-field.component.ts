import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.stockSearchForm);
  }

}
