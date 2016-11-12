/* Author: Justin Heidema; Artur Gordiyenko
* Draws a house with animated smoke from its chimney
*
*/

//smoke particle variables
var colorIn = 255;
var opacity = 0.025;
//var array = [];

var radius = 10;
var numSmoke = 1;


function showValue(newValue)
{
    document.getElementById("range").innerHTML=newValue;
}


//interval change using slider
function newInterval(newValue) {
    clearInterval(interval1);
    newValue = 100 - newValue;
    interval1 = setInterval(function() {drawScene(); smokeObject(); smokeIterator();}, newValue);

}


//empty array for smoke particles
var smokeArray = [];
//smoke particle object, initial location
function smokeObject() {
    var smoke = {
    x : 280,
    y : 160
    }
    smokeArray.push(smoke);
}

//loop for smoke particles
function smokeIterator() {
    for (i = 0; i < smokeArray.length; i++) {

     if (((Math.random() * 2)) > 1){
        smokeArray[i].x += (Math.random() * 2.5);
      }

      else {
        smokeArray[i].x -= (Math.random() * 2.5);
      }

        smokeArray[i].y -= (Math.random() * 1.5);

        var canvas = document.getElementById("myDrawing");
        var c2 = canvas.getContext('2d');
        c2.fillStyle = "rgba("+colorIn+","+colorIn+","+colorIn+","+opacity+")";
        c2.beginPath();
        c2.arc(smokeArray[i].x, smokeArray[i].y, radius, 0, 2*Math.PI);
        c2.fill();
        c2.closePath();
        colorIn -= 0;
        opacity -= 0;
        drawSmoke = null;
        smokeArray[i].x += 0.5;



    }
}


//animation timer
var interval1 = setInterval(function() {drawScene();smokeObject(); smokeIterator();}, 20);




//draws the house with the smoke animation
function drawScene() {
  nightSky(); drawGrass(); drawHouseFront(); drawHouseSide(); drawDoor(); drawWindowSide(); drawLeftWindow(); drawRightWindow(); drawMoon(); drawRoof(); drawRoofFront(); drawRoofFront2(); drawDoorHandle(); drawChimneyFront(); drawChimneySide(); drawChimneyTop();
  drawChimneyInside(); drawMainStairs(); drawGrave(); drawFence(); drawPath();
}

function nightSky() {
    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');

    c2.fillStyle = 'black';
    c2.fillRect(0, 0, 500, 320);
}

function drawHouseFront() {

    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');

    c2.fillStyle = '#5b729a';
    c2.beginPath();
    c2.moveTo(298, 400);
    c2.lineTo(295, 250);
    c2.lineTo(195, 150);
    c2.lineTo(120, 220);
    c2.lineTo(125, 371);
    c2.closePath();
    c2.fill();
    c2.lineWidth = 1;
    c2.strokeStyle = '#253041';
    c2.stroke();
}

function drawHouseSide() {
    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');
    c2.fillStyle = '#5b729a';
    c2.beginPath();
    c2.moveTo(298, 400);
    c2.lineTo(360, 340);
    c2.lineTo(360, 200);
    c2.lineTo(295, 250);
    c2.closePath();
    c2.fill();
    c2.lineWidth = 1;
    c2.strokeStyle = '#253041';
    c2.stroke();
}

function drawDoorSide() {
    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');
    c2.fillStyle = '#96562a';
    c2.beginPath();
    c2.moveTo(325, 375);
    c2.lineTo(325, 325);
    c2.lineTo(340, 310);
    c2.lineTo(340, 360);
    c2.closePath();
    c2.fill();
    c2.strokeStyle = '#253041';
    c2.stroke();
}

function drawMainStairs() {
    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');
    c2.fillStyle = '#96562a';
    c2.beginPath();
    c2.moveTo(220, 386);
    c2.lineTo(190, 381);
    c2.lineTo(189, 386);
    c2.lineTo(218, 391);
    c2.closePath();
    c2.fill();
    c2.strokeStyle = '#253041';
    c2.stroke();
}

function drawSideStairs() {
    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');
    c2.fillStyle = '#96562a';
    c2.beginPath();
    c2.moveTo(325, 375);
    c2.lineTo(340, 360);
    c2.lineTo(340, 365);
    c2.lineTo(330, 375);
    c2.closePath();
    c2.fill();
    c2.strokeStyle = '#253041';
    c2.stroke();
}

