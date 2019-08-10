(function() {
var selectedElement = window.getSelection().anchorNode.parentNode;
var selectedclass = selectedElement.className;
var buts = document.getElementsByClassName(selectedclass);

for (var i=0; i <buts.length; i++){
  
  var chordcap = buts[i].innerHTML;
  chordcap =chordcap.trim(); alert(chordcap);
  var chordary = chordcap.split("");
  var chordarylen = chordary.length;
  var chord = chordary[0];
  var chordsuf = chordcap.slice(1);  
  if((chordary[1] == "#") || (chordary[1] == "b")){chord = chord+chordary[1]; chordsuf= chordcap.slice(2)};
  var chordtext = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  var midinote = [ 60, 61,62,63,64,65,66,67,68,69,70,71];
  var chordtype = ["m", "dim" , "sus"]
  var chordnot2 = [-1,-1,1 ]
  var chordnot3 = [0,-1,7]
  var a = chordtext.indexOf(chord);

  chord = chordtext[a]; 

if ( chordsuf =="") {var c = 0; var d = 0 }  
else {var c = chordnot2[chordtype.indexOf(chordsuf)]; var d = chordnot3[chordtype.indexOf(chordsuf)]};


var ChordTransposed = "noteOn("+ (Number(midinote[a])) +","+ (Number(midinote[a])+4+c) + "," + (Number(midinote[a])+7+d) +")";
buts[i].removeAttribute("class");

 buts[i].innerHTML = '<button style="border:0.5px solid white; background-color: transparent;" onclick='+ChordTransposed +'>' + chord + chordsuf  + '</button>';
}
})();  
