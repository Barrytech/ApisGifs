// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
$(document).ready(function(){
  
  //input id="srch-term"
  $.ajax({
      url: "https://api.giphy.com/v1/stickers/search?q=dog&api_key=dc6zaTOxFJmzC",
      method: "GET",
      success: function(response) {
          
          $('.gallery').html("<img src= "+ response.data[0].images.original.url +">");
          
      },
    }); 

  
  
  
});
