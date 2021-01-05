import {Component} from '@angular/core';
import { myNavItems } from '../../_my-nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './quan-li-layout.component.html'
})
export class QuanLiLayoutComponent {
  constructor() { }

  public sidebarMinimized = false;
  public myNavItems = myNavItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
