/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear (arr){
  let newarr = [...arr];
  return newArr.sort((a,b) =>{
    if (a.year === b.year){
      return a.title.localCompare(b.title);
    }
    if(a.year > b.year){
      return 1;
    }
    else {
      return -1;
    }
  });
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arrOfMovies){
  return arrOfMovies.filter(movie => {
    return movie.genre.includes("Drama") && movie.director === "Steven Spielberg";
  }).length;
}
    // let counter = 0;
    // let dramaCounter = 0;
    // let spielbergMovies =  movies.filter(function(movies){
    //     if(movies.director === 'Steven Spielberg'){
    //       counter++;
    //     }
    //     else if(movies.genre === 'drama' && movies.director === 'Steven Spielberg'){
    //       dramaCounter++;
    //     }
    // });
    // console.log(counter);
    // return dramaCounter;


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (arr) {
  let titleArr = [...arr];
  let finalArr = [];
  titleArr.sort((a,b) => a.title > b.title ? 1 : -1)
  let twentyArr = titleArr.slice(0,20);
  twentyArr.forEach(element => {
    finalArr.push(element.title);

  });
  return finalArr;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
