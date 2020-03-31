import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailedViewComponent } from './person-detailed-view.component';

describe('PersonDetailedViewComponent', () => {
  let component: PersonDetailedViewComponent;
  let fixture: ComponentFixture<PersonDetailedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonDetailedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
