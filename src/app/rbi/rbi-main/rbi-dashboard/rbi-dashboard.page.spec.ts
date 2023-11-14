import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RbiDashboardPage } from './rbi-dashboard.page';

describe('RbiDashboardPage', () => {
  let component: RbiDashboardPage;
  let fixture: ComponentFixture<RbiDashboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RbiDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
