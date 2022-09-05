// function wait3seconds() {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve,3000)
            
    
//     })
    
// }


// wait3seconds()
// .then(()=> console.log('Done!'))
// .catch(()=> console.log('Error!!!!!!!'))



// const h1 = document.querySelector('h1');
// setTimeout(()=>{ 
//     h1.style.color = 'red'
//     setTimeout(()=>{
//         h1.style.color = 'orange'
//         setTimeout(()=>{
//             h1.style.color = 'yellow'
//             setTimeout(()=>{
//                 h1.style.color = 'green'
//                 setTimeout(()=>{
//                     h1.style.color = 'blue'
//                     setTimeout(()=>{
//                         h1.style.color = 'purple'
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)



// function changeColor(el, color){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             el.style.color = color;
//             resolve()
//         }, 1000);
//     })
// }

// changeColor(h1,'teal')
// .then(()=>{ changeColor(h1,'orange')})
// .then(()=>{ changeColor(h1,'blue')})
// .then(()=>{ changeColor(h1,'brown')})

// let request = new XMLHttpRequest();

// request.onload = function () {
//     if (request.readyState !== 4) return;

//     //check status code
//     if(request.status >= 200 && request.status < 300){
//         console.log("It worked")
//     } else {
//         console.log("Error")
//     }
// }

// request.onerror = function handleError(){

//     console.log("Network Error")
//     request = null;
// }

// request.open('GET', 'http://stapi.co/api/v1/rest/animal/search')

// request.send();



// function get(url) {

// const request = new XMLHttpRequest();
//     return new Promise((resolve, reject) => {
//         request.onload = function () {
//             if (request.readyState !== 4) return;
    
//             //check status code
//             if(request.status >= 200 && request.status < 300){
//                 resolve(JSON.parse(request.response))
//             } else {
//                 reject(request.status)
//             }
//         }
//         request.onerror = function handleError(){
//             request = null;
//             reject('Network Error')
//         }
//         request.open('GET', url);
//         request.send();


//     })
// }
// url = 'http://stapi.co/api/v1/rest/animal/search'
// get(url)
//     .then( res=> console.log(res))
//     .catch(err=>console.log(err))



// let fourPokemonPromises = [];

// for (let i = 1; i < 5; i++) {
//   fourPokemonPromises.push(
//     axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
//   );
// }

// Promise.all(fourPokemonPromises)
//   .then(pokemonArr => (
//     pokemonArr.forEach(p => console.log(p.name))
//   ))
//   .catch(err => console.log(err));

url = 'http://numbersapi.com/'

//2.
axios
.get(`${url}1..5`).then(lucknum => $('#range2').append(`Facts about your range of lucky numbers is ${lucknum.data[1]}${lucknum.data[2]}${lucknum.data[3]}${lucknum.data[4]}`) )


//1.
axios
.get(`${url}7`).then(lucknum => console.log(`A fact about your lucky number is ${lucknum.data}`) )

//3.

var fourNumberPromises = []
num = Math.floor((Math.random() * 100) +1)


for (let i = 1; i < 5; i++) {
  fourNumberPromises.push(
    axios.get(`${url}${num}`)
  );
}

Promise.all(fourNumberPromises)
  .then(numArr => (
    numArr.forEach( num => $('#range').append(`<li> ${num.data} </li>`))
  ))
  .catch(err => console.log(err));



