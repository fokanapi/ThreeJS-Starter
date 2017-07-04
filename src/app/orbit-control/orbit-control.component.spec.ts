import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbitControlComponent } from './orbit-control.component';

describe('OrbitControlComponent', () => {
  let component: OrbitControlComponent;
  let fixture: ComponentFixture<OrbitControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbitControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbitControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
