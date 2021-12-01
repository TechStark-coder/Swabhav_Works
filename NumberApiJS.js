let form = document.querySelector('form');
let facts = document.querySelector('.get-facts');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let factURL = "http://numbersapi.com/";
  let number = e.target.querySelector('input[type="text"]').value;
  fetch(factURL + number, {
  })
    .then(response => response.text())
    // .then(text => facts.innerHTML = text + " " + "- searched on" + " " + moment().format('LTS'))
    .then(text => facts.innerHTML = text + " " + "- searched on" + " " + moment().format('MMMM Do YYYY, h:mm:ss a'))
})

// if (number == 1) {
//   this.style.backgroundColor = "blue";
// }
// else if (number == 2) {
//   this.style.backgroundColor = "green";
// } else {
//   this.style.backgroundColor = "red";
// }
  // } 911