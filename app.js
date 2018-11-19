var topics = ["Movies", "Snowboarding", "Shoes", "Dirtbikes"];
console.log(topics);

for( var i = 0 ; i < topics.length; i++){
    console.log(topics[i]);
    // then generate buttons for each movie in the array

    var btn =$("<button>");
    btn.text(topics[i]);
    $("body").append(btn);
  }

  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=KKltZkbvlUXnSysuY4BNmNFcUWdnjx6V&q=cars&limit=25&offset=0&rating=G&lang=en"

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });


 function getGiphs(search){
   console.log(search)
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=KKltZkbvlUXnSysuY4BNmNFcUWdnjx6V&q="+search+"&limit=25&offset=0&rating=G&lang=en"

  $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });
 }

 getGiphs("planes");
getGiphs("pizza");
getGiphs(search);
