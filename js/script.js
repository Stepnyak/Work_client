const numerOfFilms = window.prompt("Сколько фильмов вы посмотрели ");

//console.log(`Посмотрел  ${numerOfFilms} фильмов`);

const personalMoviesDB = {
  count: numerOfFilms,
  movies: "",
  actors: "",
  genres: [],
  privat: false,
};
console.log(personalMoviesDB.count);
