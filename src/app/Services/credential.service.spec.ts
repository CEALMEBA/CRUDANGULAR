import { TestBed } from '@angular/core/testing';

import { CredentialService } from './Credential.service';

describe('CredentialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CredentialService = TestBed.get(CredentialService);
    expect(service).toBeTruthy();
  });
});