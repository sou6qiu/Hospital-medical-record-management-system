import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SexHormoneComponent } from './sex-hormone.component';

describe('SexHormoneComponent', () => {
  let component: SexHormoneComponent;
  let fixture: ComponentFixture<SexHormoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SexHormoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SexHormoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
