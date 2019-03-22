import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hello-world-onpush-shadowdom',
  templateUrl: './hello-world-onpush-shadowdom.component.html',
  styleUrls: ['./hello-world-onpush-shadowdom.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloWorldOnpushShadowdomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
