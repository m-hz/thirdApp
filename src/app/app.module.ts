import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { AwayComponent } from './away/away.component';
import { HomeComponent } from './home/home.component';

import { BrandService } from './brand.service';

@NgModule({
  declarations: [
    AppComponent,
    AwayComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutes
  ],
  providers: [BrandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
