import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CitizenDashboardPage } from './citizen-dashboard.page';

describe('CitizenDashboardPage', () => {
  let component: CitizenDashboardPage;
  let fixture: ComponentFixture<CitizenDashboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CitizenDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
