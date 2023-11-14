import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CitizenPaymentPage } from './citizen-payment.page';

describe('CitizenPaymentPage', () => {
  let component: CitizenPaymentPage;
  let fixture: ComponentFixture<CitizenPaymentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CitizenPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
