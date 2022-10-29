import { Compiler, Injectable, ModuleWithComponentFactories } from '@angular/core';

@Injectable({ providedIn: "root" })
export class WidgetModulesLoaderService {
    constructor(private compiler: Compiler) { }


    async loadModuleByName(moduleName: string) {
        let imported = (await import("src/app/dynamic-module/dynamic-module/dynamic.module"));

        var module = imported.DynamicModule;
        if (module)
            return { module: await this.compiler.compileModuleAndAllComponentsSync(module), components: imported.components };
        return null;

    }
}