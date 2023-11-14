import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citizen-dashboard',
  templateUrl: './citizen-dashboard.page.html',
  styleUrls: ['./citizen-dashboard.page.scss'],
})
export class CitizenDashboardPage implements OnInit {
  transaction: any=[
    {
      from: "Amount paid for house tax",
      desc:"flood",
      to:"Gov-tax",
      type:"cr",
      value:"232",
      status: "D"
    },
    {
      from: "Amount paid for TDS",
      desc:"flood",
      to:"Gov-tax",
      type:"dr",
      value:"232",
      status: "D"
    },
    {
      from: "Amount paid for Water tax",
      desc:"flood",
      to:"Gov-tax",
      type:"cr",
      value:"232",
      status: "D"
    },
    {
      from: "Amount paid for house tax",
      desc:"flood",
      to:"Gov-tax",
      type:"dr",
      value:"232",
      status: "D"
    },
    {
      from: "Amount paid for TDS",
      desc:"flood",
      to:"Gov-tax",
      type:"cr",
      value:"232",
      status: "D"
    },
    {
      from: "Amount paid for Water tax",
      desc:"flood",
      to:"Gov-tax",
      type:"dr",
      value:"232",
      status: "D"
    },
    {
      from: "Amount paid for house tax",
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