function drawWindowSide() {
    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');
    c2.fillStyle = '#e8ea5c';
    c2.beginPath();
    c2.moveTo(315, 290);
    c2.lineTo(315, 255);
    c2.lineTo(350, 229);
    c2.lineTo(350, 264);
    c2.closePath();
    c2.fill();
    c2.lineWidth = 3;
    c2.strokeStyle = '#96562a';
    c2.stroke();

}

function drawDoor() {
    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');

    c2.fillStyle = '#96562a';
    c2.beginPath();
    c2.moveTo(220, 386);
    c2.lineTo(220, 333);
    c2.lineTo(190, 330);
    c2.lineTo(190, 381);
    c2.closePath();
    c2.fill();
    c2.lineWidth = 1;
    c2.strokeStyle = '#253041';
    c2.stroke();
}

function drawLeftWindow() {
    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');

    c2.fillStyle = '#e8ea5c';
    c2.beginPath();
    c2.moveTo(180, 288);
    c2.lineTo(180, 250);
    c2.lineTo(150, 248);
    c2.lineTo(150, 285);
    c2.closePath();
    c2.fill();
    c2.lineWidth = 3;
    c2.strokeStyle = '#96562a';
    c2.stroke();
    
    c2.moveTo(165, 287);
    c2.lineTo(165, 249);
    c2.lineWidth = 2;
    c2.strokeStyle = '#96562a';
    c2.stroke();
    
    c2.moveTo(150, 268);
    c2.lineTo(180, 270);
    c2.lineWidth = 2;
    c2.strokeStyle = '#96562a';
    c2.stroke();
}

function drawRightWindow() {
    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');

    c2.fillStyle = '#e8ea5c';
    c2.beginPath();
    c2.moveTo(250, 293);
    c2.lineTo(250, 255);
    c2.lineTo(220, 253);
    c2.lineTo(220, 290);
    c2.closePath();
    c2.fill();
    c2.lineWidth = 3;
    c2.strokeStyle = '#96562a';
    c2.stroke();
    
    c2.moveTo(235, 293);
    c2.lineTo(235, 254);
    c2.lineWidth = 2;
    c2.strokeStyle = '#96562a';
    c2.stroke();
    
    c2.moveTo(220, 273);
    c2.lineTo(250, 275);
    c2.lineWidth = 2;
    c2.strokeStyle = '#96562a';
    c2.stroke();
}

function drawMoon() {

    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');
    c2.fillStyle = '';
    c2.beginPath();
    c2.arc(100,75,40,0,2*Math.PI);
    c2.fill();
}

function drawGrass() {
    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');

    c2.fillStyle = '#087c0b';
    c2.fillRect(0, 320, 500, 180);

}

function drawRoof() {

    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');
    c2.fillStyle = '#54425c';
    c2.beginPath();
    c2.moveTo(195, 150);
    c2.lineTo(300, 257);
    c2.lineTo(367, 207);
    c2.lineTo(285, 115);
    c2.closePath();
    c2.fill();
    c2.lineWidth = 2;
    c2.strokeStyle = '#3c3146';
    c2.stroke();

}
function drawRoofFront() {

    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');
    c2.fillStyle = '#54425c';
    c2.beginPath();
    c2.moveTo(195, 150);
    c2.lineTo(300, 257);
    c2.lineTo(295, 260);
    c2.lineTo(195, 160);
    c2.closePath();
    c2.fill();
    c2.lineWidth = 2;
    c2.strokeStyle = '#3c3146';
    c2.stroke();
}
function drawRoofFront2() {
    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');
    c2.fillStyle = '#54425c';
    c2.beginPath();
    c2.moveTo(195, 150);
    c2.lineTo(116, 221);
    c2.lineTo(116, 231);
    c2.lineTo(195, 160);
    c2.closePath();
    c2.fill();
    c2.strokeStyle = '#3c3146';
    c2.stroke();
}
function drawDoorHandle() {
    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');
    c2.fillStyle = '#ada711';
    c2.beginPath();
    c2.arc(213,358,2,0,2*Math.PI);
    c2.fill();
    c2.lineWidth = 1;
    c2.strokeStyle = '#253041';
    c2.stroke();

}

function drawSideDoorHandle() {
    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');
    c2.fillStyle = '#ada711';
    c2.beginPath();
    c2.arc(330,340,2,0,2*Math.PI);
    c2.fill();
}

function drawChimneyFront() {
    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');
    c2.fillStyle = '#5b729a';
    c2.beginPath();
    c2.moveTo(280, 200);
    c2.lineTo(300, 190);
    c2.lineTo(300, 160);
    c2.lineTo(280, 170);
    c2.closePath();
    c2.fill();
}

