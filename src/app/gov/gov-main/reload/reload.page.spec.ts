import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReloadPage } from './reload.page';

describe('ReloadPage', () => {
  let component: ReloadPage;
  let fixture: ComponentFixture<ReloadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReloadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
