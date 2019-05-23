import { Component } from '@angular/core';
import {Action} from "@bloomprotocol/share-kit";

@Component({
  selector: 'app-root',
  template: `
  <RequestElement
    [requestData]="requestData"
    [buttonCallbackUrl]="buttonCallbackUrl"
  ></RequestElement>
  `,
  styles: []
})
export class AppComponent {
  requestData = {
    action: Action.attestation,
    token: 'a08714b92346a1bba4262ed575d23de3ff3e6b5480ad0e1c82c011bab0411fdf',
    url: 'https://receive-kit.bloom.co/api/receive',
    org_logo_url: 'https://bloom.co/images/notif/bloom-logo.png',
    org_name: 'Bloom',
    org_usage_policy_url: 'https://bloom.co/legal/terms',
    org_privacy_policy_url: 'https://bloom.co/legal/privacy',
    types: ['phone', 'email']
  };
  buttonCallbackUrl = 'https://mysite.com/bloom-callback'
}
