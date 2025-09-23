import { Component } from '@angular/core';
import { FilmsService } from '../../services/films.servise';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {
  public searchString: string = ''

  constructor(private _filmsService: FilmsService) {

  }

  public updateValue(event: Event) {
    const target = event.target as HTMLInputElement
    this.searchString = target.value

  }

  public updateSearch(event: Event) {
    this._filmsService.searchString = this.searchString

  }
}
