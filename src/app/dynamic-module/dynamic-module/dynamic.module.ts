import { Compiler, CompilerFactory, COMPILER_OPTIONS, NgModule } from '@angular/core';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

import { CommonModule } from '@angular/common';
import { DynamicComponent } from './components/dynamic/dynamic.component';


export function createCompiler(compilerFactory: CompilerFactory) {
  return compilerFactory.createCompiler();
}

@NgModule({
  declarations: [
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
