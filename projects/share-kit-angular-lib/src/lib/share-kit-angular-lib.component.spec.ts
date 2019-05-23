import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareKitAngularLibComponent } from './share-kit-angular-lib.component';

describe('ShareKitAngularLibComponent', () => {
  let component: ShareKitAngularLibComponent;
  let fixture: ComponentFixture<ShareKitAngularLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareKitAngularLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareKitAngularLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
