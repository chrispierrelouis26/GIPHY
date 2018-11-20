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
$("#store").empty();
  var movieName = $(this).text();
  console.log(movieName);
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movieName + "&api_key=ndWuAICsblVgBieBR4hCc5Kch0AlWtz1&rating=R"
  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);




//create new div and img element
//append images to page
    for (var i = 0; i < response.data.length; i++) {
      var storeGiffs = $("<div>");
      var imageGiffs = $("<img>");
      imageGiffs.attr("src", response.data[i].images.fixed_height_still.url);
      storeGiffs.html(imageGiffs);
      $("#store").append(storeGiffs);
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















// var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=KKltZkbvlUXnSysuY4BNmNFcUWdnjx6V&q=cars&limit=25&offset=0&rating=G&lang=en"