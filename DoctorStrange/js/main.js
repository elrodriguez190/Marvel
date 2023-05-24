
// PRIVATE KEY = d81e24bcc2290b69d57148050ff4931dd0a25a34
// PUBLIC KEY = 70031dc06acb6dffbae109e663e5a71e

const ts = '23/05/2023, 22:00';
const apykey = '70031dc06acb6dffbae109e663e5a71e';
const hash = '9ed5df72ed91d825c888170095979584';
// const idDoctorStrange = '1009282';
const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${ apykey }&ts=${ ts }&hash=${ hash }`
class SuperHero {
    constructor(
        name,
        image,
        biography,
        gallery, 
        comics, 
        movies,
        news,
        scores,
    ){
    this.name = name;
    this.image = image;
    this.biography = biography;
    this.gallery = gallery;
    this.comics = comics;
    this.movies = movies;
    this.news = news;
    this.scores = scores;
    }

    principalPage () {
        
    }
    
    biography () {

    }

    gallery () {

    }

    comicsAndMovies () {

    }

    news () {

    }

    contactForm () {
        
    }

    calculator () {

    }
}


function ShowDate () {
    document.getElementById('dateShow').innerHTML = Date();
}
