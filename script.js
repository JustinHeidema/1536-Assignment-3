/* Author: Justin Heidema; Artur Gordiyenko
*
*Draws a house with animated smoke from its chimney
*
*/

//smoke particle variables
var colorIn = 255;
var opacity = 0.025;
var radius = 10;
var numSmoke = 1;


function showValue(newValue)
{
    document.getElementById("range").innerHTML=newValue;
}


//sets the interval and draws the functions
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

//function that draws the house with the smoke animation
function drawScene() {
  nightSky(); drawGrass(); drawHouseFront(); drawHouseSide(); drawDoor(); drawWindowSide(); drawLeftWindow(); drawRightWindow(); drawMoonGlow(); drawMoon(); drawRoof(); drawRoofFront(); drawRoofFront2(); drawDoorHandle(); drawChimneyFront(); drawChimneySide(); drawChimneyTop();
  drawChimneyInside(); drawMainStairs(); drawGrave(); drawFence(); drawPath(); drawBat();
}

//draws the night sky
function nightSky() {
    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');

    c2.fillStyle = 'black';
    c2.fillRect(0, 0, 500, 320);
}

//draws the front of the house
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

//draws the side of the house
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

//draws the stairs to the door
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

//draws the side window
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

//draws the door
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

//draws the front left window
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

//draws the front right window
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

//draws the moon
function drawMoon() {

    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');
    c2.fillStyle = "rgba(254, 250, 204, 1)";
    c2.beginPath();
    c2.arc(100,75,40,0,2*Math.PI);
    c2.fill();
}

//draws the bat from the moon
function drawBat() {

    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');
    c2.strokeStyle = 'black';
    c2.lineWidth = 2;
    var x3 = 110;
    var y3 = 80;
    var radius3 = 8;
    var startAngle3 = 1.05 * Math.PI;
    var endAngle3 = 1.95 * Math.PI;
    c2.beginPath();
    c2.arc(x3,y3,radius3,startAngle3,endAngle3);
    c2.stroke();

    var x2 = 125;
    var y2 = 80;
    var radius3 = 8;
    var startAngle3 = 1.05 * Math.PI;
    var endAngle3 = 1.95 * Math.PI;
    c2.beginPath();
    c2.arc(x2,y2,radius3,startAngle3,endAngle3);
    c2.stroke();

}

//draws the glow from the moon
function drawMoonGlow() {
    var radi = 40;
    var opa = 0.3;
    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');
    for (i = 0; i < 20; i++) {

      c2.fillStyle = "rgba(255, 255, 255, "+opa+")";
      c2.beginPath();
      c2.arc(100,75,radi,0,2*Math.PI);
      c2.fill();
      radi+=4;
      opa -= 0.04;
    }
}

//draws the grass
function drawGrass() {
    var canvas = document.getElementById("myDrawing");
    var c2 = canvas.getContext('2d');

    c2.fillStyle = '#087c0b';
    c2.fillRect(0, 320, 500, 180);

}

//draws the main roof
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

//draws the front of the roof
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

//draws the door handle
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

//draws the parts of the chimney
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

//draws the grave
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

//draws the fence
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

//draws the path to the door
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
