

function Showdate(){
    document.getElementById("dateT")
    document.getElementById("dateShow").innerHTML=Date();
 }

document.getElementById("nombreHero").innerHTML="HawkEye"


const marvel ={
    render:() => {
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?apikey=4b525502df661367697f4ddc61942a24&hash=1f182aa8b805a294b1d4537e8292b15c&ts=1';
        const container = document.querySelector('#marvel-row');
        let contentHTML ='';

        fetch(urlAPI)
        .then(res =>res.json())
        .then((json) => {
            for(const hero of json.data.results){
                let
            }
        })
    }
};

marvel.render();

// var settings = {
//     "url": "https://gateway.marvel.com:443/v1/public/characters?apikey=4b525502df661367697f4ddc61942a24&hash=1f182aa8b805a294b1d4537e8292b15c&ts=1",
//     "method": "GET",
//     "timeout:0"}


// $.ajax(settings).done (function (response)){
//     console.log(response);
// }

