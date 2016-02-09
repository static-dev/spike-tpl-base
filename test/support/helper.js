var chai = require('chai'),
    chai_promise = require('chai-as-promised'),
    path = require('path'),
    Sprout = require('sprout');

var should = chai.should();
var sprout = new Sprout(path.join(__dirname, '../config'));

chai.use(chai_promise);

global.chai = chai;
global.sprout = sprout;
global.should = should;
global._path = path.join(__dirname, '../fixtures')
