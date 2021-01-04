import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { HomeService } from './home.service'

@Component({
  templateUrl: 'home.component.html',
  providers: [HomeService],
})
export class HomeComponent implements OnInit {
  data: [any];
  F0: number;
  F1: number;
  F2: number;
  khoeManh: number;
  constructor(private homeService: HomeService) { }

  radioModel: string = 'Month';
  // lineChart0
  public lineChart0Data: Array<any> = [
    {
      data: [],
      label: 'F0'
    }
  ];
  public lineChart0Colours: Array<any> = [
    { // grey
      backgroundColor: getStyle('--danger'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  // lineChart1
  public lineChart1Data: Array<any> = [
    {
      data: [],
      label: 'F1'
    }
  ];
  public lineChart1Colours: Array<any> = [
    { // grey
      backgroundColor: getStyle('--warning'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  // lineChart2
  public lineChart2Data: Array<any> = [
    {
      data: [],
      label: 'F2'
    }
  ];
  public lineChart2Colours: Array<any> = [
    { // grey
      backgroundColor: getStyle('--info'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  // lineChart3
  public lineChart3Data: Array<any> = [
    {
      data: [],
      label: 'Khỏe mạnh'
    }
  ];
  public lineChart3Colours: Array<any> = [
    { // grey
      backgroundColor: getStyle('--success'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart3Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 300,
          max: 1000,
        }
      }],
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  // generalChart
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public lineChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 10,
          max: 100,
        }
      }],
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChartLegend = false;
  public lineChartType = 'line';
  // mainChart

  public mainChartElements = 27;
  public mainChartData1: Array<number> = [];
  public mainChartData2: Array<number> = [];
  public mainChartData3: Array<number> = [];

  public mainChartData: Array<any> = [
    {
      data: this.mainChartData1,
      label: 'Current'
    },
    {
      data: this.mainChartData2,
      label: 'Previous'
    },
    {
      data: this.mainChartData3,
      label: 'BEP'
    }
  ];
  /* tslint:disable:max-line-length */
  public mainChartLabels: Array<any> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  /* tslint:enable:max-line-length */
  public mainChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function(tooltipItem, chart) {
          return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function(value: any) {
            return value.charAt(0);
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public mainChartColours: Array<any> = [
    { // brandInfo
      backgroundColor: hexToRgba(getStyle('--info'), 10),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandSuccess
      backgroundColor: 'transparent',
      borderColor: getStyle('--success'),
      pointHoverBackgroundColor: '#fff'
    },
    { // brandDanger
      backgroundColor: 'transparent',
      borderColor: getStyle('--danger'),
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5]
    }
  ];
  public mainChartLegend = false;
  public mainChartType = 'line';

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  ngOnInit(): void {
    // get data
    this.homeService.GetAll().subscribe(data => {
      this.data = data;
      console.log(this.data);
      this.data.forEach(element => {
        this.lineChart0Data.forEach(e => {
          e.data.push(element.soLuongF0);
          this.F0 = element.soLuongF0;
        });
        this.lineChart1Data.forEach(e => {
          e.data.push(element.soLuongF1);
          this.F1 = element.soLuongF1;
        });
        this.lineChart2Data.forEach(e => {
          e.data.push(element.soLuongF2);
          this.F2 = element.soLuongF2;
        });
        this.lineChart3Data.forEach(e => {
          e.data.push(element.soLuongKhoeManh);
          this.khoeManh = element.soLuongKhoeManh;
        });
      });
    });
    // khoi tao data cho lineChart
    // generate random values for mainChart
    for (let i = 0; i <= this.mainChartElements; i++) {
      this.mainChartData1.push(this.random(50, 200));
      this.mainChartData2.push(this.random(80, 100));
      this.mainChartData3.push(65);
    }
  }
}
