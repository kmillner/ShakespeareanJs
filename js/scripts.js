var getLetters = word.length;
var vowels = newArray ("a", "e","i","o","u","y");
  for (v in vowels) {

  }
  words + "ay";
//



$(document).ready(function() {
  $("form#piglatin").submit(function(event) {
    var words =($("input#words").val());
    var wordsArray = words.split("");
    var wordChar = wordsArray.charAt(0);
    //var result = sentence(words);
    return wordsArray;


    $("#result").show();
    event.preventDefault();
  });
});
