import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  hideSideMenu = signal(true);

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }
}
