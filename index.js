// add solution here
function theBeatlesPlay(musicians, instruments){
  var beatles = [];
  for (var i = 0; i < musicians.length; i++) {
    beatles[i] = musicians[i] + " plays " + instruments[i];
    return beatles[i] +",";
  }
}

function johnLennonFacts(facts){
  var i = 0;
  while(i < facts.length){
  facts[i] = facts[i] + "!!!";
  i++;
}
return facts;
}
