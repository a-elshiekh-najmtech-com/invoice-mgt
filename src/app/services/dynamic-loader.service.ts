import { ComponentRef, Injectable, Injector } from '@angular/core';
import { WidgetModulesLoaderService } from './widget-modules-loader.service';

@Injectable({providedIn:"root"})
export class WidgetsLoaderService {
    constructor(private moduleLoader: WidgetModulesLoaderService, private injector: Injector) { }


    async getComponetRef(moduleName: string, componentSelector: string) {

        var compiledModule = await this.moduleLoader.loadModuleByName(moduleName);
        console.log(`compiled Module: ${moduleName} `,compiledModule);

        if (compiledModule == null) {
            throw `Couldn't load Module With Key ${moduleName}`;
        }

        const module = compiledModule.ngModuleFactory.create(this.injector);
        console.log(`moduleName: ${moduleName} `,module);

        var factories = compiledModule.componentFactories.map(x=>x.selector);
        console.log(`components: ${moduleName} `,factories);

        const component = compiledModule.componentFactories.find(c => c.selector === componentSelector)

        if (component == null) {
            throw `Dashboard Widget with selector ${componentSelector} not found!`;
        }
        return { component, module };
        // const componentView = component.create(this.injector, [], null, module);
        // return componentView;
    }

}