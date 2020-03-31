import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredecessorsViewComponent } from './predecessors-view.component';

describe('PredecessorsViewComponent', () => {
  let component: PredecessorsViewComponent;
  let fixture: ComponentFixture<PredecessorsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredecessorsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredecessorsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
