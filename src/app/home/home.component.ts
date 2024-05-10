import { Component } from '@angular/core';
import { NbSidebarService, NbMenuItem } from '@nebular/theme';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // constructor(private sidebarService: NbSidebarService) {}

  // items: NbMenuItem[] = [
  //   {
  //     title: 'Home',
  //     icon: 'home-outline',
  //     link: ''
  //   },
  //   {
  //     title: 'About',
  //     icon: 'info-outline',
  //     link: '/about'
  //   },
  //   {
  //     title: 'Contact',
  //     icon: 'email-outline',
  //     link: '/sidebar'
  //   }
  // ];
  
  // toggleSidebar(): void {
  //   this.sidebarService.toggle(true);
  // }
  
}
