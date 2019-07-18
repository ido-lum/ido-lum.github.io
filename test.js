var doubleMetaphone = require('double-metaphone')
var levenshtein = require('levenshtein-edit-distance')

/*
function addEvent(node, type, callback) {
  if (node.addEventListener) {
    node.addEventListener(type, function(e) {
      callback(e, e.target);
    }, false);
  } else if (node.attachEvent) {
    node.attachEvent('on' + type, function(e) {
      callback(e, e.srcElement);
    });
  }
}
*/



var rgbToHex = function (rgb) { 
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

var fullColourHex = function(r,g,b) {   
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return red+green+blue;
};

//convert
var Convert = function() {
	var inpu = document.getElementById("input").value;
  console.info(inpu);


	
	//to string
	inpu = String(inpu);
	//parse
	inpu = inpu.split(' ');
	//remove dupes

	var ou = "";
	document.getElementById("output").innerHTML = ou; 

  var count = 0;
	//output to screen with colours
  for (var i = 0; i < inpu.length; i++) {
      
      if(i % 5 == 0 && i != 0)
      {
        document.getElementById("output").innerHTML += '</br>'; 
      }
  		var a = '<span style="background-color:#'  + MapRhymeToColour(inpu[i]) +'">' + inpu[i] + '</span> ';
  		document.getElementById("output").innerHTML += a;  		
      document.getElementById("output").innerHTML += ' '; 
      count++;

       
	}

  document.getElementById("output").innerHTML += ("WordCount = " + count-1);
	/*
  addEvent(document, "change", function(e, field) {
  		convert(field);
	});
  */
  
};

function MapToColour(val)
{
  val = val.toLowerCase();
  val = val.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  
  var col = 0;
  //into numbers
  if(val.length == 1)
  {
    col = fullColourHex((((val.charCodeAt(0)) * 2) % 256), (((val.charCodeAt(0)) * 2) % 256),(((val.charCodeAt(0)) * 2) % 256));
  }
  else if(val.length == 2)
  {
    col = fullColourHex((((val.charCodeAt(0)) * 2) % 256), (((val.charCodeAt(1)) * 2) % 256),(((val.charCodeAt(1)) * 2) % 256));
  }
  else if(val.length == 3)
  {
    col = fullColourHex((((val.charCodeAt(0)) * 2) % 256), (((val.charCodeAt(1)) * 2) % 256),(((val.charCodeAt(2)) * 2) % 256));
  }
  else
  {
    col = fullColourHex((((val.charCodeAt(0)) * 2) % 256), (((val.charCodeAt(1)) * 2) % 256),(((val.charCodeAt(2)) * 2) % 256));
  }
  
  console.info(val + " " + val.length  +" " + col);
  //split by letter
  return col;
}

function MapRhymeToColour(val)
{
  val = val.toLowerCase();
  val = val.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  val = doubleMetaphone(val);
  var r = val[0];
  var g = val[1];
  var b = levenshtein(val[0], val[1]);

  r = parseInt(WordToInt(r) % 256);
  g = parseInt(WordToInt(g) % 256);
  b = b * 12;
  var col = 0;
  //into numbers

  col = fullColourHex(r,g,b);

  
  console.info(val + " " + val.length  +" " + col);
  console.info(r + " " + g  +" " + b);
  //split by letter
  return col;
}

function WordToInt(word)
{
  var out = 0;
  for (var i = 0; i < word.length; i++)
  {
    out += word.charCodeAt(i);
  }
  return out / word.length;
}

window.onload = function() {
    document.getElementById("Buttonian").onclick = function fun() {
        Convert();
        console.info("Analyse pressed.");
        //validation code to see State field is mandatory.  
    }
}

/*
addEvent(document, "change", function(e, target) {
  convert(target);
});

*/