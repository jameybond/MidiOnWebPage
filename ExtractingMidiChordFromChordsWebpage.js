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
          var difbasenote=0; if(chordary[1] == "/"){difbasenote=1;chordsuf= chordcap.slice(2);};
     if((chordary[1] == "#") || (chordary[1] == "b"))
       {chord = chord+chordary[1]; 
        chordsuf= chordcap.slice(2);
        if(chordary[2] == "/"){difbasenote=1;chordsuf=chordcap.slice(3);};
        };
     var chordtext = ["C", "C#","Db", "D", "D#","Eb", "E", "F", "F#","Gb", "G", "G#","Ab", "A", "A#","Bb", "B"];
     var midinote = [ 60, 61,61,62,63,63,64,65,66,66,67,68,68,69,70,70,71];
     var chordtype = ["m","dim","sus","M7","m7","add9","7","2","4","aug","dim","7sus","9","sus2","sus4"];
     var chordnot2 = [-1 , -1  ,  1  , 0  , -1 ,  0   , 0 ,-2 , 0 ,  0  , -1  ,   3  , 0 , -2   ,  1   ];/* increase or decrease from 4*/
     var chordnot3 = [ 0 , -1  ,  7  , 0  ,  0 ,  0   , 0 , 0 , 0 , +1  , -1  ,   4  , 0 ,  0   ,  0   ]; /* increase or decrease from 7*/
     var chordnot4 = [ 0 , -1  ,  7  ,-1  , -2 ,  2   ,-2 , 0 ,-7 ,  0  ,  0  ,   0  , 2 ,  0   ,  0   ]; /* increase or decrease from 12 */
     var chordnote1 = chordtext.indexOf(chord);
         chord = chordtext[chordnote1];
         chordnote1 = Number(midinote[chordnote1]);
     var chordnote2;
     var chordnote3;
     var chordnote4;

     if ( chordsuf ===""){chordnote2 = 0; chordnote3 = 0;chordnote4=0;}
     else if (difbasenote==1){chordnote2 = 0; chordnote3 = 0;chordnote4 = chordtext.indexOf(chordsuf);chordnote4 = Number(midinote[chordnote4])-chordnote1-24;}
     else {chordnote2 = chordnot2[chordtype.indexOf(chordsuf)]; 
           chordnote3 = chordnot3[chordtype.indexOf(chordsuf)];
           chordnote4 = chordnot4[chordtype.indexOf(chordsuf)];
           }
      if (difbasenote==1){chordsuf="/"+chordsuf;}
      var ChordTransposed = "noteOn("+ (chordnote1) +","+ (chordnote1+4+chordnote2) + "," + (chordnote1+7+chordnote3)+","+ (chordnote1+12+chordnote4) +")";
      

       
      var att = document.createAttribute("class"); 
      att.value = "lyricchordbutton";                          
      element.setAttributeNode(att);

      att = document.createAttribute("ontouchstart"); 
      att.value = ChordTransposed;                          
      element.setAttributeNode(att);
  }
var textarea = document.createElement("TEXTAREA");
//var textarea = document.createElement("input");
 var t = document.createTextNode("<pre>" + lyricandchordhtml.innerHTML + "</pre>" );
 textarea.appendChild(t);
  
  //event.clipboardData.setData('text/plain', t);

var att1 = document.createAttribute("style"); 
    att1.value = "width:500px; height:200px;";                          
    textarea.setAttributeNode(att1);
 
  var att1 = document.createAttribute("id"); 
    att1.value = "textarea";                          
    textarea.setAttributeNode(att1);

 var att2 = document.createAttribute("onfocus"); 
    att2.value = "this.select();";                          
    textarea.setAttributeNode(att2);
 
  
document.body.insertBefore(textarea, document.body.childNodes[0]);
  
  var copyBobBtn = document.getElementById("textarea");
  copyBobBtn.addEventListener('click', function(event){document.execCommand('copy');});
  

})();


/*copy(document.getElementsByClassName(textarea));
 document.body.appendChild(x); 
  
  document.getElementById("copyBtn").onclick = function() {
  document.execCommand('copy');
}
  
  
  
  function copy() {
  var copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#textarea").addEventListener("click", copy);

copyBobBtn.addEventListener('click', function(event){ copyTextToClipboard('Bob');});
  
  


function myFunction(x) {
  x.style.background = "yellow";
  x.select();
  document.execCommand("copy");
}


const source = document.querySelector('div.source');

source.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
});


*/
