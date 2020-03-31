import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UpdatePersonComponent } from './components/update-person/update-person.component';
import { AddConnectionComponent } from './components/add-connection/add-connection.component';
import { PersonDetailedViewComponent } from './components/person-detailed-view/person-detailed-view.component';
import { PeopleTableComponent } from './components/people-table/people-table.component';
import { MostPredecessorsPersonComponent } from './components/most-predecessors-person/most-predecessors-person.component';
import { PredecessorsViewComponent } from './components/predecessors-view/predecessors-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    UpdatePersonComponent,
    AddConnectionComponent,
    PersonDetailedViewComponent,
    PeopleTableComponent,
    MostPredecessorsPersonComponent,
    PredecessorsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
