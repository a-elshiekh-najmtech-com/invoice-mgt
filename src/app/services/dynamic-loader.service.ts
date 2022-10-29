import { ComponentRef, Injectable, Injector } from '@angular/core';
import { WidgetModulesLoaderService } from './widget-modules-loader.service';

@Injectable({ providedIn: "root" })
export class WidgetsLoaderService {
    constructor(private moduleLoader: WidgetModulesLoaderService, private injector: Injector) { }


    async getComponetRef(moduleName: string, componentSelector: string) {

        var compiled = await this.moduleLoader.loadModuleByName(moduleName);

        if (compiled == null || compiled.module == null) {
            throw `Couldn't load Module With Key ${moduleName}`;
        }

        const module = compiled.module.ngModuleFactory.create(this.injector);

        const component = compiled.components[componentSelector];

        if (component == null) {
            throw `Dashboard Widget with selector ${componentSelector} not found!`;
        }
        return { component, module };
        // const componentView = component.create(this.injector, [], null, module);
        // return componentView;
    }

}