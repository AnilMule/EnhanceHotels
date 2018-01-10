import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsandfacilitiesComponent } from './unitsandfacilities.component';

describe('UnitsandfacilitiesComponent', () => {
  let component: UnitsandfacilitiesComponent;
  let fixture: ComponentFixture<UnitsandfacilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitsandfacilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitsandfacilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
