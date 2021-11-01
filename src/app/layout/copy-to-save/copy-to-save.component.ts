import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzIconService,NzIconDirective} from "ng-zorro-antd/icon";

@Component({
  selector: 'app-copy-to-save',
  templateUrl: './copy-to-save.component.html',
  styleUrls: ['./copy-to-save.component.css']
})
export class CopyToSaveComponent implements OnInit {
icon='<svg t="1634406532376" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2869" width="200" height="200"><path d="M796.531344 572.304719a227.653512 227.653512 0 0 0-197.877968 114.665703l-235.531091-144.697197a185.421724 185.421724 0 0 0 15.897353-75.306246c0-25.93629-5.261199-50.621268-14.901991-73.031133l236.07143-127.633849a156.982809 156.982809 0 0 0 111.253034 45.84353c86.653373 0 157.096565-69.95973 157.096565-155.987447C868.538676 70.158802 798.095484 0.199072 711.442111 0.199072S554.288669 70.158802 554.288669 156.15808c0 12.57 1.56414 24.684978 4.265837 36.401811l-245.058128 132.411587a189.403172 189.403172 0 0 0-123.993667-45.985725C85.103455 278.985753 0.014222 363.364013 0.014222 467.109173c0 103.802038 84.947038 187.981226 189.516927 187.981226 46.582942 0 89.468826-16.77896 122.429528-44.705974l258.822562 159.087289c-1.137557 9.44172-1.820091 19.025634-1.82009 28.751743 0 124.534007 101.981948 225.776543 227.426 225.776543C921.804763 1024 1023.81515 922.757464 1023.81515 798.223457c0.142195-124.505568-101.868192-225.918738-227.283806-225.918738z" p-id="2870" fill="#f4ea2a"></path></svg>'
  size: NzButtonSize='large';
showtext=false
  text: string | undefined
  constructor(private iconService: NzIconService) {     this.iconService.addIconLiteral('icons:share', this.icon);
  }
  handle_drop(e:any){
console.log(this.showtext)
    const data = e.dataTransfer.getData("text/plain");
  this.text=data;
  this.showtext=true
    console.log(this.showtext,data)
  }
send(){

}
  ngOnInit(): void {
    const target = document.getElementById('target')
    target!.ondrop=(e)=>this.handle_drop(e)
  }

}
