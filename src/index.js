// import MovingObject from './moving_object';
const MovingObject = require("./moving_object.js");
const Asteroids = require("./asteroid.js");

console.log("Webpack is working!");

// const canvas = document.getElementById('game-canvas');
// new Asteroids(canvas);

window.mo = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 5,
    color: "#00FF00"
});

window.MovingObject = MovingObject;



document.addEventListener("DOMContentLoaded", function(){
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = 500;
    canvasEl.height = 500;
  
    const ctx = canvasEl.getContext("2d");
    let mo = new MovingObject({
        pos: [50, 50],
        vel: [100, 100],
        radius: 5,
        color: "#00FF00"
    });
    mo.draw(ctx);
    mo.move();
    let ar = new Asteroids();
    ar.draw(ctx);

});

  

