import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PregancyComponent } from './pregancy.component';

describe('PregancyComponent', () => {
  let component: PregancyComponent;
  let fixture: ComponentFixture<PregancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PregancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
