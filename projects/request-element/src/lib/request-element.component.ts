import {Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core'

import {
  QROptions,
  ButtonOptions,
  renderRequestElement,
  RequestData,
  RequestElementResult,
  ShouldRenderButton,
} from '@bloomprotocol/share-kit'

@Component({
  selector: 'RequestElement',
  template: `
    <div #containerRef></div>
  `,
  styles: [],
})
export class RequestElementComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('containerRef', {read: ElementRef})
  private containerRef: ElementRef

  @Input() requestData: RequestData
  @Input() qrOptions: QROptions
  @Input() buttonOptions: ButtonOptions
  @Input() shouldRenderButton: ShouldRenderButton

  private requestElementResult: RequestElementResult

  constructor() {}

  ngOnInit() {
    if (!this.containerRef.nativeElement) {
      return
    }

    const {requestData, qrOptions, buttonOptions, shouldRenderButton} = this
    this.requestElementResult = renderRequestElement({
      container: this.containerRef.nativeElement,
      requestData,
      qrOptions,
      buttonOptions,
      shouldRenderButton,
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.requestElementResult) {
      return
    }

    const requestData: RequestData = changes.requestData ? changes.requestData.currentValue : this.requestData
    const qrOptions: Partial<QROptions> = changes.qrOptions ? changes.qrOptions.currentValue : this.qrOptions
    const buttonOptions: ButtonOptions = changes.buttonOptions ? changes.buttonOptions.currentValue : this.buttonOptions

    this.requestElementResult.update({
      requestData,
      buttonOptions,
      qrOptions,
    })
  }

  ngOnDestroy(): void {
    if (!this.requestElementResult) {
      return
    }

    this.requestElementResult.remove()
  }
}
