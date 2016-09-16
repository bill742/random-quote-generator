$(document).ready(function() {

  var quoteApi = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";

  // Generate quote content & layout
  function getQuote(){
    $.getJSON(quoteApi, function(json) {
      var output;
      var quoteText = $(json[0].content).text();
      var quoteAuthor = json[0].title;

      // Encode JSON output for Twitter URL
      var encodedText = encodeURIComponent(quoteText);
      var encodedAut = encodeURIComponent(quoteAuthor);
      var tweetUrl = "https://twitter.com/intent/tweet?text=" + encodedText + "%20-%20" +  encodedAut;

      //console.log(tweetUrl);
      output = '<p>' + quoteText + '</p>';
      output += '<p class="quote">- ' + quoteAuthor + '</p>';
      document.getElementById('quote-box').innerHTML = output;
      $(".twitter-share-button").attr("href", tweetUrl);
    });
  }

  // Get quote on page load
  getQuote();

  // Get new quote on button click
  $(".quote-btn").on("click", function(){
      // Load a new quote
      getQuote();
  });

});

// Prevent caching
$.ajaxSetup({ cache: false });
