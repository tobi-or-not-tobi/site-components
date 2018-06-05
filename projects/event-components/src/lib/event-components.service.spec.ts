import { TestBed, inject } from '@angular/core/testing';

import { EventComponentsService } from './event-components.service';

describe('EventComponentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventComponentsService]
    });
  });

  it('should be created', inject([EventComponentsService], (service: EventComponentsService) => {
    expect(service).toBeTruthy();
  }));
});
