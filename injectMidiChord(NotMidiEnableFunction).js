(function() {
    var chordcount = document.getElementsByClassName("chord-pro-note").length;
for ( var x=0 ; x < chordcount; x++)
    { var element = document.getElementsByClassName("chord-pro-note")[x];
        var Chordname = element.innerText;


if (Chordname != "") {
 var Chord = element.getElementsByClassName("matchedChord")[0].innerHTML;
        var Suffix = element.getElementsByClassName("suffix")[0].innerHTML;
        if (Suffix == "")  {Suffix = 0};
    element.innerHTML = ' <button style="border:0.5px solid white; background-color: transparent;" onclick="noteOn(' + Chord +','+ Suffix +')">' + Chordname + '</button>';}}
})();
