var getWords = function({
  var words = [];
  words["are"] = "art";

  return words;

});

$(document).ready(function() {
  $("form#shakespeare").submit(function(event) {
    var words =($("input#words").val());

    $("#result").show();
    event.preventDefault();
  });
});
