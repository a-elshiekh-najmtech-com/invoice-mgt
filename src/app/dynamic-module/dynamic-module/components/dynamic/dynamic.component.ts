import { Component, OnInit } from '@angular/core';
import { IBaseWidget } from 'src/app/models/IBaseWidget';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit, IBaseWidget {

  constructor() { }
  data: string;

  ngOnInit(): void {
  }

}
