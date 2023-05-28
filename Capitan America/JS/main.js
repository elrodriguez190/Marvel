//MARVEL
//PUBLIC KEY cbd093341f9c47283d72c430537153c1
//PRIVATE KEY e112f470f3a33e1f797bc92474c7f15b802e9283
// HASH 1e112f470f3a33e1f797bc92474c7f15b802e9283cbd093341f9c47283d72c430537153c1

document.getElementById("nombreSuperHeroe").innerHTML = "Capitan America";


function showdate(){
    document.getElementById("datet");
    document.getElementById("dateShow").innerHTML= Date();
}


function fetchMarvelAPI(endpoint, callback) {
  const ts = Date.now().toString();
  const hash = md5(ts + privateKey + publicKey);
  const url = `https://gateway.marvel.com:443/v1/public/${endpoint}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.log(error));
}

function showBiography() {
  fetchMarvelAPI('characters/1009220', data => {
    const character = data.data.results[0];
    const bio = character.description;
    document.getElementById('content').innerHTML = `<p>${bio}</p>`;
  });
}

function showGallery() {
  fetchMarvelAPI('characters/1009220', data => {
    const character = data.data.results[0];
    const gallery = character.thumbnail.path;
    const extension = character.thumbnail.extension;
    const image = `<img src="${gallery}.${extension}" alt="Capitán América">`;
    document.getElementById('content').innerHTML = image;
  });
}

function showComics() {
  fetchMarvelAPI('characters/1009220/comics', data => {
    const comics = data.data.results;
    let comicsList = '';
    for (let i = 0; i < comics.length; i++) {
      const comic = comics[i];
      comicsList += `<p>${comic.title}</p>`;
    }
    document.getElementById('content').innerHTML = comicsList;
  });
}

function showMovies() {
  fetchMarvelAPI('characters/1009220/series', data => {
    const series = data.data.results;
    let seriesList = '';
    for (let i = 0; i < series.length; i++) {
      const serie = series[i];
      seriesList += `<p>${serie.title}</p>`;
    }
    document.getElementById('content').innerHTML = seriesList;
  });
}

function showNews() {
  document.getElementById('content').innerHTML = '<p>No hay noticias disponibles en este momento.</p>';
}

document.getElementById('bioButton').addEventListener('click', showBiography);
document.getElementById('galleryButton').addEventListener('click', showGallery);
document.getElementById('comicsButton').addEventListener('click', showComics);
document.getElementById('moviesButton').addEventListener('click', showMovies);
document.getElementById('newsButton').addEventListener('click', showNews);

showBiography();
