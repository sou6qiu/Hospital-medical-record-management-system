import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgongComponent } from './agong.component';

describe('AgongComponent', () => {
  let component: AgongComponent;
  let fixture: ComponentFixture<AgongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
