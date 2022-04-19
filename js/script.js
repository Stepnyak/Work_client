const numerOfFilms = +window.prompt("Сколько фильмов вы посмотрели, '' ");
let lastFilm = window.prompt("Один из последних просмотренных фильмов?", "");

while (lastFilm == "" || lastFilm.length > 50) {
  lastFilm = window.prompt("Один из последних просмотренных фильмов?", "");
}
const reyting = +window.prompt("На сколько оцените его?");

const personalMoviesDB = {
  count: numerOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
personalMoviesDB.movies[lastFilm] = reyting;
console.log(personalMoviesDB.movies);

const col = personalMoviesDB.count;
console.log(col);
if (col < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (col >= 10 && col < 30) {
  console.log("Вы классический зритель");
} else if (col > 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}
function showMyDB() {
  if (personalMoviesDB.privat == false) {
    console.log(personalMoviesDB);
  }
}
showMyDB();

function writeYuorGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMoviesDB.genres[i - 1] = prompt(
      `Ваш любимый жанр под номером ${i}`,
      ""
    );
  }
}

writeYuorGenres();
console.log(personalMoviesDB);
