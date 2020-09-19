import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarvelousHeaderComponent } from './marvelous-header/marvelous-header.component';
import {HttpClientModule} from '@angular/common/http';
import { ComicsBoxComponent } from './comics-box/comics-box.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComicModalComponent } from './comic-modal/comic-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvelousHeaderComponent,
    ComicsBoxComponent,
    ComicModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
