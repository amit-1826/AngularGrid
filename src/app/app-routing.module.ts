import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GridComponent } from "./components/grid/grid.component";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DirectiveComponent } from "./components/directive/directive.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "grid",
    component: GridComponent
  },
  {
    path: "home",
    component: DashboardComponent
  },
  {
    path: "directive",
    component: DirectiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
