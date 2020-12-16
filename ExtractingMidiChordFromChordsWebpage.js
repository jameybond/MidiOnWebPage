(function(){
var chordclass = document.getSelection().focusNode.parentElement.className;
var lyricandchordhtml = document.getSelection().anchorNode.parentElement.offsetParent;



var chordcount = lyricandchordhtml.getElementsByClassName(chordclass).length;
for ( var x=0 ; x < chordcount; x++) 
  {var element = lyricandchordhtml.getElementsByClassName(chordclass)[0]; 
   
var chordcap = element.innerText.trim();
   var chordary = chordcap.split("");
     var chordarylen = chordary.length;
     var chord = chordary[0];
     var chordsuf = chordcap.slice(1);
          var difbasenote=0; if(chordary[1] == "/"){difbasenote=1,chordsuf= chordcap.slice(2);};
     if((chordary[1] == "#") || (chordary[1] == "b"))
       {chord = chord+chordary[1]; 
        chordsuf= chordcap.slice(2);
        if(chordary[2] == "/"){difbasenote=1,chordsuf= chordcap.slice(3);};
        };
     var chordtext = ["C", "C#","Db", "D", "D#","Eb", "E", "F", "F#","Gb", "G", "G#","Ab", "A", "A#","Bb", "B"];
     var midinote = [ 60, 61,61,62,63,63,64,65,66,66,67,68,68,69,70,70,71];
     var chordtype = ["m", "dim","sus","M7","m7","add9","7"];
     var chordnot2 = [-1,-1,1,0,-1,0,0];
     var chordnot3 = [0,-1,7,0,0,0,0];
     var chordnot4 = [0,-1,7,-1,-2,2,-2];
     var chordnote1 = chordtext.indexOf(chord);
         chord = chordtext[chordnote1];
         chordnote1 = Number(midinote[chordnote1]); 

     if ( chordsuf ==""){var chordnote2 = 0; var chordnote3 = 0;var chordnote4=0;}
     else if (difbasenote==1){var chordnote2 = 0; var chordnote3 = 0;var chordnote4 = chordtext.indexOf(chordsuf);chordnote4 = Number(midinote[chordnote4])-chordnote1-24;}
     else {var chordnote2 = chordnot2[chordtype.indexOf(chordsuf)]; 
           var chordnote3 = chordnot3[chordtype.indexOf(chordsuf)];
           var chordnote4 = chordnot4[chordtype.indexOf(chordsuf)];
           }
      if (difbasenote==1){chordsuf="/"+chordsuf}
      var ChordTransposed = "noteOn("+ (chordnote1) +","+ (chordnote1+4+chordnote2) + "," + (chordnote1+7+chordnote3)+","+ (chordnote1+12+chordnote4) +")";
      

       
      var att = document.createAttribute("class"); 
      att.value = "chordbutton";                          
      element.setAttributeNode(att);

      att = document.createAttribute("ontouchstart"); 
      att.value = ChordTransposed;                          
      element.setAttributeNode(att);
  }
var x = document.createElement("TEXTAREA");
 var t = document.createTextNode("<pre>" + lyricandchordhtml.innerHTML + "</pre>" );
 x.appendChild(t);

 var att2 = document.createAttribute("onfocus"); 
    att2.value = "this.select();";                          
    x.setAttributeNode(att2);
    
 document.body.appendChild(x);
  })();
