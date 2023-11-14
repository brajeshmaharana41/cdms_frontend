import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CitizenReloadPage } from './citizen-reload.page';

describe('CitizenReloadPage', () => {
  let component: CitizenReloadPage;
  let fixture: ComponentFixture<CitizenReloadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CitizenReloadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
