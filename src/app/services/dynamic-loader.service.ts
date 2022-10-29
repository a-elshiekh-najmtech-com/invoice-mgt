import { Injectable } from '@angular/core';
import { WidgetModulesLoaderService } from './widget-modules-loader.service';

@Injectable({ providedIn: "root" })
export class WidgetsLoaderService {
    constructor(private moduleLoader: WidgetModulesLoaderService) { }


    async getComponetRef(moduleName: string, componentSelector: string) {

        var compiled = await this.moduleLoader.loadModuleByName(moduleName);
        const component = compiled[componentSelector];

        if (component == null) {
            throw `Dashboard Widget with selector ${componentSelector} not found!`;
        }
        return component ;
        
    }

}