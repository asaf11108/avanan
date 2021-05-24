import { Component, OnInit, ViewChild } from '@angular/core';
import { Stock } from '../../interfaces/stock';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dataSource: MatTableDataSource<Stock>;
  columns = ['stock', 'price', 'size', 'time'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Stock>;

  constructor() {
    this.dataSource = new MatTableDataSource<Stock>();
    this.dataSource.data = [];
  }

  ngOnInit(): void {
  }

}
