

var settings = {
    "url": "https://gateway.marvel.com:443/v1/public/characters/1009268?apikey=0e2fe62b37dadc8d4617cea567b3e0e4&hash=11bc80375cf0c79db4939f9066e211d9&ts=1",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    var information = response.data.results[0]
    console.log(information);
  });

    
  class SuperHeroe {
    constructor(nombre, imagen, habilidades, biografia, imgGaleria, listComics, peliculas) {
      this.nombre = information.name;
      this.imagen = information.thumbnail.path+"."+information.extension;
      this.habilidades = "NADA LO MATA Y ES TREMENDO NINJA";
      this.biografia = "FUE UN MARIN DE LA ARMADA DE ESTADOS UNIDOS HASTA QUE DESPUES DE CONOCER EL AMOR DE SU VIDA, FUE DIAGNOSTICADO DE CANCER DESPUES DE ESTO ES RECLUTADO POR UNA ORGANIZACION QUE ALTERA LOS GENES DE LAS PERSONAS PARA DARLES PODERES, EL PROBLEMA CON ESTE PERSONAJE ES QUE DESPUES DE ASQUIRIR SUS PODERES QUEDO COMO UNA UVA PASA ";
      this.imgGaleria = information.thumbnail.path+".jpg";
    }
  }

  const miSuperHeroe= new SuperHeroe;

  miSuperHeroe.name= information.name;
  miSuperHeroe.img=information.thumbnail.path+".jpg";
  miSuperHeroe.habilidades
  console.log(nombre);

  var nombre= document.getElementById('nombre');
  nombre.innerHTML= miSuperHeroe.name;

  var imagen= document.getElementById('imgSuperHeroe');
  imagen.src = miSuperHeroe.img;
  console.log(imagen)

  var habilidades = document.getElementById('habilidades');
  habilidades.innerHTML="NADA LO MATA Y ES TREMENDO NINJA"