function drawChimneySide() {
    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');
    c2.fillStyle = '#5b729a';
    c2.beginPath();
    c2.moveTo(280, 200);
    c2.lineTo(280, 170);
    c2.lineTo(265, 160);
    c2.lineTo(265, 190);
    c2.closePath();
    c2.fill();
}

function drawChimneyTop() {
    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');
    c2.fillStyle = '#3c3146';
    c2.beginPath();
    c2.moveTo(280, 185);
    c2.lineTo(308, 165);
    c2.lineTo(280, 148);
    c2.lineTo(255, 165);
    c2.closePath();
    c2.fill();
    c2.lineWidth = .5;
    c2.strokeStyle = 'black';
    c2.stroke();
}

function drawChimneyInside() {
    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');
    c2.fillStyle = '#5b729a';
    c2.beginPath();
    c2.moveTo(280, 170);
    c2.lineTo(290, 165);
    c2.lineTo(280, 160);
    c2.lineTo(272, 165);
    c2.closePath();
    c2.fill();
    c2.lineWidth = .5;
    c2.strokeStyle = 'black';
    c2.stroke();

}

//draws a temporary grid with numbers
function drawGrid() {
    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');
    var x = 50;
    var y = 50;
    c2.strokeStyle = 'yellow';

    for (i = 0; i < 10; i++) {
      c2.beginPath();
      c2.moveTo(x,0);
      c2.lineTo(x, 500);
      c2.stroke();
      x += 50;
    }

    for (i = 0; i < 10; i++) {
      c2.beginPath();
      c2.moveTo(0, y);
      c2.lineTo(500, y);
      c2.stroke();
      y += 50;
    }

    x = 45;
    var num = 50;
    for (i = 0; i < 10; i++) {
      var n = num.toString();
      c2.font="13px Georgia";
      c2.fillStyle='yellow';
      c2.fillText(n,5,x);
      x += 50;
      num += 50;
    }

    x = 5;
    var num = 0;
    for (i = 0; i < 10; i++) {
      var n = num.toString();
      c2.font="13px Georgia";
      c2.fillStyle='yellow';
      c2.fillText(n,x,15);
      x += 50;
      num += 50;
    }

}

function drawGrave() {
    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');

    c2.fillStyle = 'grey';
    c2.beginPath();
    c2.moveTo(50, 386);
    c2.lineTo(50, 333);
    c2.lineTo(75, 327);
    c2.lineTo(75, 380);
    c2.closePath();
    c2.fill();
    c2.lineWidth = .2;
    c2.strokeStyle = 'black';
    c2.stroke();
    
    c2.fillStyle = 'grey';
    c2.beginPath();
    c2.moveTo(50, 334);
    c2.bezierCurveTo(53, 320, 72, 315, 75, 328);
    c2.fill();

    
    c2.fillStyle = 'grey';
    c2.beginPath();
    c2.moveTo(50, 333);
    c2.lineTo(45, 328);
    c2.lineTo(45, 384);
    c2.lineTo(50, 386);
    c2.closePath();
    c2.fill();
    c2.lineWidth = .2;
    c2.strokeStyle = 'black';
    c2.stroke();
    
    c2.fillStyle = 'grey';
    c2.beginPath();
    c2.moveTo(45, 328);
    c2.bezierCurveTo(52, 315, 72, 315, 75, 328);
    c2.fill();
    c2.lineWidth = .2;
    c2.strokeStyle = 'black';
    c2.stroke();
    
    c2.beginPath();
    c2.moveTo(45, 328);
    c2.bezierCurveTo(52, 315, 72, 315, 75, 328);
    c2.stroke();
    c2.lineWidth =  .1;
    c2.strokeStyle = 'black';
    c2.stroke();
    
    c2.fillStyle = 'grey';
    c2.beginPath();
    c2.moveTo(50, 333);
    c2.lineTo(45, 328);
    c2.lineTo(55, 328);
    c2.closePath();
    c2.fill();
    
    c2.fillStyle = 'black';
    c2.font = "10px Georgia"
    c2.fillText("RIP", 54, 345);
    
    c2.beginPath();
    c2.moveTo(50, 334);
    c2.bezierCurveTo(53, 320, 72, 315, 75, 328);
    c2.stroke();
    c2.lineWidth =  .1;
    c2.strokeStyle = 'black';
    c2.stroke();
    
    c2.fillStyle = '#087c0b';
    c2.beginPath();
    c2.moveTo(50, 386);
    c2.lineTo(53, 375);
    c2.lineTo(57, 384);
    c2.lineTo(62, 377);
    c2.lineTo(65, 383);
    c2.lineTo(69, 376);
    c2.lineTo(71, 383);
    c2.lineTo(73, 376);
    c2.lineTo(76, 383);
    c2.closePath();
    c2.fill();
    

}

