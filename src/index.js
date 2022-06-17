document.addEventListener('DOMContentLoaded', init)

function init(){
    getPups()
    pupInfo()
    displayPups()
    toggleButton()
}

// Get/Load pups on page
const url = 'http://localhost:3000/pups'

function getPups(){
    fetch(url)
        .then(res => res.json())
        // the cb function takes each pup within my json file and runs the cb function to display them
        .then(pups => pups.forEach(pup => {
            displayPups(pup)
        }))
    }


// this renders my pups on the page
function displayPups(pup){
    const span = document.createElement('span')
    const dogBar = document.getElementById('dog-bar')
    
    // this gets each pup's name an adds it to the innerHTML of the span
    span.innerHTML = pup.name
    // this takes each span and appends it to the dogBar div
    dogBar.appendChild(span)
    // this adds an event listener so the function that changes the displayed pups when clicked
    span.addEventListener('click', () => {
        pupInfo(pup)
    })
}

// this displays each pup's info
function pupInfo(pup){
    const dogInfo = document.getElementById('dog-info')
    let button;
    
    if(pup.isGoodDog == true){
        button = 'Good Dog!'
    }else{
        button = 'Bad Dog!'
    }
    const info = `<img src='${pup.image}' alt='image'/>
    <h2>${pup.name}</h2>
    <button>${button}</button>
    `
    dogInfo.innerHTML = info
}

// toggle
// i couldn't figure this out
// const buttonToggle = document.querySelector('button')

// function toggleButton(){
//     buttonToggle.addEventListener('click', () => {
//     fetch(`${url}/pups/:id`,{
//         method: 'PATCH',
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(pupInfo)
//     })
//         .then(res => res.json())
//         .then(() => {
//             if(pup.isGoodDog === true){
//                 button = 'Bad Dog!'
//             } else {
//                 button = 'Good Dog!'
//             }
//         })
// })
// }
            


// // filter
// function filter(){
//     const buttonToggle = document.getElementById('good-dog-filter')

//     }


