import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Stock } from '../../interfaces/stock';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<Stock>;
  columns = ['symbol', 'price', 'size', 'time'];
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource<Stock>();
    this.dataSource.data = [
      {'symbol': 'SNAP','price': 15.08,'size': 100,'time': 1562593648310},
      {'symbol': 'SN','price': 18,'size': 100,'time': 1562593648310}
    ];
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort
  }

  ngOnInit(): void {
  }

}
