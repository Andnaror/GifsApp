import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    if(!this.gif)
    throw new Error('Method not implemented.');
  }

  @Input()
  public gif!: Gif;
}
