import { TestBed } from '@angular/core/testing';

import { SchoolServiceService } from '../../share/school-service/school-service.service';

describe('SchoolServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SchoolServiceService = TestBed.get(SchoolServiceService);
    expect(service).toBeTruthy();
  });
});
