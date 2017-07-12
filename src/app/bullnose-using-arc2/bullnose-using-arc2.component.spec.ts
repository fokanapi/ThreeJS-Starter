import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BullnoseUsingArc2Component } from './bullnose-using-arc2.component';

describe('BullnoseUsingArc2Component', () => {
  let component: BullnoseUsingArc2Component;
  let fixture: ComponentFixture<BullnoseUsingArc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BullnoseUsingArc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BullnoseUsingArc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
