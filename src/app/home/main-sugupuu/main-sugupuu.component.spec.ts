import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSugupuuComponent } from './main-sugupuu.component';

describe('MainSugupuuComponent', () => {
  let component: MainSugupuuComponent;
  let fixture: ComponentFixture<MainSugupuuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSugupuuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSugupuuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
