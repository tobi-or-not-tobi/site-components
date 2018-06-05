import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventComponentsComponent } from './event-components.component';

describe('EventComponentsComponent', () => {
  let component: EventComponentsComponent;
  let fixture: ComponentFixture<EventComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
