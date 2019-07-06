import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerBelowHeaderComponent } from './layer-below-header.component';

describe('LayerBelowHeaderComponent', () => {
  let component: LayerBelowHeaderComponent;
  let fixture: ComponentFixture<LayerBelowHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerBelowHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerBelowHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
