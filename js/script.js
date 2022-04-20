"use restrict";

const personalMoviesDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: () => {
    personalMoviesDB.count = +window.prompt(
      "Сколько фильмов вы посмотрели",
      ""
    );
    while (
      personalMoviesDB.count == "" ||
      isNaN(personalMoviesDB.count) ||
      personalMoviesDB.count == null
    ) {
      personalMoviesDB.count = +window.prompt(
        "Сколько фильмов вы посмотрели, '' "
      );
    }
  },
  rememberMyFilms: function () {
    let lastFilm = window.prompt(
      "Один из последних просмотренных фильмов?",
      ""
    );
    while (lastFilm == "" || lastFilm.length > 50) {
      lastFilm = window.prompt("Один из последних просмотренных фильмов?", "");
    }
    const reyting = +window.prompt("На сколько оцените его?", "");
    personalMoviesDB.movies[lastFilm] = reyting;
  },
  detectPersonalLevel: () => {
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
  },

  writeYuorGenres: () => {
    for (let i = 1; i <= 3; i++) {
      personalMoviesDB.genres[i - 1] = prompt(
        `Ваш любимый жанр под номером ${i}`,
        ""
      );
    }
  },
  toggleVisibleMyDB: () => {
    if (personalMoviesDB.privat) {
      personalMoviesDB.privat = false;
    } else {
      personalMoviesDB.privat = true;
    }
  },

  showMyDB: function () {
    console.log(personalMoviesDB);
  },
};

//showMyDB();

personalMoviesDB.start();
personalMoviesDB.rememberMyFilms();
personalMoviesDB.detectPersonalLevel();
personalMoviesDB.writeYuorGenres();
personalMoviesDB.toggleVisibleMyDB();
personalMoviesDB.showMyDB();
