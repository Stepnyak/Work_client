const numerOfFilms = +window.prompt("Сколько фильмов вы посмотрели, '' ");
const lastFilm = window.prompt("Один из последних просмотренных фильмов?");
const reyting = +window.prompt("На сколько оцените его?");

//console.log(`Посмотрел  ${numerOfFilms} фильмов`);

const personalMoviesDB = {
  count: numerOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
const result = `${lastFilm}:${reyting}`;
console.log(personalMoviesDB.movies = result);
