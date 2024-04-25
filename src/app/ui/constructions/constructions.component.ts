import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Construction, ConstructionService } from '../../core/services/construction.service';

@Component({
  selector: 'app-constructions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './constructions.component.html',
  styleUrl: './constructions.component.scss'
})
export class ConstructionsComponent implements OnInit{

  public _constructionsMain: Construction[] = [];

  constructor(private _constructionService: ConstructionService) {

  }
  ngOnInit(): void {
    this._constructionsMain = this._constructionService.getConstructionsMain();

  }

}
