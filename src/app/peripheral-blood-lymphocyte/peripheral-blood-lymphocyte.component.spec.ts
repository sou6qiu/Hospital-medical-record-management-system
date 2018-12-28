import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeripheralBloodLymphocyteComponent } from './peripheral-blood-lymphocyte.component';

describe('PeripheralBloodLymphocyteComponent', () => {
  let component: PeripheralBloodLymphocyteComponent;
  let fixture: ComponentFixture<PeripheralBloodLymphocyteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeripheralBloodLymphocyteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeripheralBloodLymphocyteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
