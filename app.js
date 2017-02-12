//STARTER CODE//
var hours = ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '];

var pikePlace = {
  name: 'Pike Place',
  minCust: 17,
  max: 88,
  avg: 5.2,
  avgCookiesPerCusty: [],
  cookiesPerHour: [],
  totalCookies: 0,
};
//Figuring out Customers Per Hour -- will multiply by average order to find cookies per hour//
pikePlace.custiesPerHour = function() {
  for ( var i = 0; i < hours.length; i++) {
  var hourlyCusty = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.avgCookiesPerCusty.push(hourlyCusty);
  }
};
