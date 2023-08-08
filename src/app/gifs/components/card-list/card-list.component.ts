import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  @Input()
  public gifs: Gif[]=[];

  get gif():Gif{
    return this.gif;
  }
}
