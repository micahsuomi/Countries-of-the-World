
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
  countriesList.forEach(country => {
    countriesContainer.innerHTML +=
      `<div class="country">${country}</div>`
      countriesTotal.textContent = countriesList.length;

    
  })
}; 


startsWithBtn.addEventListener('click', startsWithLetter = () => {
  countriesContainer.textContent = '';
  let startsWithLetters = countriesList.filter((country) => country.toLowerCase().startsWith(input.value));
  console.log(startsWithLetters)
  for (const country of startsWithLetters) {
    countriesContainer.innerHTML +=
    `<div class="country">${country}</div>`
  countriesSortedParagraph.textContent = `There are a total of ${startsWithLetters.length} countries starting with the letter '${input.value}'`;

}
     
});

includesBtn.addEventListener('click', includesLetter = () => {
  countriesContainer.textContent = '';
  let includesLetters = countriesList.filter((country) => country.toLowerCase().includes(input.value));
  for (const country of includesLetters) {
    countriesContainer.innerHTML +=
    `<div class="country">${country}</div>`
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