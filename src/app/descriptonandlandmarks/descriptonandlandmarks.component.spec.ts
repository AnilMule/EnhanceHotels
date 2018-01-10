import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptonandlandmarksComponent } from './descriptonandlandmarks.component';

describe('DescriptonandlandmarksComponent', () => {
  let component: DescriptonandlandmarksComponent;
  let fixture: ComponentFixture<DescriptonandlandmarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptonandlandmarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptonandlandmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
