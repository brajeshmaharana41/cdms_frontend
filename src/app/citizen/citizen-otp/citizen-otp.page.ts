import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citizen-otp',
  templateUrl: './citizen-otp.page.html',
  styleUrls: ['./citizen-otp.page.scss'],
})
export class CitizenOtpPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  next(el: any) {
    el.setFocus();
  }
}
