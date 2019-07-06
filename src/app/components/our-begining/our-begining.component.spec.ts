import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBeginingComponent } from './our-begining.component';

describe('OurBeginingComponent', () => {
  let component: OurBeginingComponent;
  let fixture: ComponentFixture<OurBeginingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurBeginingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBeginingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
