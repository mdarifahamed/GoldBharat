import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
 
})
export class HeaderComponent {
  collapseNavbar(): void {
    const windowWidth = window.innerWidth;
    if (windowWidth < 992) { // Check if the window width is less than the Bootstrap lg breakpoint (992px)
      const navbarToggler = document.querySelector('.navbar-toggler');
      if (navbarToggler) {
        navbarToggler.dispatchEvent(new Event('click'));
      }
    }
  }

  
  
}
