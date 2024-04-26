import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ConstructionService, Service } from '../../core/services/construction.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  services: Service[] = [];

  constructor(
    private constructionService: ConstructionService,
    @Inject(PLATFORM_ID) private platformId: Object // Inyecta PLATFORM_ID para verificar el entorno de ejecución
  ) {
    const services = this.constructionService.getServices();
    this.services = services;
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) { // Verifica si está en el navegador
      const element = document.getElementById('begin');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}
