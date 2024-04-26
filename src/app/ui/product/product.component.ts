import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Service } from '../../core/services/construction.service';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  isPopupVisible = false;
  @Input() service: Service = {
    id: 0,
    titulo: '',
    icono: '',
    descripcion: '',
  };


changuePopupVisibility(): void {
    this.isPopupVisible = !this.isPopupVisible;
  }

}
