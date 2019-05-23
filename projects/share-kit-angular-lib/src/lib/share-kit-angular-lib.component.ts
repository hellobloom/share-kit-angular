import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {
  QROptions,
  renderRequestElement,
  RequestData,
  RequestElementResult,
  ShouldRenderButton
} from "@bloomprotocol/share-kit";

@Component({
  selector: 'RequestElement',
  template: `
    <div #containerRef></div>
  `,
  styles: []
})
export class ShareKitAngularLibComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild("containerRef", {read: ElementRef}) private containerRef: ElementRef;

  @Input() requestData: RequestData;
  @Input() qrOptions?: Partial<QROptions>;
  @Input() buttonCallbackUrl: string;
  @Input() shouldRenderButton?: ShouldRenderButton;
  private requestElementResult: RequestElementResult;

  constructor() { }

  ngOnInit(): void {
    if(!this.containerRef.nativeElement) return;

    const {requestData, qrOptions, buttonCallbackUrl, shouldRenderButton} = this;
    this.requestElementResult = renderRequestElement({
      container: this.containerRef.nativeElement,
      requestData,
      qrOptions,
      buttonCallbackUrl,
      shouldRenderButton
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!this.requestElementResult) return;

    const requestData: RequestData = changes.requestData.currentValue;
    const qrOptions: Partial<QROptions> = changes.qrOptions.currentValue;
    const buttonCallbackUrl: string = changes.buttonCallbackUrl.currentValue;
    this.requestElementResult.update({requestData, buttonCallbackUrl, qrOptions});
  }

  ngOnDestroy(): void {
    this.requestElementResult.remove();
  }

}
