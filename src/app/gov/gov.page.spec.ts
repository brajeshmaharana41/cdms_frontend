import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovPage } from './gov.page';

describe('GovPage', () => {
  let component: GovPage;
  let fixture: ComponentFixture<GovPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GovPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
