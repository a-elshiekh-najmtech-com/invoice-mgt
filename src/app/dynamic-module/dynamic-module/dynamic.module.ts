import { NgModule, Type } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IBaseWidget } from 'src/app/models/IBaseWidget';
import { DynamicComponent } from './components/dynamic/dynamic.component';

@NgModule({
    declarations: [
        DynamicComponent
    ],
    imports: [
        CommonModule
    ]
})
export class DynamicModule { }


export const components: { [name: string]: Type<IBaseWidget> } = {
    "app-dynamic": DynamicComponent
}