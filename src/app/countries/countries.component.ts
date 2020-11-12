import { DataApi } from './../interface/dataApi';
import { RenderGraphicService } from './../service/render-graphic.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
public chart: any = [];
public countries;
public summary;
public global;
public today;
public selected = 'Brazil';
public dataTables: DataApi;

  constructor(private api: ApiService, private graphicService: RenderGraphicService) { }

  ngOnInit(): void {
    this.getApi(this.selected);
  }

  filteredCountries(selected) {
    this.getApi(selected);
  }

  getApi(selected) {
    this.api.getApi().subscribe((res) => {
      this.summary = res;
      this.global = this.summary.Countries.find(res => res.Country === selected);
      this.countries = this.summary.Countries;
      this.dataTables = this.global;
      this.today = this.summary.Date;
      this.graphicService.renderGraphic(selected, this.today, this.global);
    });
  }
}
