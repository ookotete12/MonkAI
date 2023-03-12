//Function for button

var vid = document.getElementById('monkey_vid');
var lang = document.getElementById('languages');
var sub = 0;
var path = "Monkey_Faces/monkey_face["+sub+"]"
var path1 = "/Monkey_Faces/English/good.mp4"
var path2 = "/Monkey_Faces/English/howyou.mp4"
var path3 = "/Monkey_Faces/English/wonderful.mp4"
var path4 = "/Monkey_Faces/English/goodbyes.mp4"
var vid2 = document.getElementById('monkey2');
var vid3 = document.getElementById('monkey3');
var vid4 = document.getElementById('monkey4');
var vid5 = document.getElementById('monkey5');
vid2.style.display = 'none';
vid3.style.display = 'none';
vid4.style.display = 'none';
vid5.style.display = 'none';
var delayInMilliseconds = 3000;



if (annyang) {
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
    'hello': function() {
      vid.style.display = 'block';
      vid2.style.display = 'none';
      vid3.style.display = 'none';
      vid4.style.display = 'none';
      vid5.style.display = 'none';
      PlayVid();
    },

    'hi': function() {
      vid.style.display = 'block';
      vid2.style.display = 'none';
      vid3.style.display = 'none';
      vid4.style.display = 'none';
      vid5.style.display = 'none';
      PlayVid();
    },

    'how are you': function() {
      vid2.src = path1;
      vid2.style.display = 'block';
      vid.style.display = 'none';
      vid3.style.display = 'none';
      vid4.style.display = 'none';
      vid5.style.display = 'none';
      PlayVid2();
      setTimeout(function(){
        vid3.src = path2;
        vid3.style.display = 'block';
        vid2.style.display = 'none';
        vid.style.display = 'none';
        vid4.style.display = 'none';
        vid5.style.display = 'none';
        PlayVid3();
      }, delayInMilliseconds);


    },

    "i'm doing well": function() {
      vid4.src = path3;
      vid4.style.display = 'block';
      vid.style.display = 'none';
      vid3.style.display = 'none';
      vid2.style.display = 'none';
      vid5.style.display = 'none';
      PlayVid4();
    },

    "i'm good": function() {
      vid4.src = path3;
      vid4.style.display = 'block';
      vid.style.display = 'none';
      vid3.style.display = 'none';
      vid2.style.display = 'none';
      vid5.style.display = 'none';
      PlayVid4();
    },

    "goodbye": function() {
      vid5.src = path4;
      vid5.style.display = 'block';
      vid.style.display = 'none';
      vid3.style.display = 'none';
      vid4.style.display = 'none';
      vid2.style.display = 'none';
      PlayVid5();
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
    path = "/Monkey_Faces/English/monkey_face["+sub+"].mp4"
    path1 = "/Monkey_Faces/English/good.mp4"
    path2 = "/Monkey_Faces/English/howyou.mp4"
    path3 = "/Monkey_Faces/English/wonderful.mp4"
    path4 = "/Monkey_Faces/English/goodbyes.mp4"
    vid.src = path;

  }
  if (select == "french"){
    sub = 1;
    path = "/Monkey_Faces/French/monkey_face["+sub+"].mp4"
    path1 = "/Monkey_Faces/French/good.mp4"
    path2 = "/Monkey_Faces/French/howyou.mp4"
    path3 = "/Monkey_Faces/French/wonderful.mp4"
    path4 = "/Monkey_Faces/French/goodbyes.mp4"
    vid.src = path;
  }
  if (select == "japanese"){
    sub = 2;
    path = "/Monkey_Faces/Japanese/monkey_face["+sub+"].mp4"
    vid.src = path;
  }
  if (select == "spanish"){
    sub = 3;
    path = "/Monkey_Faces/Spanish/monkey_face["+sub+"].mp4"
    path1 = "/Monkey_Faces/Spanish/good.mp4"
    path2 = "/Monkey_Faces/Spanish/howyou.mp4"
    path3 = "/Monkey_Faces/Spanish/wonderful.mp4"
    path4 = "/Monkey_Faces/Spanish/goodbyes.mp4"
    vid.src = path;
  }
  if (select == "korean"){
    sub = 4;
    path = "/Monkey_Faces/Korean/monkey_face["+sub+"].mp4"
    path1 = "/Monkey_Faces/Korean/good.mp4"
    path2 = "/Monkey_Faces/Korean/howyou.mp4"
    path3 = "/Monkey_Faces/Korean/wonderful.mp4"
    path4 = "/Monkey_Faces/Korean/goodbyes.mp4"
    vid.src = path;
  }
  if (select == "mandarin"){
    sub = 5;
    path = "/Monkey_Faces/Mandarin/monkey_face["+sub+"].mp4"
    path1 = "/Monkey_Faces/Mandarin/good.mp4"
    path2 = "/Monkey_Faces/Mandarin/howyou.mp4"
    path3 = "/Monkey_Faces/Mandarin/wonderful.mp4"
    path4 = "/Monkey_Faces/Mandarin/goodbyes.mp4"
    vid.src = path;
  }
  if (select == "indonesian"){
    sub = 6;
    path = "/Monkey_Faces/Indonesian/monkey_face["+sub+"].mp4"
    path1 = "/Monkey_Faces/Indonesian/good.mp4"
    path2 = "/Monkey_Faces/Indonesian/howyou.mp4"
    path3 = "/Monkey_Faces/Indonesian/wonderful.mp4"
    path4 = "/Monkey_Faces/Indonesian/goodbyes.mp4"
    vid.src = path;
  }
}

function PlayVid(){
  //if (lang.value == "english"){
    vid.play();

//  }
//  else if (lang.value == "spanish"){

//  }
}

function PlayVid2(){
  //if (lang.value == "english"){
    vid2.play();
}
function PlayVid3(){
  //if (lang.value == "english"){
    vid3.play();
}
function PlayVid4(){
  //if (lang.value == "english"){
    vid4.play();
}
function PlayVid5(){
  //if (lang.value == "english"){
    vid5.play();
}
