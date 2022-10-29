import { Compiler, CompilerFactory, COMPILER_OPTIONS, ComponentFactory, NgModule, Type } from '@angular/core';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

import { CommonModule } from '@angular/common';
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { IBaseWidget } from 'src/app/models/IBaseWidget';


export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}

@NgModule({
  declarations: [
    DynamicComponent
  ],
  entryComponents: [
    DynamicComponent
  ],
  exports: [
    DynamicComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: COMPILER_OPTIONS, useValue: {}, multi: true },
    { provide: CompilerFactory, useClass: JitCompilerFactory, deps: [COMPILER_OPTIONS] },
    { provide: Compiler, useFactory: createCompiler, deps: [CompilerFactory] },
  ]
})
export class DynamicModule { }


export const components: { [name: string]: Type<IBaseWidget> } = {
  "app-dynamic": DynamicComponent
}