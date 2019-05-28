import {moduleMetadata, storiesOf} from '@storybook/angular';
import {CommonModule} from '@angular/common';
import { boolean, object, number, color, text, array, withKnobs } from '@storybook/addon-knobs';

import {Action} from '@bloomprotocol/share-kit';
import {RequestElementModule} from '../../projects/request-element/src/lib/request-element.module';

const requestData = {
  action: Action.attestation,
  token: 'a08714b92346a1bba4262ed575d23de3ff3e6b5480ad0e1c82c011bab0411fdf',
  url: 'https://receive-kit.bloom.co/api/receive',
  org_logo_url: 'https://bloom.co/images/notif/bloom-logo.png',
  org_name: 'Bloom',
  org_usage_policy_url: 'https://bloom.co/legal/terms',
  org_privacy_policy_url: 'https://bloom.co/legal/privacy',
  types: ['phone', 'email'],
};

const buttonCallbackUrl = 'https://mysite.com/bloom-callback';

const qrOptions = {
  size: 128,
  bgColor: '#fff',
  fgColor: '#6067f1',
  hideLogo: false,
  padding: 0
};

const stories = storiesOf('Request Element', module);

stories.addDecorator(withKnobs);
stories.addDecorator(moduleMetadata({
  declarations: [],
  imports: [CommonModule, RequestElementModule]
}));

stories
  .add('Button', () => ({
    template: `
      <RequestElement
        [requestData]="requestData"
        [buttonCallbackUrl]="buttonCallbackUrl"
        [shouldRenderButton]="shouldRenderButton"
      >
      </RequestElement>
    `,
    props: {
      requestData,
      buttonCallbackUrl,
      shouldRenderButton: () => true
    }
  }))
  .add('QR Code', () => ({
    template: `
      <RequestElement
        [requestData]="requestData"
        [buttonCallbackUrl]="buttonCallbackUrl"
        [qrOptions]="qrOptions"
      >
      </RequestElement>
    `,
    props: {
      requestData: object('Request Data', {
        action: text('Action', requestData.action),
        token: text('Token', requestData.token),
        url: text('URL', requestData.url),
        org_logo_url: text('Org Logo URL', requestData.org_logo_url),
        org_name: text('Org Name', requestData.org_name),
        org_usage_policy_url: text('Org Usage Policy URL', requestData.org_usage_policy_url),
        org_privacy_policy_url: text('Org Privacy Policy URL', requestData.org_privacy_policy_url),
        types: array('Types', requestData.types)
      }),
      buttonCallbackUrl: text('Button Callback URL', buttonCallbackUrl),
      qrOptions: object('QR Options', {
        size: number('Size', qrOptions.size),
        bgColor: color('BG Color', qrOptions.bgColor),
        fgColor: color('FG Color', qrOptions.fgColor),
        hideLogo: boolean('Hide Logo', qrOptions.hideLogo),
        padding: number('Padding', qrOptions.padding)
      })
    }
  }))
  .add('Updating', () => ({
    template: `
      <RequestElement [requestData]="getData()" [buttonCallbackUrl]="buttonCallbackUrl"></RequestElement>
      <p>Counter: {{counter}}</p>
      <button (click)="handleUpdate()">Update RequestQRCode</button>
    `,
    props: {
      buttonCallbackUrl,
      counter: 1,
      getData() {
        return requestData;
      },
      handleUpdate() { this.counter = this.counter + 1; }
    }
  }))
;
