btnJoke.addEventListener('click', generateJoke);

function generateJoke(){
    this.innerHTML = 'Get a new joke';
    joke.innerText = 'Your joke is being ready!...';
    fetch('https://api.chucknorris.io/jokes/random')
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
       joke.innerText = data.value;
    })
    .catch((error) => {
        alert(error);
    });
}