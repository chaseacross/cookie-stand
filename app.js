
//Hours variable -- same for all stores//
var hours = ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '];
//First store: Pike Place -- properties//
var pikePlace = {
  name: 'Pike Place',
  min: 17,
  max: 88,
  avg: 5.2,
  avgCookiesPerCusty: [],
  cookiesPerHour: [],
  totalCookies: 0,
};
//Figuring out Customers Per Hour -- will multiply by average cookies per order to find cookies per hour//
pikePlace.custiesPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
  var hourlyCusty = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.avgCookiesPerCusty.push(hourlyCusty);
  }
  console.log('Custies Per Hour fired!');
};
//Multiply custies per hour by average cookies per hour, fill array with one answer per hour//
pikePlace.cookiesPerCusty = function() {
  this.custiesPerHour();
  for (var i = 0; i < hours.length; i++) {
    var hourCookies = Math.ceil(this.avgCookiesPerCusty[i] * this.avg);
    this.cookiesPerHour.push(hourCookies);
    this.totalCookies += hourCookies;
  }
  console.log('Cookies per hour fired!');
}
// Showing results in table on Index -- just trying to get results to display, no luck so far//
var div = document.getElementById('pikePlace');
    ul = document.createElement('ul');
for (var i in pikePlace.cookiesPerHour) {
	var li = document.createElement('li'),
		  content = document.createTextNode(pikePlace.cookiesPerHour[i]);
  li.appendChild(content);
  ul.appendChild(li);
}
div.appendChild(ul);
