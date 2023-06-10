
const ts = "1";
const apykey = "70031dc06acb6dffbae109e663e5a71e";
const hash = "9ed5df72ed91d825c888170095979584";
const url = "https://gateway.marvel.com:443/v1/public/";

class SuperHero {
  constructor(name, image, biography, gallery, comics, movies, news, scores) {
    this.name = name;
    this.image = image;
    this.biography = biography;
    this.gallery = gallery;
    this.comics = comics;
    this.movies = movies;
    this.news = news;
    this.scores = scores;
  }

  principalPage() {
    document.querySelector("#nav-nameHero").innerHTML = this.name;
    document.querySelector("#nav-imgHero").src = this.image;
    document.querySelector("#prin-titleNameHero").innerHTML = this.name;
    document.querySelector("#prin-imgHero").src = this.image;
    document.querySelector("#prin-infoHero").href =
      "https://www.marvel.com/characters/doctor-strange-stephen-strange";
  }

  infoBiography() {
    const iframe = document.createElement('iframe');
    iframe.width="560"
    iframe.height="315"
    iframe.src="https://www.youtube.com/embed/An9-k8cJsLA"
    iframe.title="YouTube video player"
    iframe.frameborder="0"
    iframe.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    iframe.setAttribute('allowfullscreen', true)
    const card = document.querySelector("#bio-card");
    card.insertAdjacentElement('beforeend', iframe);
  }

  carrouselGallery() {
    
    this.gallery[0].map(async (comic, index) => {
        if(index < 10){
            const uri = comic.resourceURI;
            const response = await fetch(
              `${uri}?apikey=${apykey}&ts=${ts}&hash=${hash}`
            );
            const {
              data: { results },
            } = await response.json();

            document.querySelector(`#gal-carrouselItemImg${ index + 1 }`).src = `${results[0].thumbnail.path}.${results[0].thumbnail.extension}`;
        }
    });
  }

  comicsAndMovies() {
     this.comics.map(async (comic, index) => {
        if(index < 12){
            let table = document.querySelector("#com-table");
            const uri = comic.resourceURI;
            const response = await fetch(
              `${uri}?apikey=${apykey}&ts=${ts}&hash=${hash}`
            );
            const {
              data: { results },
            } = await response.json();

            const tablelItemImg = document.createElement('img');
            tablelItemImg.className = 'h-auto max-w-full rounded-lg';
            tablelItemImg.src = `${results[0].thumbnail.path}.${results[0].thumbnail.extension}`;

            const tablelItem = document.createElement('div');
            tablelItem.append(tablelItemImg);
            
            table.insertAdjacentElement(
              "afterbegin", tablelItem
            );
        }
    });
  }

  newsInfo() {
    this.news.map(async (news, index) => {
        if(index < 5){
            const uri = news.resourceURI;
            const response = await fetch(
              `${uri}?apikey=${apykey}&ts=${ts}&hash=${hash}`
            );
            const {
              data: { results },
            } = await response.json();

            document.querySelector(`#new-carrouselItemImg${ index + 1 }`).src = `${results[0].thumbnail.path}.${results[0].thumbnail.extension}`;
        }
    });
  }

  contactForm() {}

  calculator() {
  }
}

async function ShowDate() {
  let nameHero = document.querySelector("#nameHero").value;
  const response = await fetch(
    `${url}characters?apikey=${apykey}&ts=${ts}&hash=${hash}&name=${nameHero}`
  );
  const {
    data: { results },
  } = await response.json();
  const superHeroInfo = results[0];
  let superHero = new SuperHero(
    superHeroInfo.name,
    `${superHeroInfo.thumbnail.path}.${superHeroInfo.thumbnail.extension}`,
    superHeroInfo.description,
    [superHeroInfo.series.items, superHeroInfo.comics.items],
    superHeroInfo.comics.items,
    superHeroInfo.series.items,
    superHeroInfo.events.items
  );

  superHero.principalPage();
  superHero.carrouselGallery();
  superHero.infoBiography();
  superHero.comicsAndMovies();
  superHero.newsInfo();
  superHero.contactForm();
  superHero.calculator();
  document.querySelector("#nav-marvel").classList.remove("hidden");
  document.querySelector("#principal-marvel").classList.remove("hidden");
  document.getElementById("dateShow").innerHTML = Date();
}

