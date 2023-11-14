import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CitizenPage } from './citizen.page';

describe('CitizenPage', () => {
  let component: CitizenPage;
  let fixture: ComponentFixture<CitizenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CitizenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
