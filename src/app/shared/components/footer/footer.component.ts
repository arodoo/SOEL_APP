import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  getCurrentDate(): string {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    return year.toString();
  }
}
