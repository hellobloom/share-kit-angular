import {moduleMetadata, storiesOf} from '@storybook/angular'
import {CommonModule} from '@angular/common'
import {boolean, object, number, color, text, array, withKnobs} from '@storybook/addon-knobs'

import {Action, ButtonOptions} from '@bloomprotocol/share-kit'
import {RequestElementModule} from '../../projects/request-element/src/lib/request-element.module'

const requestData = {
  action: Action.attestation,
  token: 'a08714b92346a1bba4262ed575d23de3ff3e6b5480ad0e1c82c011bab0411fdf',
  url: 'https://receive-kit.bloom.co/api/receive',
  org_logo_url: 'https://bloom.co/images/notif/bloom-logo.png',
  org_name: 'Bloom',
  org_usage_policy_url: 'https://bloom.co/legal/terms',
  org_privacy_policy_url: 'https://bloom.co/legal/privacy',
  types: ['phone', 'email'],
}

const buttonOptions: ButtonOptions = {
  callbackUrl: 'https://mysite.com/bloom-callback',
}

const qrOptions = {
  size: 128,
  bgColor: '#fff',
  fgColor: '#6067f1',
  hideLogo: false,
  padding: 0,
}

const stories = storiesOf('Request Element', module)

stories.addDecorator(withKnobs)
stories.addDecorator(
  moduleMetadata({
    declarations: [],
    imports: [CommonModule, RequestElementModule],
  }),
)

stories
  .add('Button', () => ({
    template: `
      <RequestElement
        [requestData]="requestData"
        [buttonOptions]="buttonOptions"
        [shouldRenderButton]="shouldRenderButton"
      >
      </RequestElement>
    `,
    props: {
      requestData: {
        ...{
          action: text('action', requestData.action),
          token: text('token', requestData.token),
          url: text('url', requestData.url),
          org_logo_url: text('org_logo_url', requestData.org_logo_url),
          org_name: text('org_name', requestData.org_name),
          org_usage_policy_url: text('org_usage_policy_url', requestData.org_usage_policy_url),
          org_privacy_policy_url: text('org_privacy_policy_url', requestData.org_privacy_policy_url),
          types: array('types', requestData.types),
        },
      },
      buttonOptions: {
        ...buttonOptions,
      },
      shouldRenderButton: () => true,
    },
  }))
  .add('QR Code', () => ({
    template: `
      <RequestElement
        [requestData]="requestData"
        [buttonOptions]="buttonOptions"
        [qrOptions]="qrOptions"
      >
      </RequestElement>
    `,
    props: {
      requestData: {
        ...{
          action: text('action', requestData.action),
          token: text('token', requestData.token),
          url: text('url', requestData.url),
          org_logo_url: text('org_logo_url', requestData.org_logo_url),
          org_name: text('org_name', requestData.org_name),
          org_usage_policy_url: text('org_usage_policy_url', requestData.org_usage_policy_url),
          org_privacy_policy_url: text('org_privacy_policy_url', requestData.org_privacy_policy_url),
          types: array('types', requestData.types),
        },
      },
      buttonOptions: {...buttonOptions},
      qrOptions: {
        ...{
          size: number('size', qrOptions.size),
          bgColor: color('bgColor', qrOptions.bgColor),
          fgColor: color('fgColor', qrOptions.fgColor),
          hideLogo: boolean('hideLogo', qrOptions.hideLogo),
          padding: number('padding', qrOptions.padding),
        },
      },
    },
  }))
