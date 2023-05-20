var settings = {
    "url": "https://gateway.marvel.com:443/v1/public/characters?apikey=e99338b6849b3c965776ffa773e97067&hash=38aa1e9a36b818bf3556710c0b319503&ts=1&limit=100&name=Wonder Woman",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });