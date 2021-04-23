let apiURL = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC";
let userSearch;
let userapiURL;
let randomNumber;
let gifLink;
let gifsNum;

$(".search-button").click(function(){
  userSearch = $(".search-term").val();
  userapiURL = "https://api.giphy.com/v1/gifs/search?q=" + userSearch + "&rating=pg&api_key=dc6zaTOxFJmzC";
  // console.log(userapiURL);
  
  
  fetch(`${userapiURL}`)
      .then(function(response) {
          return response.json();
       })
      .then(function(data) {
          console.log(data.meta.msg);
          gifsNum = data.data.length;
          randomNumber = Math.floor(Math.random() * gifsNum);
          gifLink = data.data[randomNumber].images.original.url;
          console.log(gifLink);
          $(".main").prepend(`<img src=${gifLink}>`);
      });
  
});

