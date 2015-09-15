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



  fain—gladly……“I fain would bake Mr. Love cookies if I could get an A.”

  fie—an exclamation of dismay or disgust……“You cheated?  Fie upon it!” OR “Fie!  Are you mad?”

  hark—listen……. “Hark to the owl,” OR “Hark!  The herald angels sing!”

  hence—away…..“Get thee hence, beggar!”  OR “We must hence before the army arrives.”

  hie—hurry……“Hie thee hence, or lose your life!”

  hither—here…..“Come hither, young lad.”

  thither—there……“Look to the east—thither doth the sun arise.”

  hath—has……… “He hath killed many a man.” OR “He hath a horse.”

  ho—hey (roughly equivalent). “Lucius, ho!”  [Brutus calling his servant]

  mark—pay attention to…….. “Mark my words.”

  marry—indeed……“He says I should respond quickly; marry, I want to.”

  pray/prithee—a polite way of asking something……“I prithee answer the question.”

  saucy—cheeky; sassy……“Hence, thou saucy boy!”

  sirrah—a term of address used for inferiors……“Sirrah, bring the letter over here.”



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
