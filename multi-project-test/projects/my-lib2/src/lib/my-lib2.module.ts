import { NgModule } from '@angular/core';
import { MyLib2Component } from './my-lib2.component';
import { ModuleWithProviders } from '@angular/core';
import { LIB_BACKROUND_COLOR } from './tokens';
@NgModule({
  declarations: [MyLib2Component],
  imports: [
  ],
  exports: [MyLib2Component]
})
export class MyLib2Module {
    static configure(): ModuleWithProviders<MyLib2Module> {
		return {
			ngModule: MyLib2Module,
			providers: [
				{ provide: LIB_BACKROUND_COLOR, useValue: 'blue' }
			]
		};
    }
}
