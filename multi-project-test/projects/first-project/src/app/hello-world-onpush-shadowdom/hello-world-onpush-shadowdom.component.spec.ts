import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldOnpushShadowdomComponent } from './hello-world-onpush-shadowdom.component';

describe('HelloWorldOnpushShadowdomComponent', () => {
  let component: HelloWorldOnpushShadowdomComponent;
  let fixture: ComponentFixture<HelloWorldOnpushShadowdomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloWorldOnpushShadowdomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldOnpushShadowdomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
