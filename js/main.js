//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://meowfacts.herokuapp.com/'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let num = Math.floor(Math.random() * data.data.length)
        document.querySelector('h3').innerText = data.data[num];
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

getFetch();