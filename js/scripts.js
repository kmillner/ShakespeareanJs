var getWords = function(words){
  words = words.replace("are", "art");

  return words;

};

$(document).ready(function() {
  $("form#shakespeare").submit(function(event) {
    var words =($("input#words").val());
    words = getWords(words);

    $(".words").text(words);


     $("#result").show();
    event.preventDefault();
   });
});
