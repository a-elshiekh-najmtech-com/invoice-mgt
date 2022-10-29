import { Component, ComponentRef, HostBinding, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { WidgetsLoaderService } from 'src/app/services/dynamic-loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('widget', { read: ViewContainerRef }) _container: ViewContainerRef;
  compRef: ComponentRef<any>;

  instance: any;

  constructor(
    private loader: WidgetsLoaderService
  ) { }

  async ngOnInit() {
    let loader = await this.loader.getComponetRef("dynamic", "app-dynamic");
    this.compRef = this._container.createComponent(loader.component, null, null, null, loader.module)
  }

  ngOnDestroy(): void {
   
    if (this.compRef) {
      this.compRef.destroy();
    }
  }

}
