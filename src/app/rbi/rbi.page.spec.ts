import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RbiPage } from './rbi.page';

describe('RbiPage', () => {
  let component: RbiPage;
  let fixture: ComponentFixture<RbiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RbiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
