var settings={
    "url": "https://gateway.marvel.com:443/v1/public/characters/1009338?apikey=4b525502df661367697f4ddc61942a24&hash=1f182aa8b805a294b1d4537e8292b15c&ts=1&limit=100",
    "method": "GET",
    "timeout" :0,
}

$.ajax(settings) .done(function (response) {
    console.log(response);
    var information =response.data.results[0];
    console.log(information);
    console.log(information.thumbnail.path+","+information.thumbnail.extension)

    //Guardando datos 
    //llave publica 4b525502df661367697f4ddc61942a24
    //llave privada aac8b70446ec89d9989e3ee9f78b6b3b489f81ba

    // https://gateway.marvel.com:443/v1/public/characters/1009228?apikey=4b525502df661367697f4ddc61942a24&hash=1f182aa8b805a294b1d4537e8292b15c&ts=1&limit=100
    //https://gateway.marvel.com:443/v1/public/characters/1009228?apikey=4b525502df661367697f4ddc61942a24&hash=1f182aa8b805a294b1d4537e8292b15c&ts=1&name=hawkeye&id=1009338

    class SuperHeroe {
        constructor(name, img){
            this.name = name;
            this.img = img;
        }
    }

    const miSuperheroe= new SuperHeroe;
    miSuperheroe.name = information.name;
    miSuperheroe.img = information.thumbnail.path+"."+information.thumbnail.extension;
    console.log(miSuperheroe.name);

    var nombres = document.getElementsById('nombreSuperHeroe');
    ImageBitmapRenderingContext.src = miSuperheroe.name;


    var imagen = document.getElementById("imgSuperHeroe");
    imagen.src = miSuperheroe.img;
    console.log(imagen);

}) ;

var character = "prueba";
console.log(imagen);

//boton fecha
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

