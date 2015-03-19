var titleCase = function(userTitle) {
  var finalArray = [];
  var exceptions = ["a", "an", "and", "the", "for", "but", "or", "of"];
  var wordArray = userTitle.split(" ");
  var firstWord = wordArray.shift();
  finalArray.push(firstWord[0].toUpperCase() + firstWord.slice(1));
  wordArray.forEach(function(word) {
    if (exceptions.indexOf(word) === -1) {
      finalArray.push(word[0].toUpperCase() + word.substr(1).toLowerCase());
    } else {
      finalArray.push(word.toLowerCase());
    }
  });
  return(finalArray.join(" "));
};

$(document).ready(function() {
  $("form#title_case").submit(function(event) {
    var rawTitle = $("input#input").val();
    var result = titleCase(rawTitle);

    $(".title-case").text(result);
    event.preventDefault();
  });
});



