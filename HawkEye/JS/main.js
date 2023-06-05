var settings={
    "url": "https://gateway.marvel.com:443/v1/public/characters?apikey=4b525502df661367697f4ddc61942a24&hash=1f182aa8b805a294b1d4537e8292b15c&ts=1&name=hawkeye",
    "method": "GET",
    "timeout" :0,
}

$.ajax(settings) .done(function (response) (
    var information
)) 














function Showdate(){
    document.getElementById("dateT")
    document.getElementById("dateShow").innerHTML=Date();
}

document.getElementById("nombreHero").innerHTML="HawkEye"



//VIEJO VIEJO VIEJO

// const marvel ={
//     render:() => {
//         const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?apikey=4b525502df661367697f4ddc61942a24&hash=1f182aa8b805a294b1d4537e8292b15c&ts=1&name=hawkeye';
//         const container = document.querySelector('#marvel-row');
//         let contentHTML ='';

//         fetch(urlAPI)
//         .then(res =>res.json())
//         .then((json) => {
//             for(const hero of json.data.results){
//                 let urlHero = hero.urls[0].url;
                
//                 contentHTML == `              
//                <div class="col-md-4">
//                 <a href="${urlHero}" target="_blank">
//                     <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
//                 </a>
//                 <h3 class="title">${hero.name}</h3>
//                 </div>       `;
                
//             }
//             container.innerHTML= contentHTML;
//         })
//     }
// };

// marvel.render();

//fecha




// var settings = {
//     "url": "https://gateway.marvel.com:443/v1/public/characters?apikey=4b525502df661367697f4ddc61942a24&hash=1f182aa8b805a294b1d4537e8292b15c&ts=1",
//     "method": "GET",
//     "timeout:0"}


// $.ajax(settings).done (function (response)){
//     console.log(response);
// }
//

