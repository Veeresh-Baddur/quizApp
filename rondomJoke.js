let jokebox = document.querySelector(".jokebox");
let nextBtn = document.querySelector(".next");
let viewBtn = document.querySelector(".view")

function view(){
  fetch('https://official-joke-api.appspot.com/jokes/random')
  .then(response => response.json())
  .then(data => jokebox.innerText = `${data.setup}\n\n"${data.punchline}"`)
  .catch(error => console.error("error in fecthing joke",error) )
}
window.onload = view


function jokeRequest(){
fetch('https://official-joke-api.appspot.com/jokes/random')
  .then(response => response.json())
  .then(data => {jokebox.innerText = `${data.setup}\n\n"${data.punchline}"`
  })
  .catch(error =>{
    console.error("error in fecthing joke",error)
  })
  likeBtn.classList.remove("redBg")
  likeBtn.classList.add("whiteBg")
}
nextBtn.onclick = jokeRequest

let likeBtn = document.querySelector(".like")
likeBtn.onclick = ()=> likeBtn.classList.contains("whiteBg") ? likeBtn.classList.add("redBg"):likeBtn.classList.add("whiteBg");