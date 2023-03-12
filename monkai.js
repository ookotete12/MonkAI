//Function for button

var vid = document.getElementById('monkey_vid');
var lang = document.getElementById('languages');
var sub = 0;
var path = "Monkey_Faces/monkey_face["+sub+"]"



if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
    'hello': function() {
      PlayVid();
    },

    'hi': function() {
      PlayVid();
    }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}

function Run(){
  alert("Works");
}



function FilePath(select){

  if (select == "null"){

  }
  if (select == "english"){
    sub = 0;
    path = "/Monkey_Faces/monkey_face["+sub+"].mp4"
    vid.src = path;
  }
  if (select == "french"){
    sub = 1;
    path = "/Monkey_Faces/monkey_face["+sub+"].mp4"
    vid.src = path;
  }
  if (select == "japanese"){
    sub = 2;
    path = "/Monkey_Faces/monkey_face["+sub+"].mp4"
    vid.src = path;
  }
  if (select == "spanish"){
    sub = 3;
    path = "/Monkey_Faces/monkey_face["+sub+"].mp4"
    vid.src = path;
  }
  if (select == "korean"){
    sub = 4;
    path = "/Monkey_Faces/monkey_face["+sub+"].mp4"
    vid.src = path;
  }
  if (select == "chinese"){
    sub = 5;
    path = "/Monkey_Faces/monkey_face["+sub+"].mp4"
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
