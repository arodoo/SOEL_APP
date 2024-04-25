import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { ConstructionsComponent } from '../constructions/constructions.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ConstructionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
