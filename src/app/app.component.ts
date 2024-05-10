import { Component } from '@angular/core';
import { NbSidebarService, NbMenuItem, NbPosition } from '@nebular/theme';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TestProject';

  constructor(private sidebarService: NbSidebarService) {}

  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/home'
    },
    {
      title: 'About',
      icon: 'info-outline',
      link: '/about'
    },
    {
      title: 'Contact',
      icon: 'email-outline',
      link: '/contact'
    },
    {
      title: 'Profile',
      icon: 'person-outline',
      children: [
        {
          title: 'Logout',
          icon: 'log-out-outline',
          link: '/logout'
        },
        {
          title: 'Information',
          icon: 'info-outline',
          link: '/information'
        }
      ]
    }
  ];
  
  toggleSidebar(): void {
    this.sidebarService.toggle(true);
  }
  
  item = [
    {
      title: 'Logout',
    },
  ];
  contextMenuPlacement = NbPosition.BOTTOM;
}
