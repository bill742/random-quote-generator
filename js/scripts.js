$(document).ready(function(){function t(){$.getJSON(e,function(t){var e,n=$(t[0].content).text(),o=t[0].title,c=encodeURIComponent(n),r=encodeURIComponent(o),p="https://twitter.com/intent/tweet?text="+c+"%20-%20"+r;e="<p>"+n+"</p>",e+='<p class="quote">- '+o+"</p>",document.getElementById("quote-box").innerHTML=e,$(".twitter-share-button").attr("href",p)})}var e="http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";t(),$(".quote-btn").on("click",function(){t()})}),$.ajaxSetup({cache:!1});