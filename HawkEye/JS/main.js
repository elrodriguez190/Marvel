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

    

//biografia, calc
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

//peliculas informatios = pelis

function getMovies(){
    var things={
        "url": "http://gateway.marvel.com/v1/public/characters/1009338/series?apikey=4b525502df661367697f4ddc61942a24&hash=1f182aa8b805a294b1d4537e8292b15c&ts=1&limit=100",
        "method": "GET",
        "timeout" :0,
    };
    
    $.ajax(things) .done(function (response) {
        console.log(response);
        var information =response.data.results[0];
        console.log(information);
        console.log(information.series.path+"."+information.series.extension)
    
        class Serie {
            constructor(name, serie){
                this.name = name;
                this.serie = serie;
            }
        }
    
        const misPelis= new Serie;
        misPelis.name = information.name;
        misPelis.serie = information.thumbnail+"."+information.series.extension;
        console.log(misPelis.name);
    
        var nombres = document.getElementsByClassName('Serie');
        nombres.innerHTML = misPelis.name;
    
        var pelis = document.getElementById("serieSuperHeroe");
        pelis.src = misPelis.serie;
        console.log(pelis);
    }) ;
    
}

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
        
        url = "https://gateway.marvel.com/v1/public/characters/";
        character_id = 1009338 ;
        resource_type = "comics";
        api_key = "4b525502df661367697f4ddc61942a24&";
        var request_url = url + String(character_id) + "/" + resource_type + "?apikey=" + api_key;
        
        response = request.get(request_url)
        response_json = response.json()
        
        comics = response_json["data"]["results"]
        for (comic in comics){
            title = comic['title']
            description = comic['description']
            print(title, description)
        }
            
    }



    // var infor = {
    //     "url": "http://gateway.marvel.com/v1/public/characters/1009338/series?apikey=4b525502df661367697f4ddc61942a24&hash=1f182aa8b805a294b1d4537e8292b15c&ts=1&limit=100",
    //     "method": "GET",
    //     "timeout": 0,
    // };






//galeria carrousel 

//   const imagenesDiv = document.getElementById("imagenes");

//   fetch()
//     .then(respuesta => respuesta.json())
//     .then(data => {
//       data.forEach(imagen => {
//         const imagenElement = document.createElement("img");
//         imagenElement.src = imagen.src;
//         imagenesDiv.appendChild(imagenElement);
//       });
//     })
//     .catch(error => console.error(error));

axios.get('"https://gateway.marvel.com:443/v1/public/characters/1009338?apikey=4b525502df661367697f4ddc61942a24&hash=1f182aa8b805a294b1d4537e8292b15c&ts=1&limit=100"')
    .then(function (response) {
        crearCarrusel(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    function crearCarrusel(imagenes) {
        var carousel = document.getElementById('carouselExampleSlidesOnly');
      
        // agregar imagenes al carrusel
        imagenes.forEach(function (imagen, index) {
          var divItem = document.createElement('div');
          divItem.className = 'carousel-item';
      
          if (index === 0) {
            divItem.classList.add('active');
          }
      
          var img = document.createElement('img');
          img.className = 'd-block w-100';
          img.src = imagen.url;
      
          divItem.appendChild(img);
          carousel.querySelector('.carousel-inner').appendChild(divItem);
        });
      }

    ;

    
//formulario superheroe
function mostrarForm(){ 
    var formulario = document.getElementById('Formulario');
    formulario.style.display = "block";  
  }
  









    //Guardando datos 
    //llave publica 4b525502df661367697f4ddc61942a24
    //llave privada aac8b70446ec89d9989e3ee9f78b6b3b489f81ba

    // https://gateway.marvel.com:443/v1/public/characters/1009228?apikey=4b525502df661367697f4ddc61942a24&hash=1f182aa8b805a294b1d4537e8292b15c&ts=1&limit=100  --anterior
    //https://gateway.marvel.com:443/v1/public/characters/1009228?apikey=4b525502df661367697f4ddc61942a24&hash=1f182aa8b805a294b1d4537e8292b15c&ts=1&name=hawkeye&id=1009338 --otra anterior
