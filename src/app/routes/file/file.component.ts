import {Component, ViewChild} from '@angular/core';
import {FilePondOptions} from "filepond";
import {FilePondComponent} from "ngx-filepond/filepond.component";
import CustomFileSystemProvider from 'devextreme/file_management/custom_provider';
import {HttpClient} from "@angular/common/http";
import { Service, FileItem } from './file.service';
import RemoteFileSystemProvider from 'devextreme/file_management/remote_provider';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css'],
  providers: [Service],
})
export class FileComponent{
  allowedFileExtensions: string[];
  remoteProvider: RemoteFileSystemProvider;
  path=true
  constructor() {
    this.allowedFileExtensions = [".js", ".json", ".css"];
    this.remoteProvider = new RemoteFileSystemProvider({
      endpointUrl: "https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-scripts"
    });
  }
}



