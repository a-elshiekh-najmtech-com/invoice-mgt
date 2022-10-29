import { Component, ComponentRef, HostBinding, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { WidgetDirective } from 'src/app/directives/widget.directive';
import { IBaseWidget } from 'src/app/models/IBaseWidget';
import { WidgetsLoaderService } from 'src/app/services/dynamic-loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('widget', { read: ViewContainerRef }) _container: ViewContainerRef;
  @ViewChild(WidgetDirective, { static: true }) widgetHost!: WidgetDirective;

  compRef: ComponentRef<any>;

  instance: any;

  constructor(
    private loader: WidgetsLoaderService
  ) { }

  async ngOnInit() {
    let loader = await this.loader.getComponetRef("dynamic", "app-dynamic");

    const viewContainerRef = this.widgetHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<IBaseWidget>(loader);

    // this.compRef = this._container.createComponent(loader.component, null, null, null, loader.module)
  }

  ngOnDestroy(): void {

    if (this.compRef) {
      this.compRef.destroy();
    }
  }

}
