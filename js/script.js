let apiURL = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC"
let userSearch;
let userapiURL;
let randomNumber;
let gifLink;

$(".search-button").click(function(){
  userSearch = $(".search-term").val();
  userapiURL = "https://api.giphy.com/v1/gifs/search?q=" + userSearch + "&rating=pg&api_key=dc6zaTOxFJmzC";
  console.log(userapiURL);
  
  
  fetch(`${userapiURL}`)
      .then(function(response) {
          return response.json();
       })
      .then(function(data) {
          randomNumber = Math.floor(Math.random() * 50);
          gifLink = data.data[randomNumber].url;
          console.log(gifLink);
          $(".main").html(`<img src=${gifLink}>`);
      });
  
});

