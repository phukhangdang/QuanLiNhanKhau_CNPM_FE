import {Component} from '@angular/core';
import { myNavItems } from '../../_my-nav-2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './thong-ke-layout.component.html'
})
export class ThongKeLayoutComponent {
  public sidebarMinimized = false;
  public myNavItems = myNavItems;

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
}
