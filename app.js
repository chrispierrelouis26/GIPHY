var topics = ["Movies", "Snowboarding", "Shoes", "Dirtbikes"];
console.log(topics);

for( var i = 0 ; i < topics.length; i++){
    console.log(topics[i]);
    // then generate buttons for each movie in the array

    var btn =$("<button>");
    btn.text(topics[i]);
    $("body").append(btn);
  }


$.ajax({
    url: "https://www.omdbapi.com/?t=romancing+the+stone&y=&plot=short&apikey=trilogy",
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });


