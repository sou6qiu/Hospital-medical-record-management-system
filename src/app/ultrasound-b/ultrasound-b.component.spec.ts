import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltrasoundBComponent } from './ultrasound-b.component';

describe('UltrasoundBComponent', () => {
  let component: UltrasoundBComponent;
  let fixture: ComponentFixture<UltrasoundBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltrasoundBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltrasoundBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
