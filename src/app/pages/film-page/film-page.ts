import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film.constants';
import { FILMS } from '../../constants/films.constants';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FilmsService } from '../../services/films.servise';

@Component({
  selector: 'app-film-page',
  standalone: false,
  templateUrl: './film-page.html',
  styleUrl: './film-page.css'
})
export class FilmPage implements OnInit {
  public films: Film[] = []
  public film!: Film

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _filmsService: FilmsService
  ) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id')
    this.films = this._filmsService.getFullFilms
    this._initFilm(Number(id))
  }

  private _initFilm(id: number) {
    const fingFilm = this.films.find(film => film.id === id)

    if (fingFilm) {
      this.film = fingFilm
    } else {
      this._router.navigate(['/'])
    }


  }
}
