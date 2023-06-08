$(document).ready(function() {
  // Mostrar fecha y hora actual
  $('#mostrar-fecha').click(function() {
      var fechaHoraActual = new Date();
      $('#fecha-hora').text('Fecha y hora actual: ' + fechaHoraActual);
  });

  // Mostrar imagen del superhéroe
  $('#mostrar-imagen').click(function() {
      // Limpiar el contenido de la bibliografía, películas, noticias y el formulario de calificación
      $('#bibliografia').empty();
      $('#peliculas').empty();
      $('#noticias').empty();
      $('#calificar-form').trigger('reset');

      var settings = {
          "url": "https://gateway.marvel.com:443/v1/public/characters/1011054?apikey=9e83888a158797f32666e90f066c1247&hash=cafffc5298375bd191421d8a378d2421&ts=1",
          "method": "GET",
          "timeout": 0,
      };

      $.ajax(settings).done(function (response) {
          // Obtener el nombre del superhéroe
          var nombreSuperheroe = response.data.results[0].name;

          // Mostrar el nombre del superhéroe
          $('#nombre-superheroe').text(nombreSuperheroe).css('color', 'white');

          // Obtener la URL de la imagen
          var imageUrl = response.data.results[0].thumbnail.path + '.' + response.data.results[0].thumbnail.extension;

          // Crear un elemento de imagen y establecer su atributo src
          var imageElement = $('<img>').attr('src', imageUrl);

          // Limpiar el contenido previo de la imagen
          $('#imagen').empty();

          // Agregar la imagen al contenedor
          $('#imagen').append(imageElement);
          
      });
  });

  // Mostrar bibliografía del superhéroe
  $('#mostrar-bibliografia').click(function() {
      // Limpiar el contenido de la imagen, películas, noticias y el formulario de calificación
      $('#imagen').empty();
      $('#peliculas').empty();
      $('#noticias').empty();
      $('#calificar-form').trigger('reset');

      var settings = {
          "url": "https://gateway.marvel.com:443/v1/public/characters/1011054/comics?apikey=9e83888a158797f32666e90f066c1247&hash=cafffc5298375bd191421d8a378d2421&ts=1",
          "method": "GET",
          "timeout": 0,
      };

      $.ajax(settings).done(function (response) {
          // Obtener la lista de cómics
          var comics = response.data.results;

          // Obtener el elemento contenedor de la bibliografía
          var bibliografiaElement = $('#bibliografia').css('color', 'white');
          bibliografiaElement.empty(); // Limpiar el contenido previo

          // Crear un contenedor para el carrusel
          var carouselContainer = $('<div>').addClass('carousel-container');

          // Recorrer la lista de cómics y mostrar el título, descripción e imagen de cada uno
          for (var i = 0; i < comics.length; i++) {
              var comic = comics[i];
              var title = comic.title;
              var description = comic.description;
              var imageUrl = comic.thumbnail.path + '.' + comic.thumbnail.extension;

              // Crear elementos para mostrar el título, descripción e imagen
              var titleElement = $('<h3>').text(title);
              var descriptionElement = $('<p>').text(description);
              var imageElement = $('<img>').attr('src', imageUrl);

              // Crear un contenedor para cada cómic
              var comicContainer = $('<div>').addClass('comic-container');
              comicContainer.append(titleElement);
              comicContainer.append(descriptionElement);
              comicContainer.append(imageElement);

              // Agregar el cómic al contenedor del carrusel
              carouselContainer.append(comicContainer);
          }

          // Agregar el carrusel al contenedor de la bibliografía
          bibliografiaElement.append(carouselContainer);

          // Inicializar el carrusel utilizando la biblioteca Slick Carousel
          carouselContainer.slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              dots: true,
              autoplay: true,
              autoplaySpeed: 3000
          });
      });
  });

  // Calcular poderes y mostrar promedio
  $('#calcular-poderes').click(function() {
      // Limpiar el contenido de la calificación
      $('#calificacion-container').empty();

      // Crear el formulario para ingresar los valores de los poderes
      var formularioPoderes = $('<div>').addClass('poderes');
      formularioPoderes.append('<input type="number" id="fuerza" placeholder="Fuerza">');
      formularioPoderes.append('<input type="number" id="disfraz" placeholder="Disfraz">');
      formularioPoderes.append('<input type="number" id="traje" placeholder="Traje">');
      formularioPoderes.append('<input type="number" id="poderes" placeholder="Poderes">');
      formularioPoderes.append('<button id="calcular-promedio">Calcular</button>');

      // Agregar el formulario al contenedor de poderes
      $('#poderes-container').html(formularioPoderes);

      // Calcular promedio al hacer clic en el botón
      $('#calcular-promedio').click(function() {
          var fuerza = parseInt($('#fuerza').val());
          var disfraz = parseInt($('#disfraz').val());
          var traje = parseInt($('#traje').val());
          var poderes = parseInt($('#poderes').val());

          // Validar que los campos estén completos
          if (isNaN(fuerza) || isNaN(disfraz) || isNaN(traje) || isNaN(poderes)) {
              alert('Por favor, complete todos los campos con valores numéricos.');
              return;
          }

          // Calcular el promedio
          var promedio = (fuerza + disfraz + traje + poderes) / 4;

          // Mostrar el promedio
          var calificacionElement = $('<div>').addClass('calificacion');
          calificacionElement.append('<p>Promedio: ' + promedio.toFixed(2) + '</p>');
          $('#calificacion-container').html(calificacionElement);
      });
  });

  // Calificar personaje y enviar formulario por método POST
  $('#calificar-personaje').click(function() {
      // Limpiar el contenido de la calificación
      $('#calificacion-container').empty();

      // Crear el formulario de calificación
      var formularioCalificacion = $('<div>').addClass('calificacion');
      formularioCalificacion.append('<p>Calificación:</p>');
      formularioCalificacion.append('<input type="text" id="nombre-calificacion" placeholder="Nombre">');
      formularioCalificacion.append('<textarea id="comentario-calificacion" placeholder="Comentario"></textarea>');
      formularioCalificacion.append('<button id="enviar-calificacion">Enviar</button>');

      // Agregar el formulario al contenedor de calificación
      $('#calificacion-container').html(formularioCalificacion);

      // Enviar formulario por método POST al hacer clic en el botón
      $('#enviar-calificacion').click(function() {
          var nombre = $('#nombre-calificacion').val();
          var comentario = $('#comentario-calificacion').val();

          // Validar que los campos estén completos
          if (nombre.trim() === '' || comentario.trim() === '') {
              alert('Por favor, complete todos los campos.');
              return;
          }

          // Crear el objeto de calificación
          var calificacion = {
              nombre: nombre,
              comentario: comentario
          };

          // Enviar el objeto de calificación por método POST (aquí debes implementar tu lógica para enviar los datos al servidor)
          // $.post('url_del_servidor', calificacion, function(response) {
          //     console.log(response);
          // });

          // Mostrar mensaje de éxito
          alert('Calificación enviada correctamente.');
      });
  });
});
