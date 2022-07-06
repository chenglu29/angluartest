import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcompComponent } from './firstcomp/firstcomp.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Page2Component } from './page2/page2.component';
import { RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstcompComponent,
    HeaderComponent,
    ButtonComponent,
    Page2Component,
    Page1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {path: 'page1', component: Page1Component},
      {path: 'page2', component: Page2Component},
  

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
