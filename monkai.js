//Function for button

function Run(){
  alert("Works");
}

var vid = document.getElementById('monkey_vid');
var lang = document.getElementById('languages');
var sub = 0;
var path = "Monkey_Faces/monkey_face["+sub+"]"
var path = "file:///Users/chadmestres/MonkAI/Monkey_Faces/monkey_face["+sub+"].mp4"


function FilePath(select){

  if (select == "null"){

  }
  if (select == "english"){
    sub = 0;
    path = "file:///Users/chadmestres/MonkAI/Monkey_Faces/monkey_face["+sub+"].mp4"
    vid.src = path;
  }
  if (select == "french"){
    sub = 1;
    path = "file:///Users/chadmestres/MonkAI/Monkey_Faces/monkey_face["+sub+"].mp4"
    vid.src = path;
  }
  if (select == "spanish"){
    sub = 3;
    path = "file:///Users/chadmestres/MonkAI/Monkey_Faces/monkey_face["+sub+"].mp4"
    vid.src = path;
  }
  if (select == "japanese"){
    sub = 2;
    path = "file:///Users/chadmestres/MonkAI/Monkey_Faces/monkey_face["+sub+"].mp4"
    vid.src = path;
  }
  // alert(select);
}

function PlayVid(){

  //if (lang.value == "english"){
    vid.play();

//  }
//  else if (lang.value == "spanish"){

//  }
}
