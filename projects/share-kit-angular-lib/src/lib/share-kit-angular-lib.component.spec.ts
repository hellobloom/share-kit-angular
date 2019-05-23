import { async } from '@angular/core/testing';
import * as shareKit from '@bloomprotocol/share-kit';
import { ShareKitAngularLibComponent } from './share-kit-angular-lib.component';
import {Action, QROptions, RequestData} from '@bloomprotocol/share-kit';

import {Shallow} from 'shallow-render';
import {ShareKitAngularLibModule} from './share-kit-angular-lib.module';
const requestData: RequestData = {
  action: Action.attestation,
  token: 'a08714b92346a1bba4262ed575d23de3ff3e6b5480ad0e1c82c011bab0411fdf',
  url: 'https://receive-kit.bloom.co/api/receive',
  org_logo_url: 'https://bloom.co/images/notif/bloom-logo.png',
  org_name: 'Bloom',
  org_usage_policy_url: 'https://bloom.co/legal/terms',
  org_privacy_policy_url: 'https://bloom.co/legal/privacy',
  types: ['phone', 'email']
};
const qrOptions: Partial<QROptions> = {size: 300};
const buttonCallbackUrl = 'https://mysite.com/bloom-callback';

describe('RequestElement', () => {
  let shallow: Shallow<ShareKitAngularLibComponent>;

  beforeEach(async(() => {
    shallow = new Shallow(ShareKitAngularLibComponent, ShareKitAngularLibModule);
  }));

  it('calls renderRequestElement with correct params', async () => {
    const shareKitSpy = spyOn(shareKit, 'renderRequestElement');
    await shallow.render({
      bind: {
        requestData,
        buttonCallbackUrl,
        qrOptions,
        shouldRenderButton: () => true
      }
    });
    await expect(shareKitSpy).toHaveBeenCalledWith(
      jasmine.objectContaining({
        container: jasmine.any(HTMLElement),
        requestData: jasmine.objectContaining(requestData),
        qrOptions: jasmine.objectContaining(qrOptions),
        shouldRenderButton: jasmine.any(Function)
      })
    );
  });
});
