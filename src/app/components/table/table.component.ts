import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Stock } from '../../interfaces/stock';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<Stock>;
  columns = ['symbol', 'price', 'size', 'time'];
  @ViewChild(MatSort) sort: MatSort;

  @Input() set data(val: Stock[]) {
    this.dataSource.data = val;
  }

  constructor() {
    this.dataSource = new MatTableDataSource<Stock>();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort
  }

  ngOnInit(): void {
  }

}
