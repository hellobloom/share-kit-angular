import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import {RequestElementComponent} from '../../projects/request-element/src/lib/request-element.component';
import {Action} from '@bloomprotocol/share-kit';

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

storiesOf('Request Element', module)
  .add('Base', () => ({
    component: RequestElementComponent,
    props: {
      requestData,
      buttonCallbackUrl
    }
  }))
  .add('Colors', () => ({
    component: RequestElementComponent,
    props: {
      requestData,
      buttonCallbackUrl,
      qrOptions: {bgColor: '#EBF0F1', fgColor: '#3C3C3D'}
    }
  }))
  .add('Size', () => ({
    component: RequestElementComponent,
    props: {
      requestData,
      buttonCallbackUrl,
      qrOptions: {size: 300}
    }
  }))
  .add('Without Logo', () => ({
    component: RequestElementComponent,
    props: {
      requestData,
      buttonCallbackUrl,
      qrOptions: {hideLogo: true}
    }
  }))
  .add('Button', () => ({
    component: RequestElementComponent,
    props: {
      requestData,
      buttonCallbackUrl,
      shouldRenderButton: () => true
    }
  }))
;

