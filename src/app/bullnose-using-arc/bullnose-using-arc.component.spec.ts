import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BullnoseUsingArcComponent } from './bullnose-using-arc.component';

describe('BullnoseUsingArcComponent', () => {
  let component: BullnoseUsingArcComponent;
  let fixture: ComponentFixture<BullnoseUsingArcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BullnoseUsingArcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BullnoseUsingArcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
