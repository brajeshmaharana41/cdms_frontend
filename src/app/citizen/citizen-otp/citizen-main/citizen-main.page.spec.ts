import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CitizenMainPage } from './citizen-main.page';

describe('CitizenMainPage', () => {
  let component: CitizenMainPage;
  let fixture: ComponentFixture<CitizenMainPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CitizenMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
