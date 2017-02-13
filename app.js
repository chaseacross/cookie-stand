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
// Render working, but need to add total//
pikePlace.render = function() {
  var pikePlaceList = document.getElementById('pikePlaceList');
  this.cookiesPerCustomer();
  for(var i = 0; i < this.cookiesPerHour.length; i++) {
    var pikePlaceSales = document.createElement('li');
    pikePlaceSales.textContent = hours[i] + this.cookiesPerHour[i] + ' cookies';
    pikePlaceList.appendChild(pikePlaceSales);
  }
//Adding the total to the end of the list//
  var pikeSalesTotal = document.createElement('li');
  pikeSalesTotal.textContent = 'Total: ' + this.total + ' cookies';
  pikePlaceList.appendChild(pikeSalesTotal);
};
pikePlace.render();

//Second Store//
var seaTac = {
  name: 'SeaTac',
  min: 6,
  max: 24,
  avg: 1.2,
  avgCookiesPerSale: [],
  cookiesPerHour: [],
  total: 0,
};
seaTac.custiesPerHour = function() {
  for ( var i = 0; i < hours.length; i++) {
    var hourlyCusty = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.avgCookiesPerSale.push(hourlyCusty);
  }
},
seaTac.cookiesPerCustomer = function() {
  this.custiesPerHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.avgCookiesPerSale[i] * this.avg);
    this.cookiesPerHour.push(singleHourCookies);
    this.total += singleHourCookies;
  }
},
seaTac.render = function() {
  var pikePlaceList = document.getElementById('seaTacList');
  this.cookiesPerCustomer();
  for(var i = 0; i < this.cookiesPerHour.length; i++) {
    var seaTacSales = document.createElement('li');
    seaTacSales.textContent = hours[i] + this.cookiesPerHour[i] + ' cookies';
    seaTacList.appendChild(seaTacSales);
  }
  var seaTacSalesTotal = document.createElement('li');
  seaTacSalesTotal.textContent = 'Total: ' + this.total + ' cookies';
  seaTacList.appendChild(seaTacSalesTotal);
};
seaTac.render();

//Third store//
var southCenter = {
  name: 'Southcenter',
  min: 11,
  max: 38,
  avg: 1.9,
  avgCookiesPerSale: [],
  cookiesPerHour: [],
  total: 0,
};
southCenter.custiesPerHour = function() {
  for ( var i = 0; i < hours.length; i++) {
    var hourlyCusty = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.avgCookiesPerSale.push(hourlyCusty);
  }
},
southCenter.cookiesPerCustomer = function() {
  this.custiesPerHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.avgCookiesPerSale[i] * this.avg);
    this.cookiesPerHour.push(singleHourCookies);
    this.total += singleHourCookies;
  }
},
southCenter.render = function() {
  var southCenterList = document.getElementById('southCenterList');
  this.cookiesPerCustomer();
  for(var i = 0; i < this.cookiesPerHour.length; i++) {
    var southCenterSales = document.createElement('li');
    southCenterSales.textContent = hours[i] + this.cookiesPerHour[i] + ' cookies';
    southCenterList.appendChild(southCenterSales);
  }
  var southCenterSalesTotal = document.createElement('li');
  southCenterSalesTotal.textContent = 'Total: ' + this.total + ' cookies';
  southCenterList.appendChild(southCenterSalesTotal);
};
southCenter.render();

//Fourth Store//

var bellevueSquare = {
  name: 'Bellevue Square',
  min: 20,
  max: 48,
  avg: 3.3,
  avgCookiesPerSale: [],
  cookiesPerHour: [],
  total: 0,
};
bellevueSquare.custiesPerHour = function() {
  for ( var i = 0; i < hours.length; i++) {
    var hourlyCusty = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.avgCookiesPerSale.push(hourlyCusty);
  }
},
bellevueSquare.cookiesPerCustomer = function() {
  this.custiesPerHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.avgCookiesPerSale[i] * this.avg);
    this.cookiesPerHour.push(singleHourCookies);
    this.total += singleHourCookies;
  }
},
bellevueSquare.render = function() {
  var southCenterList = document.getElementById('bellevueSquareList');
  this.cookiesPerCustomer();
  for(var i = 0; i < this.cookiesPerHour.length; i++) {
    var bellevueSquareSales = document.createElement('li');
    bellevueSquareSales.textContent = hours[i] + this.cookiesPerHour[i] + ' cookies';
    bellevueSquareList.appendChild(bellevueSquareSales);
  }
  var bellevueSquareSalesTotal = document.createElement('li');
  bellevueSquareSalesTotal.textContent = 'Total: ' + this.total + ' cookies';
  bellevueSquareList.appendChild(bellevueSquareSalesTotal);
};
bellevueSquare.render();


//Fifth store//

var alki = {
  name: 'Alki',
  min: 3,
  max: 24,
  avg: 2.6,
  avgCookiesPerSale: [],
  cookiesPerHour: [],
  total: 0,
};
alki.custiesPerHour = function() {
  for ( var i = 0; i < hours.length; i++) {
    var hourlyCusty = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.avgCookiesPerSale.push(hourlyCusty);
  }
},
alki.cookiesPerCustomer = function() {
  this.custiesPerHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.avgCookiesPerSale[i] * this.avg);
    this.cookiesPerHour.push(singleHourCookies);
    this.total += singleHourCookies;
  }
},
alki.render = function() {
  var alkiList = document.getElementById('alkiList');
  this.cookiesPerCustomer();
  for(var i = 0; i < this.cookiesPerHour.length; i++) {
    var alkiSales = document.createElement('li');
    alkiSales.textContent = hours[i] + this.cookiesPerHour[i] + ' cookies';
    alkiList.appendChild(alkiSales);
  }
  var alkiSalesTotal = document.createElement('li');
  alkiSalesTotal.textContent = 'Total: ' + this.total + ' cookies';
  alkiList.appendChild(alkiSalesTotal);
};
alki.render();
