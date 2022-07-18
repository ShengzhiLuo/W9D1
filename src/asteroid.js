const Util = require("./utils.js");
const MovingObject = require("./moving_object.js");

const DEFAULTS = {
    color: "#FF0000",
    radius: 10,
    pos: [30, 30],
    vel: Util.randomVec(10)
};

function Asteroids(options) {
    options ||= {} //
    options.color = DEFAULTS.color;
    options.radius = DEFAULTS.radius;
    options.pos = DEFAULTS.pos;
    options.vel = DEFAULTS.vel;
    MovingObject.call(this,options)
};

Util.inherits(Asteroids, MovingObject)

module.exports = Asteroids;