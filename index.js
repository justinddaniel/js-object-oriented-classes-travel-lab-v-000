class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = startDate
  }
  yearsExperienceFromBeginningOf(startDate, endDate) {return endDate - startDate;}
}

class Route {
  let beginningLocation = {};
  let endingLocation = {}
  let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  blocksTravelled(beginningLocation, endingLocation) {return Math.abs((parseInt(endingLocation.vertical)) - (parseInt(beginningLocation.vertical))); }
}
