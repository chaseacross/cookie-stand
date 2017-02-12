var hours = ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '];

var pikePlace = {
  name: 'Pike Place',
  min: 17,
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
  console.log('Custies Per Hour fired!');
};
//Multiply custies per hour by average cookies per hour//
pikePlace.cookiesPerCusty = function() {
  this.custiesPerHour();
  for (var i = 0; i < hours.length; i++) {
    var hourCookies = Math.ceil(this.avgCookiesPerCusty[i] * this.avg);
    this.cookiesPerHour.push(hourCookies);
    this.totalCookies += hourCookies;
  }
  console.log('Cookies per hour fired!');
}
//Showing results in table on Index//
var ul = document.getElementById('pikePlace');
ul.textContent = pikePlace.name;
for (var i = 0; i < hours.length; i++) {
  var li = document.createElement('li');
  li.textContent = hours[i] + ' ' + this.cookiesPerHour[i];
  ul.appendChild(li);
}
