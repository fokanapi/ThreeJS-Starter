import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SphereComponent } from './sphere.component';

describe('SphereComponent', () => {
  let component: SphereComponent;
  let fixture: ComponentFixture<SphereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SphereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SphereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
