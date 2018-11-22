//Array of movies
var movies = ["Cars", "Lion King", "Insidious", "Step Brother"];
console.log(movies);

// TODO:
// when new button is clicked, remove current giphs and display the new ones
// maybe add some style 
//created start function so when any button is pressed giphy appears
// when button is clicked get value of input and add to array
function start(){
  
  for (var i = 0; i < movies.length; i++) {
    console.log(movies[i]);
    //generate buttons for each movie in the array
    var btn = $("<button>");
    btn.addClass("press");
    btn.text(movies[i]);
    $("#button-area").append(btn);
  }

}
//call start function
start();


//GIPHY URL AND API
//AJAX CALL
$("body").on("click",'.press' , function () {
console.log("button");
$("#results").empty();
  var movieName = $(this).text();
  console.log(movieName);
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movieName + "&api_key=ndWuAICsblVgBieBR4hCc5Kch0AlWtz1&rating=R&limit=10&width=200px&"
  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);


//create new div and img element
//append images to page

    for (var i = 0; i < response.data.length; i++) {
      var storeGiffs = $("<div class ='images'>");
      var imageGiffs = $("<img>");
      imageGiffs.addClass("gif-image");
      imageGiffs.attr("src", response.data[i].images.fixed_height_still.url);
      imageGiffs.attr("data-still", response.data[i].images.fixed_height_still.url);
      imageGiffs.attr("data-state", "still");
      imageGiffs.attr("data-animate", response.data[i].images.fixed_height.url);
      storeGiffs.append(imageGiffs);
      storeGiffs.append("<p>" + response.data[i].rating + "</p>");
      storeGiffs.append("<p>" + response.data[i].trending_datetime + "</p>");
      console.log(response.data[i].rating);
      $("#results").append(storeGiffs);
      console.log(response.data[i].images.fixed_height_still.url);
    }
  });
})


  //onclick from button id
$("#submit").on("click", function () {
  event.preventDefault();
  var addButton = $("#addbutton").val(); 
  $("#button-area").append("<button class ='press'>" + addButton + "</button>");
  movies.push(addButton);
  console.log(movies);
  
  
  

})

//when clicked gifs will animate/still
//
$(document).on("click", ".gif-image", function(event) {
  event.preventDefault();
  var state = $(this).attr("data-state");
  var animateUrl = $(this).attr("data-animate");
  var stillUrl = $(this).attr("data-still");
  if(state === "still") {
      // lets animate the img
      // switch the src attribute to the value of data-animate
      $(this).attr("src", animateUrl);
      // set the data-state value to "animate"
      $(this).attr("data-state", "animate");
      // play the cat sound
  } else {
      // lets make it still
      // switch the src attribute to the value of data-still
      $(this).attr("src", stillUrl);
      // set the data-state value to "still"
      $(this).attr("data-state", "still");
  }
});












// var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=KKltZkbvlUXnSysuY4BNmNFcUWdnjx6V&q=cars&limit=25&offset=0&rating=G&lang=en"