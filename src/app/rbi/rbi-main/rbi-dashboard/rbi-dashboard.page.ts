import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rbi-dashboard',
  templateUrl: './rbi-dashboard.page.html',
  styleUrls: ['./rbi-dashboard.page.scss'],
})
export class RbiDashboardPage implements OnInit {
  transaction: any=[
    {
      from: "Suresh",
      desc:"Commission",
      to:"Gov-tax",
      type:"cr",
      value:"232",
      status: "D"
    },
    {
      from: "Rohit",
      desc:"Commission",
      to:"Gov-tax",
      type:"dr",
      value:"232",
      status: "D"
    },
    {
      from: "Ajayya",
      desc:"Commission",
      to:"Gov-tax",
      type:"cr",
      value:"232",
      status: "D"
    },
    {
      from: "Shiva",
      desc:"Commission",
      to:"Gov-tax",
      type:"dr",
      value:"232",
      status: "D"
    },
    {
      from: "Anirudh",
      desc:"Commission",
      to:"Gov-tax",
      type:"cr",
      value:"232",
      status: "D"
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
