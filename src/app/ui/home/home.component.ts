import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ConstructionsComponent } from '../constructions/constructions.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ConstructionsComponent, ProductsComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
