import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UplodePage } from './uplode.page';

describe('UplodePage', () => {
  let component: UplodePage;
  let fixture: ComponentFixture<UplodePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UplodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
