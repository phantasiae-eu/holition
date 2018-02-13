// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { AppBarComponent } from './components/appBar.component';
import { MainContentComponent } from './components/mainContent.component';
import { MapPanelCloudsComponent } from './components/mapPanelClouds.component';
import { MapPanelGeneralComponent } from './components/mapPanelGeneral.component';
import { MapDetailsCloudsComponent } from './components/mapDetailsClouds.component';
import { MapDetailsGeneralComponent } from './components/mapDetailsGeneral.component';
import { MapDetailsCoordComponent } from './components/mapDetailsCoord.component';
import { MapPanelCoordComponent } from './components/mapPanelCoord.component';
import {
  MatTabsModule,
  MatFormFieldModule,
  MatSortModule,
  MatRadioModule,
  MatCardModule,
  MatIconModule,
  MatDialogModule,
  MatTableModule,
  MatSliderModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatInputModule,
  MatTooltipModule,
  MatMenuModule,
  MatSelectModule
} from '@angular/material';
// Services
import { MapService } from './services/map.service';
// External modules
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    MainContentComponent,
    MapPanelCloudsComponent,
    MapPanelGeneralComponent,
    MapDetailsCloudsComponent,
    MapDetailsGeneralComponent,
    MapDetailsCoordComponent,
    MapPanelCoordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSortModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    MatInputModule,
    MatTooltipModule,
    MatMenuModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
