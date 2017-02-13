//STARTER CODE//


//Hours variable -- same for all stores//
var hours = ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '];

//First store: Pike Place -- properties//
var pikePlace = {
  name: 'Pike Place',
  min: 17,
  max: 88,
  avg: 5.2,
  avgCookiesPerSale: [],
  cookiesPerHour: [],
  total: 0,
};

//Figuring out Customers Per Hour -- will multiply by average cookies per order to find cookies per hour//
pikePlace.custiesPerHour = function() {
  for ( var i = 0; i < hours.length; i++) {
    var hourlyCusty = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.avgCookiesPerSale.push(hourlyCusty);
  }
},

//Multiply custies per hour by average cookies per hour, fill array with one answer per hour//
pikePlace.cookiesPerCustomer = function() {
  this.custiesPerHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.avgCookiesPerSale[i] * this.avg);
    this.cookiesPerHour.push(singleHourCookies);
    this.total += singleHourCookies;
  }
},

// Showing results in table on Index -- just trying to get results to display, no luck so far//
pikePlace.render = function() {
  var pikePlaceList = document.getElementById('pikePlaceList');
  this.cookiesPerCustomer();
  for(var i = 0; i < this.cookiesPerHour.length; i++) {
    var pikePlaceSales = document.createElement('li');
    pikePlaceSales.textContent = hours[i] + this.cookiesPerHour[i] + ' cookies';
    pikePlaceList.appendChild(pikePlaceSales);
  }
};

pikePlace.render();
