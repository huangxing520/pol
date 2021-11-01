import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { CopyToSaveComponent } from './copy-to-save/copy-to-save.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzAvatarModule} from "ng-zorro-antd/avatar";


@NgModule({
  declarations: [
    CopyToSaveComponent
  ],
  exports: [
    CopyToSaveComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NzButtonModule,
    NzIconModule,
    NzCardModule,
    NzAvatarModule
  ]
})
export class LayoutModule { }
