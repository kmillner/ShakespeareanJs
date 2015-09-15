var getWords = function(words){
  words = words.toLowerCase();
  words = words.replace("are", "art");
  words = words.replace("yes", "aye");
  words = words.replace("no", "naye");
  words = words.replace("do", "dost");
  words = words.replace("before", "ere");
  words = words.replace("away", "hence");
  words = words.replace("listen", "hark");
  words = words.replace("you", "thee");
  words = words.replace("your", "thy");
  words = words.replace("where", "whither");
  words = words.replace("there", "thither");
  words = words.replace("over", "ov'r");
  words = words.replace("hello", "good morrow");
  words = words.replace("here", "hither");
  words = words.replace("why", "wherefor");
  words = words.replace("my", "mine");
  words = words.replace("cool", "merit");
  words = words.replace("eat", "consume");
  words = words.replace("does not", "doest not");
  words = words.replace("doesn't", "doest not");




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
