import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RbiMainPage } from './rbi-main.page';

describe('RbiMainPage', () => {
  let component: RbiMainPage;
  let fixture: ComponentFixture<RbiMainPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RbiMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
