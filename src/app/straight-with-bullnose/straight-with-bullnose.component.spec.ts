import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StraightWithBullnoseComponent } from './straight-with-bullnose.component';

describe('StraightWithBullnoseComponent', () => {
  let component: StraightWithBullnoseComponent;
  let fixture: ComponentFixture<StraightWithBullnoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StraightWithBullnoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StraightWithBullnoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
