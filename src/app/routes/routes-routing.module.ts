import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {WebsiteAnalysisComponent} from "./website-analysis/website-analysis.component";
import {FileComponent} from "./file/file.component";
import {GraphicTableComponent} from "./graphic-table/graphic-table.component";
import {WelcomeComponent} from "./welcome/welcome.component";

const routes: Routes = [
  {path:'',component:WebsiteAnalysisComponent,pathMatch:'full'},
  {path:'file',component:FileComponent},
  {path:'graphic-table',component:GraphicTableComponent},
  {path:'welcome',component:WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
