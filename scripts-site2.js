function scrollNews() {
  var news = document.getElementById("news-bar");
  var newsItems = news.getElementsByTagName("li");
  var width = 0;

  // calculate the width of the news items
  for (var i = 0; i < newsItems.length; i++) {
    width += newsItems[i].offsetWidth;
  }

  // set the width of the ul element to be the width of the news items
  news.getElementsByTagName("ul")[0].style.width = width + "px";

  // animate the ul element to the left
  var pos = 0;
  setInterval(function() {
    pos--;
    news.getElementsByTagName("ul")[0].style.left = pos + "px";
  }, 30);
}

scrollNews();
