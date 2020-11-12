import { DataApi } from './../interface/dataApi';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() dataTables: DataApi;

  constructor() { }

  ngOnInit(): void {
  }

  formatPerMil(num) {
    return num.toLocaleString('pt-BR');
  }

}

