// week 4, day 4-5, challange 3
// Is the Word Singular or Plural?

function isPlural(word) {
	if (word.slice(-1)=="s") {
    pluralOrSingular = "Plural"
  } else {
    pluralOrSingular = "Singular"
  };
  print(word + " is " + pluralOrSingular);

  // to show the result on your console use
  // console.log(word + " is " + pluralOrSingular);
};

isPlural("changes");
isPlural("change");
isPlural("dudes");
isPlural("magic");