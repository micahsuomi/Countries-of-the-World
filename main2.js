
const countriesContainer = document.querySelector('.countries-wrapper'); 
const countriesTotal = document.querySelector('.countries-total');
const countriesSortedParagraph = document.querySelector('.countries-sort__paragraph');
const startsWithBtn = document.querySelector('.starts-with__btn');
const includesBtn = document.querySelector('.includes__btn');
const sortBtn = document.querySelector('.sort-az__btn');
const input = document.querySelector('.countries-input');
const warning = document.querySelector('.warning');

let flag = false;
const toggle = () => {
  flag = !flag;
  return flag;
}


const displayCountries = () => {
  countriesContainer.textContent = '';

  countriesList.forEach(country => {
    countriesContainer.innerHTML +=
      `<div class="country">${country}</div>`
      countriesTotal.textContent = countriesList.length;

    
  })
}; 


const validateInput = () => {
  let regex = /[A-Zaz]+$/
  if(!input.matches(regex)) {
    warning.textContent = 'please input only letters'

  }

  }

startsWithBtn.addEventListener('click', startsWithLetter = () => {
  countriesContainer.textContent = '';
  let startsWithLetters = countriesList.filter((country) => country.toLowerCase().startsWith(input.value));
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

  if(flag === true) {
      sortBtn.textContent="Sort ZA";

    displayCountries(sorted)

} else {
    sortBtn.textContent="Sort AZ";
    sorted.reverse();

}
toggle();

  
  //use flag, true or false to see if the array is reversed
})

displayCountries(countriesList);