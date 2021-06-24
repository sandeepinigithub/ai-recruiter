import { Component, ViewChild, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexTitleSubtitle,
  ApexYAxis,
  ApexTooltip,
  ApexFill,
  ApexLegend
} from "ng-apexcharts";
import { isConstructorDeclaration } from 'typescript';

export type ChartOptions = {
  series: any;
  chart: any;
  dataLabels: any;
  plotOptions: any;
  xaxis: any;
  yaxis: any;
  stroke: any;
  title: any;
  tooltip: any;
  fill: any;
  legend: any;
};

@Component({
  selector: 'app-visualize',
  templateUrl: './visualize.component.html',
  styleUrls: ['./visualize.component.css']
})
export class VisualizeComponent implements OnInit {

  visualizeData: any;
  tempData: any;

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.tempData = sessionStorage.getItem('visualizeData');
    this.visualizeData = JSON.parse(this.tempData).data;
    console.log(this.visualizeData.series[0].name);

    //data
    this.chartOptions = {
      series: [
        {
          name: this.visualizeData.series[0].name,
          data: this.visualizeData.series[0].data
        },
        {
          name: this.visualizeData.series[1].name,
          data: this.visualizeData.series[1].data
        },
        {
          name: this.visualizeData.series[2].name,
          data: this.visualizeData.series[2].data
        },
        {
          name: this.visualizeData.series[3].name,
          data: this.visualizeData.series[3].data
        },
        {
          name: this.visualizeData.series[4].name,
          data: this.visualizeData.series[4].data
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      title: {
        text: "Visualization Of Candidates"
      },
      xaxis: {
        categories: removeDuplicates(this.visualizeData.candidates_list),
        labels: {
          formatter: function (val: any) {
            return val ;
          }
        }
      },
      yaxis: {
        title: {
          text: undefined
        }
      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return val + "K";
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40
      }
    };

  }

  ngOnInit(): void {
    // console.log(this.visualizeData);

  } 

}

function removeDuplicates(data:any){
  return data.filter((value:any,index:any) => data.indexOf(value) === index);  
}


