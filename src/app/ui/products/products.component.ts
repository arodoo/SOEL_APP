import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructionService, Service } from '../../core/services/construction.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,
    ProductComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  services: Service[] = [];

  constructor(private constructionService: ConstructionService) {
    const services = this.constructionService.getServices();
    this.services = services;
  }

  ngOnInit(): void {
    const element = document.getElementById('begin');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
