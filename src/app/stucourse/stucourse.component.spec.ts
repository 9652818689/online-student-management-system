import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StucourseComponent } from './stucourse.component';

describe('StucourseComponent', () => {
  let component: StucourseComponent;
  let fixture: ComponentFixture<StucourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StucourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StucourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
