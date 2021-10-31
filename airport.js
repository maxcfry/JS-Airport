const Plane = require("./plane.js")
const Weather = require("./weather.js")

class Airport {
  constructor() { 
    this.planes = []
    this.limit = (this.planes.length >= 10)
  }

  land(plane) {
    this.planes.push(plane)
  }

  take_off() {
    this.planes.pop()
  }
  
  max_cap() {
    this.planes.length >= 10
  }

}

module.exports = Airport;