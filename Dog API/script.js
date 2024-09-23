document.getElementById('dog1').addEventListener('click', fetchDog);

function fetchDog() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(res => {
      document.getElementById('image').src = res.message;
    })
    .catch(error => console.log(error));
}
