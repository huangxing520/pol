import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { LoginComponent } from './login/login.component';
import { WebsiteAnalysisComponent } from './website-analysis/website-analysis.component';
import { FileComponent } from './file/file.component';
import {FilePondModule,registerPlugin} from "ngx-filepond";
import { DxFileManagerModule } from 'devextreme-angular';
// @ts-ignore
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import { GraphicTableComponent } from './graphic-table/graphic-table.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {LayoutModule} from "../layout/layout.module";
registerPlugin(FilePondPluginFileValidateType);

@NgModule({
  declarations: [
    LoginComponent,
    WebsiteAnalysisComponent,
    FileComponent,
    GraphicTableComponent,
    WelcomeComponent
  ],
    imports: [
        CommonModule,
        RoutesRoutingModule,
        FilePondModule,
      DxFileManagerModule,
      LayoutModule,
    ]
})
export class RoutesModule { }
