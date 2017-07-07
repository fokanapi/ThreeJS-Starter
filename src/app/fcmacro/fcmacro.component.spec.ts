import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcmacroComponent } from './fcmacro.component';

describe('FcmacroComponent', () => {
  let component: FcmacroComponent;
  let fixture: ComponentFixture<FcmacroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcmacroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcmacroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
