import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPredecessorsPersonComponent } from './most-predecessors-person.component';

describe('MostPredecessorsPersonComponent', () => {
  let component: MostPredecessorsPersonComponent;
  let fixture: ComponentFixture<MostPredecessorsPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostPredecessorsPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostPredecessorsPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
