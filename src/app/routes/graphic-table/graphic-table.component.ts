import { Component, OnInit } from '@angular/core';
import {Scene, LineLayer, PointLayer} from '@antv/l7';
import {GaodeMap, Mapbox} from '@antv/l7-maps';
import {graphic_table_geojson_url} from "../../../assets/configuration";
@Component({
  selector: 'app-graphic-table',
  templateUrl: './graphic-table.component.html',
  styleUrls: ['./graphic-table.component.css'],

})
export class GraphicTableComponent implements OnInit {


  constructor() {
  }
  title = "CodeSandbox";
    ngOnInit()
    {
      const scene = new Scene({
        id: "map",
        map: new GaodeMap({
          pitch: 10,
          style: 'amap://styles/4b7b416ea57bea66645c5f6035e610cb',
          center: [120.15, 35],
          zoom: 4.5,
          token: 'cda527ee4c2690cda3035d5135136e98',
        })
      });
      fetch(graphic_table_geojson_url)
        .then(res => res.text())
        .then(data => {
          console.log(data)
          const pointLayer = new LineLayer({})
            .source(data, {
              parser: {
                type: 'csv',
                x: 'lng1',
                y: 'lat1',
                x1: 'lng2',
                y1: 'lat2'
              }
            })
            .shape('arc3d')
            .active(true)
            .animate( {enable: true,
            interval: 0.1,
            trailLength: 0.5,
            duration: 2})
            .size([2,5])
            .color("#FF7C6A")
            .style({
              opacity: 2,
              sourceColor: '#00FFFF',  // 起点颜色
              targetColor: '#F00'   // 终点颜色
            });

          scene.addLayer(pointLayer);
        });
    }


}
