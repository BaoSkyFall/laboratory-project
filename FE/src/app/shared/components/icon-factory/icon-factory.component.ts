import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'icon-factory',
  templateUrl: './icon-factory.component.html',
  styleUrls: ['./icon-factory.component.scss']
})
export class IconFactoryComponent implements OnInit {

  @Input() iconName: string = '';
  @Input() size: string = '14px';
  @Input() color: string = '';

  constructor() { }

  ngOnInit() {
  }

}
