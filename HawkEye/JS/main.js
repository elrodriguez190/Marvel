var settings={
    "url": "https://gateway.marvel.com:443/v1/public/characters/1009338?apikey=4b525502df661367697f4ddc61942a24&hash=1f182aa8b805a294b1d4537e8292b15c&ts=1&limit=100",
    "method": "GET",
    "timeout" :0,
};

$.ajax(settings) .done(function (response) {
    console.log(response);
    var information =response.data.results[0];
    console.log(information);
    console.log(information.thumbnail.path+"."+information.thumbnail.extension)

 
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

    var nombres = document.getElementsByClassName('nombreSuperHeroe');
    nombres.innerHTML = miSuperheroe.name;
    // ImageBitmapRenderingContext.src = miSuperheroe.name;

    var imagen = document.getElementById("imgSuperHeroe");
    imagen.src = miSuperheroe.img;
    console.log(imagen);
}) ;

var character = "prueba";
console.log(character);


//boton fecha
    function Showdate(){
        document.getElementById("dateT")
        document.getElementById("dateShow").innerHTML=Date();
    }
    document.getElementById("nombreHero").innerHTML="HawkEye"


//biografia
    function toggle(obj) {
        var obj=document.getElementById(obj);
        if (obj.style.display == "block") obj.style.display = "none";
        else obj.style.display = "block";
        console.log();
    }


//peliculas
        // function getMovies(){
        //     const information = "http://gateway.marvel.com/v1/public/characters/1009338/series?apikey=4b525502df661367697f4ddc61942a24&hash=1f182aa8b805a294b1d4537e8292b15c&ts=1&limit=100";      
        //     const series= new information;
        //     var pelis = document.getElementById(series);
        //     series.name = information.name;
        //     console.log(pelis);
        // }

//peliculas
var things={
    "url": "http://gateway.marvel.com/v1/public/characters/1009338/series?apikey=4b525502df661367697f4ddc61942a24&hash=1f182aa8b805a294b1d4537e8292b15c&ts=1&limit=100",
    "method": "GET",
    "timeout" :0,
};

$.ajax(things) .done(function getMovies (response) {

}) ;




// $.ajax(settings) .done(function getMovies() {
//     console.log(response);

//         const series= new information;
//         var pelis = document.getElementById(series);
//         series.name = information.name;
//         console.log(pelis);
//     })

    //     var pelis = items.name;
    //     console.log(pelis);
//comics
    function getComics(){
        const items = "http://gateway.marvel.com/v1/public/characters/1009338/comics";      
        var comics = items.name;
        console.log(comics);
    }





//galeria carrousel
const container = document.querySelector("#card-2-projectsList");
let contentHTML = '';

fetch(settings)
  .then(response => response.json())
  .then(data => {

    for (const results of data) {
     contentHTML += `
        <li class="card-2-listContent">
        <img class="card-2-projectImages" src="${results.download_url}">
        </li>`
    }
    container.innerHTML = contentHTML;
  })




    //Guardando datos 
    //llave publica 4b525502df661367697f4ddc61942a24
    //llave privada aac8b70446ec89d9989e3ee9f78b6b3b489f81ba

    // https://gateway.marvel.com:443/v1/public/characters/1009228?apikey=4b525502df661367697f4ddc61942a24&hash=1f182aa8b805a294b1d4537e8292b15c&ts=1&limit=100  --anterior
    //https://gateway.marvel.com:443/v1/public/characters/1009228?apikey=4b525502df661367697f4ddc61942a24&hash=1f182aa8b805a294b1d4537e8292b15c&ts=1&name=hawkeye&id=1009338 --otra anterior
