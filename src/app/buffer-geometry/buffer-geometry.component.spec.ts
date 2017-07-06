import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferGeometryComponent } from './buffer-geometry.component';

describe('BufferGeometryComponent', () => {
  let component: BufferGeometryComponent;
  let fixture: ComponentFixture<BufferGeometryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BufferGeometryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BufferGeometryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
