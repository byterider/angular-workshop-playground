import { Component, OnInit, Inject, Optional } from '@angular/core';
import { LIB_BACKROUND_COLOR } from './tokens';

@Component({
  selector: 'lib-my-lib2',
  template: `
    <p [style.backgroundColor]="backgroundColor">
      my-lib2 works :-)
    </p>
  `,
  styles: []
})
export class MyLib2Component implements OnInit {

    constructor(@Inject(LIB_BACKROUND_COLOR) @Optional() public backgroundColor: string) {
        if (!backgroundColor) {
            this.backgroundColor = 'red';
        }
  }

  ngOnInit() {
  }

}
