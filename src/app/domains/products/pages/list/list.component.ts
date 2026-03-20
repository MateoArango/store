import { Component, signal} from '@angular/core';
import { ProductComponent } from './../../components/product/product.component';
import { HeaderComponent } from './../../../shared/components/header/header.component';
import { CommonModule } from '@angular/common';
import { Product } from './../../../shared/models/product.model';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  products = signal<Product[]>([]);
  cart = signal<Product[]>([]);

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Product 1',
        price: 10.00,
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 2',
        price: 15.00,
        image: 'https://picsum.photos/640/640?r=24',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 3',
        price: 20.00,
        image: 'https://picsum.photos/640/640?r=25',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 1',
        price: 10.00,
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 2',
        price: 15.00,
        image: 'https://picsum.photos/640/640?r=24',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Product 3',
        price: 20.00,
        image: 'https://picsum.photos/640/640?r=25',
        creationAt: new Date().toISOString()
      }
    ];

    this.products.set(initProducts);
  }


  addToCart(product: Product) {
    this.cart.update(prevState => [...prevState, product]);
  }
}
