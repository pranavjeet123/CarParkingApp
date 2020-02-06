import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarlistingComponent } from './carlisting.component';

describe('CarlistingComponent', () => {
  let component: CarlistingComponent;
  let fixture: ComponentFixture<CarlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
