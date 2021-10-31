const Airport = require('./airport')
const Weather = require('./weather.js')
const Plane = require('./plane.js')

describe('Airport', () => {
  beforeEach(() => {
    this.airport = new Airport
    this.plane = new Plane
    this.weather = new Weather
  });

  it('plane can land', () => {
    this.airport.land(this.plane)
    expect(this.airport.planes).toContain(this.plane)
  });

  it('plane can take off', () => {
    this.airport.land(this.plane)
    this.airport.take_off()
    expect(this.airport.planes).toHaveLength(0)
  });

  it('plane can take off and other planes will remain in airport', () => {
    this.airport.land(this.plane)
    this.airport.land(this.plane)
    this.airport.land(this.plane)
    this.airport.take_off()
    expect(this.airport.planes).toHaveLength(2)
  });

  it('expect max capacity to be 10', () => {
    this.airport.land(this.plane)
    this.airport.land(this.plane)
    this.airport.land(this.plane)
    this.airport.land(this.plane)
    this.airport.land(this.plane)
    this.airport.land(this.plane)
    this.airport.land(this.plane)
    this.airport.land(this.plane)
    this.airport.land(this.plane)
    this.airport.land(this.plane)
    expect(this.airport.max_cap).toBeTruthy
  });

  it('expect max capacity to be 10', () => {
    this.airport.land(this.plane)
    expect(this.airport.max_cap).toBeFalsy
  });

  it('plane cannot land and error thrown if capacity is full', () => {
    this.airport.land(this.plane)
    this.airport.land(this.plane)
    this.airport.land(this.plane)
    this.airport.land(this.plane)
    this.airport.land(this.plane)
    this.airport.land(this.plane)
    this.airport.land(this.plane)
    this.airport.land(this.plane)
    this.airport.land(this.plane)
    this.airport.land(this.plane)
    expect(this.airport.land(this.plane)).toBe("Airport full!");
  });

  it('does not allow plane to take_off when weather is stormy', () => {
    expect(this.airport.take_off(this.weather.storm())).toBe("Cannot take off - unsafe conditions");
  });
});