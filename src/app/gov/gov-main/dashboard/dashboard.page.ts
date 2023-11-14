import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  transaction: any=[
    {
      from: "Suresh",
      desc:"flood",
      to:"Gov-tax",
      type:"cr",
      value:"232",
      status: "D"
    },
    {
      from: "Suresh",
      desc:"flood",
      to:"Gov-tax",
      type:"dr",
      value:"232",
      status: "D"
    },
    {
      from: "Suresh",
      desc:"flood",
      to:"Gov-tax",
      type:"cr",
      value:"232",
      status: "D"
    },
    {
      from: "Suresh",
      desc:"flood",
      to:"Gov-tax",
      type:"dr",
      value:"232",
      status: "D"
    },
    {
      from: "Suresh",
      desc:"flood",
      to:"Gov-tax",
      type:"cr",
      value:"232",
      status: "D"
    },
    {
      from: "Suresh",
      desc:"flood",
      to:"Gov-tax",
      type:"dr",
      value:"232",
      status: "D"
    },
    {
      from: "Suresh",
      desc:"flood",
      to:"Gov-tax",
      type:"dr",
      value:"232",
      status: "D"
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
