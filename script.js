const bubble = document.getElementById('bubble')
const punchline = document.getElementById('punchline')
const newJokeBtn = document.getElementById('get-joke')
const punchlineBtn = document.getElementById('get-punchline')

let punchlineVar = ''


function getPunchline() {
    punchline.textContent = punchlineVar
    // punchline.classList += 'joke-bubble'
    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');
}

async function getJoke() {
    const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    const joke = await jokePromise.json()
    console.log(joke)

    joke.forEach(function (jokeItem) {
        bubble.textContent = jokeItem.setup
        punchlineVar = jokeItem.punchline
    })

    punchline.textContent = ''
    punchline.classList.remove('joke-button')

    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');

}

punchlineBtn.addEventListener('click', getPunchline)

newJokeBtn.addEventListener('click', getJoke)


getJoke()
