import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovMainPage } from './gov-main.page';

describe('GovMainPage', () => {
  let component: GovMainPage;
  let fixture: ComponentFixture<GovMainPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GovMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
