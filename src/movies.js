const movies = require('./data');


// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array) {
  return array.map((item) => item.director);
}

//console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and ake it unified (without duplicates)?

/*function getAllDirectorsOnce(array) {
    return array
    .filter((item => item.director))
    .map((item => item.director));
;
} 

console.log(getAllDirectorsOnce(movies));*/

//Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray
    .filter((item) => item.director === "Steven Spielberg")
    .filter((item) => item.genre.includes("Drama")).length;
}

//console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let arrayAverageScores =
    moviesArray.length === 0
      ? 0
      : moviesArray.reduce(
          (accumulator, movie) =>
            movie.score ? accumulator + movie.score : accumulator,
          0
        ) / moviesArray.length;

  return Number(arrayAverageScores.toFixed(2));
}

console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
