
const countriesContainer = document.querySelector('.countries-wrapper'); 
const countriesTotal = document.querySelector('.countries-total');
const countriesSortedParagraph = document.querySelector('.countries-sort__paragraph');
const startsWithBtn = document.querySelector('.starts-with__btn');
const includesBtn = document.querySelector('.includes__btn');
const sortBtn = document.querySelector('.sort-az__btn');
const input = document.querySelector('.countries-input');
const warning = document.querySelector('.warning');

const displayCountries = () => {
  countriesContainer.textContent = '';
  for(let i = 0; i < countriesList.length; i++) {
    let country = document.createElement('div');
    country.textContent = countriesList[i];
    country.setAttribute('class', 'country');
    countriesContainer.appendChild(country);
    countriesTotal.textContent = countriesList.length;
    
  }
}


startsWithBtn.addEventListener('click', startsWithLetter = () => {
  countriesContainer.textContent = '';
  let startsWithLetters = countriesList.filter((country) => country.toLowerCase().startsWith(input.value));
  console.log(startsWithLetters)
  for (const country of startsWithLetters) {

  let div = document.createElement('div');
  div.setAttribute('class', 'country');
  div.textContent = country;
  countriesContainer.appendChild(div);
  countriesSortedParagraph.textContent = `There are a total of ${startsWithLetters.length} countries starting with the letter '${input.value}'`;

}
     
});

includesBtn.addEventListener('click', includesLetter = () => {
  countriesContainer.textContent = '';
  let includesLetters = countriesList.filter((country) => country.toLowerCase().includes(input.value));
  for (const country of includesLetters) {
  let div = document.createElement('div');
  div.setAttribute('class', 'country');
  div.textContent = country;
  countriesContainer.appendChild(div);
  countriesSortedParagraph.textContent = `There are a total of ${includesLetters.length} countries including the letters '${input.value}'`

}

     
});


sortBtn.addEventListener('click', sortCountries = () => {
  let sorted = countriesList;
  sorted.reverse();
  displayCountries(sorted)
  //use flag, true or false to see if the array is reversed
})

displayCountries(countriesList);