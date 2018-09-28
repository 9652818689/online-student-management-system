import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudetComponent } from './studet.component';

describe('StudetComponent', () => {
  let component: StudetComponent;
  let fixture: ComponentFixture<StudetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
