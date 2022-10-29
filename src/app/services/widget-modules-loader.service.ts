import { Compiler, Injectable, ModuleWithComponentFactories } from '@angular/core';

@Injectable({providedIn:"root"})
export class WidgetModulesLoaderService {
    constructor(private compiler: Compiler) { }


    async loadModuleByName(moduleName: string): Promise<ModuleWithComponentFactories<any>> {
        let module = (await import("src/app/dynamic-module/dynamic-module/dynamic.module")).DynamicModule;
       
        if (module)
            return await this.compiler.compileModuleAndAllComponentsSync(module);
        return null;

    }
}