import {async} from '@angular/core/testing'
import {Shallow} from 'shallow-render'
import {RequestElementComponent} from './request-element.component'
import {RequestElementModule} from './request-element.module'
import * as shareKit from '@bloomprotocol/share-kit'
import {Action, QROptions, ButtonOptions, RequestData} from '@bloomprotocol/share-kit'

const requestData: RequestData = {
  action: Action.attestation,
  token: 'a08714b92346a1bba4262ed575d23de3ff3e6b5480ad0e1c82c011bab0411fdf',
  url: 'https://receive-kit.bloom.co/api/receive',
  org_logo_url: 'https://bloom.co/images/notif/bloom-logo.png',
  org_name: 'Bloom',
  org_usage_policy_url: 'https://bloom.co/legal/terms',
  org_privacy_policy_url: 'https://bloom.co/legal/privacy',
  types: ['phone', 'email'],
}
const qrOptions: Partial<QROptions> = {size: 300}
const buttonOptions: ButtonOptions = {
  callbackUrl: 'https://mysite.com/bloom-callback',
}

describe('RequestElementComponent', () => {
  let shallow: Shallow<RequestElementComponent>

  beforeEach(async(() => {
    shallow = new Shallow(RequestElementComponent, RequestElementModule)
  }))

  it('calls renderRequestElement with correct params', async () => {
    const shareKitSpy = spyOn(shareKit, 'renderRequestElement')
    await shallow.render({
      bind: {
        requestData,
        buttonOptions,
        qrOptions,
        shouldRenderButton: () => true,
      },
    })
    await expect(shareKitSpy).toHaveBeenCalledWith(
      jasmine.objectContaining({
        container: jasmine.any(HTMLElement),
        requestData: jasmine.objectContaining(requestData),
        qrOptions: jasmine.objectContaining(qrOptions),
        shouldRenderButton: jasmine.any(Function),
      }),
    )
  })
})
