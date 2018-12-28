import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeripheralBloodCytokinesComponent } from './peripheral-blood-cytokines.component';

describe('PeripheralBloodCytokinesComponent', () => {
  let component: PeripheralBloodCytokinesComponent;
  let fixture: ComponentFixture<PeripheralBloodCytokinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeripheralBloodCytokinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeripheralBloodCytokinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
