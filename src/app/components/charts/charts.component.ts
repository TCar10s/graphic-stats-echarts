import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  stackedData: any;
  stackedOptions: any;

  basicData: any;
  basicOptions: any;

  optionsPrueba: any;

  lineStylesData: any;

  constructor() {}

  ngOnInit(): void {
    this.stackedData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          type: 'bar',
          label: 'Dataset 1',
          backgroundColor: '#42A5F5',
          data: [50, 25, 12, 48, 90, 76, 42],
        },
        {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: '#66BB6A',
          data: [21, 84, 24, 75, 37, 65, 34],
        },
        {
          type: 'bar',
          label: 'Dataset 3',
          backgroundColor: '#FFA726',
          data: [41, 52, 24, 74, 23, 21, 32],
        },
      ],
    };

    this.stackedOptions = {
      plugins: {
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        legend: {
          labels: {
            color: '#495057',
          },
        },
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
        y: {
          stacked: true,
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
      },
    };

    this.basicData = {
      labels: [1, 2, 3, 4, 5, 6],
      datasets: [
        {
          label: 'Predicción',
          backgroundColor: '#42A5F5',
          data: [8000, 2000, 1000, 500, 200, 100],
        },
      ],
    };

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
        y: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
      },
    };

    const dataAll = [
      [
        [10.0, 8.04],
        [8.0, 6.95],
        [13.0, 7.58],
        [9.0, 8.81],
        [11.0, 8.33],
        [14.0, 9.96],
        [6.0, 7.24],
        [4.0, 4.26],
        [12.0, 10.84],
        [7.0, 4.82],
        [5.0, 5.68],
      ],
    ];

    const markLineOpt: echarts.MarkLineComponentOption = {
      animation: false,
      label: {
        formatter: 'y = 0.5 * x + 3',
        align: 'right',
      },
      lineStyle: {
        type: 'solid',
      },
      tooltip: {
        formatter: 'y = 0.5 * x + 3',
      },
      data: [
        [
          {
            coord: [0, 3],
            symbol: 'none',
          },
          {
            coord: [20, 13],
            symbol: 'none',
          },
        ],
      ],
    };

    this.optionsPrueba = {
      title: {
        text: "Anscombe's quartet",
        left: 'center',
        top: 0,
      },
      tooltip: {
        formatter: 'Group {a}: ({c})',
      },
      xAxis: [{ gridIndex: 0, min: 0, max: 20 }],
      yAxis: [{ gridIndex: 0, min: 0, max: 15 }],
      series: [
        {
          name: 'I',
          type: 'scatter',
          xAxisIndex: 0,
          yAxisIndex: 0,
          data: dataAll[0],
          markLine: markLineOpt,
        },
      ],
    };

    this.lineStylesData = {
      labels: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      datasets: [
        {
          label: 'First Dataset',
          data: [0, 0.88, 0.95, 0.96, 0.95, 0.96, 0.97, 0.98, 0.97, 0.99, 1],
          fill: false,
          tension: 0.4,
          borderColor: '#42A5F5',
        },
        {
          label: 'Second Dataset',
          data: [0, 0.79, 0.82, 0.83, 0.85, 0.89, 0.92, 0.94, 0.97, 0.99, 1],
          fill: false,
          borderDash: [5, 5],
          tension: 0.4,
          borderColor: '#66BB6A',
        },
        {
          label: 'Third Dataset',
          data: [0, 0.55, 0.62, 0.69, 0.74, 0.78, 0.82, 0.9, 0.95, 0.99, 1],
          fill: false,
          borderColor: '#FFA726',
          tension: 0.4,
        },
      ],
    };
  }
}
