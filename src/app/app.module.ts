import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GridComponent } from "./components/grid/grid.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AgGridModule } from "ag-grid-angular";
import { DirectiveComponent } from "./components/directive/directive.component";
import { AppblackDirective } from "./directives/appblack.directive";
import { AppfocusDirective } from './directives/appfocus.directive';
import {HttpClientModule} from '@angular/common/http';
import {SharedService} from './services/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    DashboardComponent,
    DirectiveComponent,
    AppblackDirective,
    AppfocusDirective
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AgGridModule.withComponents([])],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {}
