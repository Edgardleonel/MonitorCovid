import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { GraphicComponent } from './graphic/graphic.component';
import { TableComponent } from './table/table.component';
import { GlobalComponent } from './global/global.component';
import { CountriesComponent } from './countries/countries.component';
import { HeaderComponent } from './header/header.component';

import { ApiService } from './service/api.service';
import { RenderGraphicService } from './service/render-graphic.service';


@NgModule({
  declarations: [
    AppComponent,
    GraphicComponent,
    TableComponent,
    GlobalComponent,
    CountriesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatTableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ApiService, RenderGraphicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
