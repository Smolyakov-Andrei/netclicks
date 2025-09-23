import { Component } from '@angular/core';
import { Film } from '../../models/film.constants';
import { FILMS } from '../../constants/films.constants';
import { FilmsService } from '../../services/films.servise';

@Component({
  selector: 'app-catalog-page',
  standalone: false,
  templateUrl: './catalog-page.html',
  styleUrl: './catalog-page.css'
})
export class CatalogPage {


  constructor(
    private _filmsService: FilmsService
  ) { }

  public get films(): Film[] {
    return this._filmsService.filteredFilms
  }
}
