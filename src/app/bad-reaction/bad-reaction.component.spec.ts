import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadReactionComponent } from './bad-reaction.component';

describe('BadReactionComponent', () => {
  let component: BadReactionComponent;
  let fixture: ComponentFixture<BadReactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadReactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadReactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
