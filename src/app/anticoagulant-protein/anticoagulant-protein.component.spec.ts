import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnticoagulantProteinComponent } from './anticoagulant-protein.component';

describe('AnticoagulantProteinComponent', () => {
  let component: AnticoagulantProteinComponent;
  let fixture: ComponentFixture<AnticoagulantProteinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnticoagulantProteinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnticoagulantProteinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