function drawFence() {
    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');
    c2.fillStyle = 'black';
    c2.beginPath();
    c2.moveTo(370, 390);
    c2.lineTo(370, 330);
    c2.lineTo(372, 327);
    c2.lineTo(370, 324);
    c2.lineTo(368, 327);
    c2.lineTo(370, 330);
    c2.lineTo(370, 390);
    c2.closePath();
    c2.fill();
    c2.lineWidth = 2.5;
    c2.strokeStyle = 'black';
    c2.stroke();
    
    c2.fillStyle = 'black';
    c2.beginPath();
    c2.moveTo(340, 430);
    c2.lineTo(340, 370);
    c2.lineTo(342, 367);
    c2.lineTo(340, 364);
    c2.lineTo(338, 367);
    c2.lineTo(340, 370);
    c2.lineTo(340, 430);
    c2.closePath();
    c2.fill();
    c2.lineWidth = 2.5;
    c2.strokeStyle = 'black';
    c2.stroke();
    
    c2.fillStyle = 'black';
    c2.beginPath();
    c2.moveTo(310, 470);
    c2.lineTo(310, 410);
    c2.lineTo(312, 407);
    c2.lineTo(310, 404);
    c2.lineTo(308, 407);
    c2.lineTo(310, 410);
    c2.lineTo(310, 470);
    c2.closePath();
    c2.fill();
    c2.lineWidth = 2.5;
    c2.strokeStyle = 'black';
    c2.stroke();
    
    
    
}

function drawPath() {
    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');
    
    //The first stone
    c2.fillStyle = 'grey';
    c2.beginPath();
    c2.moveTo(210, 400);
    c2.lineTo(205, 425);
    c2.lineTo(175, 418);
    c2.lineTo(180, 395);
    c2.closePath();
    c2.fill();
    c2.lineWidth = .5;
    c2.strokeStyle = 'black';
    c2.stroke();
    
    c2.fillStyle = 'grey';
    c2.beginPath();
    c2.moveTo(205, 425);
    c2.lineTo(175, 418);
    c2.lineTo(175, 420);
    c2.lineTo(205, 427);
    c2.closePath();
    c2.fill();
    c2.lineWidth = .5;
    c2.strokeStyle = 'black';
    c2.stroke();
    
    //The second stone
    c2.fillStyle = 'grey';
    c2.beginPath();
    c2.moveTo(195, 431);
    c2.lineTo(190, 455);
    c2.lineTo(160, 448);
    c2.lineTo(168, 425);
    c2.closePath();
    c2.fill();
    c2.lineWidth = .5;
    c2.strokeStyle = 'black';
    c2.stroke();
    
    c2.fillStyle = 'grey';
    c2.beginPath();
    c2.moveTo(190, 455);
    c2.lineTo(160, 448);
    c2.lineTo(160, 450);
    c2.lineTo(190, 457);
    c2.closePath();
    c2.fill();
    c2.lineWidth = .5;
    c2.strokeStyle = 'black';
    c2.stroke();
    
    //The third stone
    c2.fillStyle = 'grey';
    c2.beginPath();
    c2.moveTo(180, 461);
    c2.lineTo(175, 485);
    c2.lineTo(145, 478);
    c2.lineTo(155, 455);
    c2.closePath();
    c2.fill();
    c2.lineWidth = .5;
    c2.strokeStyle = 'black';
    c2.stroke();
    c2.fillStyle = 'grey';
    
    c2.beginPath();
    c2.moveTo(175, 485);
    c2.lineTo(145, 478);
    c2.lineTo(145, 480);
    c2.lineTo(175, 487);
    c2.closePath();
    c2.fill();
    c2.lineWidth = .5;
    c2.strokeStyle = 'black';
    c2.stroke();
    
    c2.fillStyle = 'grey';
    c2.beginPath();
    c2.moveTo(180, 461);
    c2.lineTo(175, 485);
    c2.lineTo(175, 487);
    c2.lineTo(181, 463);
    c2.closePath();
    c2.fill();
    c2.lineWidth = .5;
    c2.strokeStyle = 'black';
    c2.stroke();
    
    
    
  
}