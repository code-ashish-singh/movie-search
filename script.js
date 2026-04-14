 let button_Div = document.querySelector('#button_Div')
 const card_div = document.querySelector('#card_div')
 const searchBtn = document.querySelector('#search-btn')
 const inputBtn = document.querySelector('#inputBtn')
 const apiUrl = "https://imdb.iamidiotareyoutoo.com/search?q="

// function buttonAddToPage(){
//   for( let  i = 2026 ; i >= 2016 ; i--){
//         console.log(i)
//   }
// }
 
let arr = []
for(let i = 2026 ; i >=2005 ; i--){
    let pushVari = ` <button onClick class="px-4 py-1 bg-blue-600 text-white font-semibold uppercase rounded cursor-pointer " >
                   ${i}
                 </button>`
    arr.push(pushVari)
}
function  buttonAddToPage (){
    button_Div.innerHTML = arr.join(" ")
}
buttonAddToPage()

searchBtn.addEventListener('click',()=>{
    
    card_div.innerHTML = " "
    // IMG_POSTER , TITLE , RANK,AKA , ACTORS , YEAR,


    fetch(apiUrl+inputBtn.value).then(res=>res.json()).then((data)=>{
     const movieDetails =    data.description  
            
             movieDetails.forEach((movies)=>{
                
              console.log(movies)
                
        card_div.innerHTML +=   ` 
                     <div id="movie_box" class="h-100 rounded p-2 border-white border-1 overflow-hidden w-70">
                      <div class="h-1/2" >
                         <img class="h-full w-full object-cover" src=${movies['#IMG_POSTER']} alt="">
                      </div>
                      <div class="flex flex-col gap-1 mt-3 font-semibold text-white ">
                        <p >Titile : ${movies['#TITLE']}</p>
                        <p>ACTORS: ${movies['#ACTORS']}</p>
                        <p>YEAR: ${movies['#YEAR']} </p>
                        <p>RANK : ${movies['#RANK']} </p>
                        <div class="text-right">
                           <button class="px-4 py-1 bg-blue-600 text-white font-semibold  rounded cursor-pointer " >
                    Watch Now
                 </button>
                        </div>
                      </div>        
                </div>
        `
     })
    })
})

