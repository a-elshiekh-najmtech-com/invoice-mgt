import { Compiler, Injectable, ModuleWithComponentFactories } from '@angular/core';

@Injectable({ providedIn: "root" })
export class WidgetModulesLoaderService {
    constructor() { }


    async loadModuleByName(moduleName: string) {
        let imported = (await import("src/app/dynamic-module/dynamic-module/dynamic.module"));

        return imported.components;


    }
}