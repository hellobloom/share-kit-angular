![Share Kit Angular](https://github.com/hellobloom/share-kit/raw/master/images/logo.png)

# Share Kit Angular

Angular wrapper for [Share Kit](https://github.com/hellobloom/share-kit#readme)

- [Share Kit Angular](#share-kit-angular)
  - [Installation](#installation)
  - [Usage](#usage)
  - [More](#more)

## Installation

```
npm install --save @bloomprotocol/share-kit-angular
```

## Usage

`RequestElement` will render a QR code or button based on the client's platform. By default it will render a button when the client is mobile or tablet and on iOS.

Import the `ShareKitAngularLibModule` in `@NgModule`
```tsx
import {ShareKitAngularLibModule} from '@bloomprotocol/share-kit-angular';

@NgModule({
  ...
  imports: [
    ...
    ShareKitAngularLibModule
  ]
  ...
})
export class AppModule { }
```

Use the `ShareKitAngularLibComponent` with selector as `RequestElement`
```tsx
import { Component } from '@angular/core';
import {Action, QROptions, RequestData} from '@bloomprotocol/share-kit';

@Component({
  selector: 'app-root',
  template: `
    <h4>Request Element with 'requestData' and 'buttonCallbackUrl'</h4>
    <RequestElement
      [requestData]="requestData"
      [buttonCallbackUrl]="buttonCallbackUrl"
    ></RequestElement>

    <h4>Request Element with 'requestData', 'buttonCallbackUrl' and 'qrOptions'</h4>
    <RequestElement
      [requestData]="requestData"
      [buttonCallbackUrl]="buttonCallbackUrl"
      [qrOptions]="qrOptions"
    ></RequestElement>

    <h4>Request Element with 'requestData', 'buttonCallbackUrl', 'qrOptions' and 'shouldRenderButton'</h4>
    <RequestElement
      [requestData]="requestData"
      [buttonCallbackUrl]="buttonCallbackUrl"
      [qrOptions]="qrOptions"
      [shouldRenderButton]="callbackFunc()"
    ></RequestElement>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  requestData: RequestData = {
    action: Action.attestation,
    token: 'a08714b92346a1bba4262ed575d23de3ff3e6b5480ad0e1c82c011bab0411fdf',
    url: 'https://receive-kit.bloom.co/api/receive',
    org_logo_url: 'https://bloom.co/images/notif/bloom-logo.png',
    org_name: 'Bloom',
    org_usage_policy_url: 'https://bloom.co/legal/terms',
    org_privacy_policy_url: 'https://bloom.co/legal/privacy',
    types: ['phone', 'email'],
  };
  buttonCallbackUrl = 'https://mysite.com/bloom-callback';

  // Setting QR Options
  qrOptions: Partial<QROptions> = {
    size: 200,
  };

  // Overriding shouldRenderButton
  callbackFunc() {
    return (parsedResult) => parsedResult.platform.type !== 'mobile';
  }
}
```

## More

For more information and documentation see [Share Kit](https://github.com/hellobloom/share-kit#readme)
