let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];


function helper(start, end) {
  return Math.abs(eastWest.indexOf(start) - eastWest.indexOf(end))
}

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    let argument = new Date(year, 0);
    return (argument.getFullYear() - this.startDate.getFullYear())
  }
}


class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let horiz = helper(this.beginningLocation.horizontal, this.endingLocation.horizontal)
    let vert = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    return horiz + vert;
  }

  estimatedTime(peak = false) {
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }

}
