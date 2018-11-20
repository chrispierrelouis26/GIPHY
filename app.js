var movies = ["Cars", "Lion King", "Insidious", "Step Brother"];
console.log(movies);
function start(){
  $("#button-area").empty();
  for (var i = 0; i < movies.length; i++) {
    console.log(movies[i]);
    //generate buttons for each movie in the array
  
  
    // when button is clicked get value of input and add to array
  
    // when button is clicked show giphys page
  
    var btn = $("<button>");
    btn.addClass("press");
    btn.text(movies[i]);
    $("#button-area").append(btn);
  }

}
start();

// var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=KKltZkbvlUXnSysuY4BNmNFcUWdnjx6V&q=cars&limit=25&offset=0&rating=G&lang=en"

$(".press").on("click", function () {
console.log("button");
  var movieName = $(this).text();
  console.log(movieName);
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movieName + "&api_key=ndWuAICsblVgBieBR4hCc5Kch0AlWtz1&rating=G"
  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);


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


  //onclick for button from html
$("#submit").on("click", function () {
  event.preventDefault();
  var addButton = $("#addbutton").val(); 
  movies.push(addButton);
  console.log(movies);
  start();
  

})