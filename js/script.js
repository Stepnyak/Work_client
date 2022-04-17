const numerOfFilms = +window.prompt("Сколько фильмов вы посмотрели, '' ");
const lastFilm = window.prompt("Один из последних просмотренных фильмов?");
const reyting = +window.prompt("На сколько оцените его?");
const lastFilm1 = window.prompt("Один из последних просмотренных фильмов?");
const reyting1 = +window.prompt("На сколько оцените его?");

//console.log(`Посмотрел  ${numerOfFilms} фильмов`);

const personalMoviesDB = {
  count: numerOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
personalMoviesDB.movies[lastFilm] = reyting;
personalMoviesDB.movies[lastFilm1] = reyting1;
//const result = `${lastFilm}:${reyting}`;
//console.log(personalMoviesDB.movies = result);
console.log(personalMoviesDB.movies);
