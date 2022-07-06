'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('Насколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('Насколько оцените его?', '');

personalMoviesDB.movies[a] = b;    
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);