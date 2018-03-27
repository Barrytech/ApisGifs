// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
$(document).ready(function() {

  //input id="srch-term"
  /* $.ajax({
       url: "https://api.giphy.com/v1/stickers/search?q=dog&api_key=dc6zaTOxFJmzC",
       method: "GET",
       success: function(response) {
           
           $('.gallery').html("<img src= "+ response.data[0].images.original.url +">");
           
       },
     }); 
     */

  function giphyURLWithSearchTerm(searchTerm) {
    // write a function that will return a url for the giphy API with
    // the searchTerm provided in the parameters
    var newUrl = 'https://api.giphy.com/v1/stickers/search?q=' + searchTerm + '&api_key=dc6zaTOxFJmzC';

    return newUrl;

  }

  function appendImageToBody(srcURL) {
    // write a function that will append an <img> to the body with the
    // URL provided in the parameters
    $('.gallery').html('<img src=' + srcURL + '>');
    console.log(srcURL);
  }

  function callGiphyAPIWithSearchTerm(searchTerm) {
    $.ajax({
      url: giphyURLWithSearchTerm(searchTerm),
      method: "GET",
      success: function(response) {
        var random = Math.floor(Math.random() * 20);
        var url = response.data[random].images.original.url;
        console.log(url);
        appendImageToBody(url);
      },
    });
}

  //Add a click handler below to call the function when the button is clicked

  $("button").click(function() {
    var input = $("input").val(); 
    callGiphyAPIWithSearchTerm(input);
    //callGiphyAPIWithSearchTerm(input); 
  });


});

/*$(".gallery").click(function() {
  
  
}

*/	
	
	
	/*function deletegif(id){
		response.splice(id, 1);
	callGiphyAPIWithSearchTerm(input);
	}

	$('body').on('click', '.delete', function() {
    	var id = $(this).attr('id');
    	console.log(id);
    	deletegif(id);
	});

*/