const showContent = (nameTab) => {
  switch (nameTab) {
    case "principal-marvel":
      const principal = document.querySelector("#principal-marvel");
      principal.classList.remove("hidden");
      // document.querySelector('#tab-principal').ariaCurrent = "page";
      document.querySelector("#biography-marvel").classList.add("hidden");
      document.querySelector("#gallery-marvel").classList.add("hidden");
      document.querySelector("#comics-marvel").classList.add("hidden");
      document.querySelector("#news-marvel").classList.add("hidden");
      document.querySelector("#contact-marvel").classList.add("hidden");
      document.querySelector("#calculator-marvel").classList.add("hidden");
      break;
    case "biography-marvel":
      const bio = document.querySelector("#biography-marvel");
      bio.classList.remove("hidden");
      // document.querySelector('#tab-biography').ariaCurrent = "page";
      document.querySelector("#principal-marvel").classList.add("hidden");
      document.querySelector("#gallery-marvel").classList.add("hidden");
      document.querySelector("#comics-marvel").classList.add("hidden");
      document.querySelector("#news-marvel").classList.add("hidden");
      document.querySelector("#contact-marvel").classList.add("hidden");
      document.querySelector("#calculator-marvel").classList.add("hidden");
      break;
    case "gallery-marvel":
      const gallery = document.querySelector("#gallery-marvel");
      gallery.classList.remove("hidden");
      // document.querySelector('#tab-gallery').ariaCurrent = "page";
      document.querySelector("#principal-marvel").classList.add("hidden");
      document.querySelector("#biography-marvel").classList.add("hidden");
      document.querySelector("#comics-marvel").classList.add("hidden");
      document.querySelector("#news-marvel").classList.add("hidden");
      document.querySelector("#contact-marvel").classList.add("hidden");
      document.querySelector("#calculator-marvel").classList.add("hidden");
      break;
    case "comics-marvel":
      const comics = document.querySelector("#comics-marvel");
      comics.classList.remove("hidden");
      // document.querySelector('#tab-comics').ariaCurrent = "page";
      document.querySelector("#principal-marvel").classList.add("hidden");
      document.querySelector("#biography-marvel").classList.add("hidden");
      document.querySelector("#gallery-marvel").classList.add("hidden");
      document.querySelector("#news-marvel").classList.add("hidden");
      document.querySelector("#contact-marvel").classList.add("hidden");
      document.querySelector("#calculator-marvel").classList.add("hidden");

      break;
    case "news-marvel":
      const news = document.querySelector("#news-marvel");
      news.classList.remove("hidden");
      // document.querySelector('#tab-news').ariaCurrent = "page";
      document.querySelector("#principal-marvel").classList.add("hidden");
      document.querySelector("#biography-marvel").classList.add("hidden");
      document.querySelector("#gallery-marvel").classList.add("hidden");
      document.querySelector("#comics-marvel").classList.add("hidden");
      document.querySelector("#contact-marvel").classList.add("hidden");
      document.querySelector("#calculator-marvel").classList.add("hidden");
      break;
    case "contact-marvel":
      const contact = document.querySelector("#contact-marvel");
      contact.classList.remove("hidden");
      // document.querySelector('#tab-contact').ariaCurrent = "page";
      document.querySelector("#principal-marvel").classList.add("hidden");
      document.querySelector("#biography-marvel").classList.add("hidden");
      document.querySelector("#gallery-marvel").classList.add("hidden");
      document.querySelector("#comics-marvel").classList.add("hidden");
      document.querySelector("#news-marvel").classList.add("hidden");
      document.querySelector("#calculator-marvel").classList.add("hidden");
      break;
    case "calculator-marvel":
      const calculator = document.querySelector("#calculator-marvel");
      calculator.classList.remove("hidden");
      // document.querySelector('#tab-calculator').ariaCurrent = "page";
      document.querySelector("#principal-marvel").classList.add("hidden");
      document.querySelector("#biography-marvel").classList.add("hidden");
      document.querySelector("#gallery-marvel").classList.add("hidden");
      document.querySelector("#comics-marvel").classList.add("hidden");
      document.querySelector("#news-marvel").classList.add("hidden");
      document.querySelector("#contact-marvel").classList.add("hidden");
      break;
    default:
      break;
  }
};

window.addEventListener('load', () => {
  let form = document.querySelector('#form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let result;
    const typeOperation = document.querySelector("#underline_select").value
    const firstNum = document.querySelector("#firstNum").value
    const secondNum = document.querySelector("#secondNum").value
    console.log(typeOperation);
    console.log(form);
    console.log(form);
  
    switch (typeOperation) {
      case 'MUL':
        result =  firstNum * secondNum;
        document.querySelector("#result-operation").innerHTML = `El resultado es: ${result}`
        break;
      case 'DIV':
        result =  firstNum / secondNum;
        document.querySelector("#result-operation").innerHTML = `El resultado es: ${result}`
        break;
      case 'RES':
        result =  firstNum - secondNum;
        document.querySelector("#result-operation").innerHTML = `El resultado es: ${result}`
        break;
      case 'SUM':
        result =  firstNum + secondNum;
        document.querySelector("#result-operation").innerHTML = `El resultado es: ${result}`
        break;
    
      default:
        document.querySelector("#result-operation").innerHTML = `Debes escoger una operador.`
        break;
    }
  })
})
