var getWords = function(words){

  var splitWords = words.split(" ");


  for (var i=0; i < splitWords.length; i++) {
    // debugger;
    var word = splitWords[i];

    splitWords[i] = splitWords[i].toLowerCase();
  //  splitWords[i] = splitWords[i].replace(/[.,-?\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    splitWords[i] = splitWords[i].replace("are", "art");
    splitWords[i] = splitWords[i].replace("yes", "aye");
    splitWords[i] = splitWords[i].replace("no", "naye");
    splitWords[i] = splitWords[i].replace("do", "dost");
    splitWords[i] = splitWords[i].replace("before", "ere");
    splitWords[i] = splitWords[i].replace("away", "hence");
    splitWords[i] = splitWords[i].replace("listen", "hark");
    splitWords[i] = splitWords[i].replace("you", "thee");
    splitWords[i] = splitWords[i].replace("your", "thy");
    splitWords[i] = splitWords[i].replace("where", "whither");
    splitWords[i] = splitWords[i].replace("there", "thither");
    splitWords[i] = splitWords[i].replace("over", "ov'r");
    splitWords[i] = splitWords[i].replace("hello", "good morrow");
    splitWords[i] = splitWords[i].replace("hi", "good morrow");
    splitWords[i] = splitWords[i].replace("hey", "good morrow");
    splitWords[i] = splitWords[i].replace("here", "hither");
    splitWords[i] = splitWords[i].replace("why", "wherefor");
    splitWords[i] = splitWords[i].replace("my", "mine");
    splitWords[i] = splitWords[i].replace("cool", "merit");
    splitWords[i] = splitWords[i].replace("eat", "consume");
    splitWords[i] = splitWords[i].replace("does not", "doest not");
    splitWords[i] = splitWords[i].replace("doesn't", "doest not");
    splitWords[i] = splitWords[i].replace("bye", "DOTH LEAVE ME!!!!!");
    splitWords[i] = splitWords[i].replace("please", "prithee");
  }

   var words = splitWords.join();
   words = words.replace(/[,]/g," ");


  return words;



};



$(document).ready(function() {
  $("form#shakespeare").submit(function(event) {
    var words =($("textarea#words").val());
    words = getWords(words);

    $(".words").text(words);


     $("#result").show();
    event.preventDefault();
   });
});
