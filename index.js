let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

function avenuesTravelled(start, end) {
  return Math.abs(eastWest.indexOf(start) - eastWest.indexOf(end))
}

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date (startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    let current = new Date(year, 1, 1);
    return (current.getFullYear() - this.startDate.getFullYear())
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let vert = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical)
    let horiz = avenuesTravelled(this.beginningLocation.horizontal, this.endingLocation.horizontal)
    return vert + horiz
  }

  estimatedTime(peak = false) {
    // debugger
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }

}
