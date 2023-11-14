import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CitizenOtpPage } from './citizen-otp.page';

describe('CitizenOtpPage', () => {
  let component: CitizenOtpPage;
  let fixture: ComponentFixture<CitizenOtpPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CitizenOtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
