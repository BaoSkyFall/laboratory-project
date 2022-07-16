/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SelectTransportCenterService } from './select-transport-center.service';

describe('Service: SelectTransportCenter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectTransportCenterService]
    });
  });

  it('should ...', inject([SelectTransportCenterService], (service: SelectTransportCenterService) => {
    expect(service).toBeTruthy();
  }));
});
