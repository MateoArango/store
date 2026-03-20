import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { computed } from '@angular/core';


@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',

})
export class HeaderComponent {
  hideSideMenu = signal(true);
  cart = input.required<Product[]>();
  totalPrice = computed(() => {
    return this.cart().reduce((acc, product) => acc + product.price, 0);
  });
  
  toogleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }
}
