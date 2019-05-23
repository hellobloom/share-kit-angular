import { TestBed } from '@angular/core/testing';

import { ShareKitAngularLibService } from './share-kit-angular-lib.service';

describe('ShareKitAngularLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShareKitAngularLibService = TestBed.get(ShareKitAngularLibService);
    expect(service).toBeTruthy();
  });
});
