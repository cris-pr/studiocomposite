import { TestBed } from '@angular/core/testing';

import { ProjectService } from './project-service.service';

describe('UserServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectService = TestBed.get(ProjectService);
    expect(service).toBeTruthy();
  });
});
