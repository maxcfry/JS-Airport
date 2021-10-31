const Plane = require("./plane.js")
const Weather = require("./weather.js")
const MAX_CAPACITY = 10;

class Airport {
  constructor() { 
    this.planes = []
  }

  land(plane) {
    if(this.planes.length == MAX_CAPACITY){return "Airport full!"}
    else{this.planes.push(plane)};
  }
  
  take_off(weather) {
    if(weather == "stormy"){return "Cannot take off - unsafe conditions"}
    else{this.planes.pop()};
  }
  
  // max_cap() {
  //   this.planes.length >= MAX_CAPACITY
  // }

}

module.exports = Airport;