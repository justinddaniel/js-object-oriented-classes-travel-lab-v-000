class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 1, 1)
    let totalYears = (endDate - this.startDate)/(365*24*60*60*1000)
    return parseInt(totalYears);
  }
}

class Route {
  let beginningLocation = {};
  let endingLocation = {};
  let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled(beginningLocation, endingLocation) {return Math.abs((parseInt(endingLocation.vertical)) - (parseInt(beginningLocation.vertical))); }
}
