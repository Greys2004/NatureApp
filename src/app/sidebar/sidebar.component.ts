import { Component, signal } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { PagesModule } from '../pages/pages-module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  imports: [NzMenuModule, NzIconModule,PagesModule, RouterModule,NzIconModule],
  styleUrls: ['./sidebar.scss'],
  standalone: true
})
export class SideBarComponent {
  collapsed = signal(false);
  toggle() { this.collapsed.update(v => !v); }
}
