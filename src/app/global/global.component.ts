import { DataApi } from './../interface/dataApi';
import { RenderGraphicService } from './../service/render-graphic.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {
public chart: any = [];
public summary;
public global;
public today;
public selected = 'Mundo';
public dataTables: DataApi;

  constructor(private api: ApiService, private graphicService: RenderGraphicService) { }

  ngOnInit(): void {
    this.getApi(this.selected);
  }

  getApi(selected) {
    this.api.getApi().subscribe((res) => {
      this.summary = res;
      this.global = this.summary.Global;
      this.dataTables = this.global;
      this.today = this.summary.Date;
      this.graphicService.renderGraphic(selected, this.today, this.global);
    });
  }
}
