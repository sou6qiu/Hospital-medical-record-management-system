import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThromboelastogramComponent } from './thromboelastogram.component';

describe('ThromboelastogramComponent', () => {
  let component: ThromboelastogramComponent;
  let fixture: ComponentFixture<ThromboelastogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThromboelastogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThromboelastogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
