import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterResultComponent } from './enter-result.component';

describe('EnterResultComponent', () => {
  let component: EnterResultComponent;
  let fixture: ComponentFixture<EnterResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
