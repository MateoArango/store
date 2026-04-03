import { Component, input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common'; // <--- Este es el que te falta
import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [RouterLink, CurrencyPipe, RouterLinkWithHref, RouterLinkActive],

})
export class HeaderComponent {
  hideSideMenu = signal(true);
  private cartService = inject(CartService);
  cart = this.cartService.cart;
  total = this.cartService.total;

  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }
}
