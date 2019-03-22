import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWorldOnpushShadowdomComponent } from './hello-world-onpush-shadowdom/hello-world-onpush-shadowdom.component';
import { MyLib2Component, MyLib2Module, LIB_BACKROUND_COLOR } from 'my-lib2';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloWorldOnpushShadowdomComponent
  ],
  imports: [
      BrowserModule,
      MyLib2Module.configure()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
