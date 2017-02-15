'use strict'
var hours = ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '];
var stores = [];
var table;
//Deleted existing code -- will be using constructor to generate stores -- using 2-9-2017 pull as reference//

//Recreated all elements from one store per example from lecture//
function CookieStore(name, min, max, avgCookiesPerSale){
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.total = 0;
  this.avgCookiesPerSale = [];
  this.cookiesPerHour = [];
  stores.push(this);

this.hourTotal ();
renderStore(table, this);
}

//Creating first element -- figuring out customers per hour//
CookieStore.prototype.custiesPerHour = function() {
  for ( var i = 0; i < hours.length; i++) {
    var hourlyCusty = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.avgCookiesPerSale.push(hourlyCusty);
  }
};

//Creating per store cookie totals//
CookieStore.prototype.cookiesPerCustomer = function() {
  this.custiesPerHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.avgCookiesPerSale[i] * this.avg);
    this.cookiesPerHour.push(singleHourCookies);
    this.total += singleHourCookies;
  }
};

//Generating table and labeling its elements//
(function renderTable() {
  table = document.createElement('table');
  table.id = 'table';
  var nameCell = document.createElement('tr');
  var name = document.createElement('th');
  name.textContent = '';
  nameCell.appendChild(this.name);
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = document.createElement('th');
    singleHourCookies.textContent = hours[i];
    nameCell.appendChild(singleHourCookies);
  }
  var showsTotal = document.createElement('th');
  showsTotal.textContent = 'Totals';
  nameCell.appendChild(showsTotal);
  table.appendChild(nameCell);
  document.getElementById('store_data').appendChild(table);
})();

function renderCookieStore(table, store) {
    var placeStoreHere = document.createElement('tr');
    var showStoreName = document.createElement('th');
    showStoreName.textContent = this.name;
    placeStoreHere.id = store.id;
    placeStoreHere.appendChild(showStoreName);
    for (var i = 0; i < hours.length; i++) {
      var showTotalThisHour = document.createElement('td');
      showTotalThisHour.textContent = store.perHourTotals[j];
      placeStoreHere.appendChild(showTotalThisHour);
    }
    var showGrandTotal = document.createElement('td');
    showGrandTotal.textContent = store.total;
    placeStoreHere.appendChild(showGrandTotal);
    table.appendChild(placeStoreHere);
};

var pikePlace = new CookieStore('Pike Place', 17, 88, 5.2);
var seaTac = new CookieStore('SeaTac Airport', 6, 24, 1.2);
var southCenter = CookieStore('Southcenter', 11, 38, 1.9);
var southCenter = new CookieStore('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStore('Alki', 3, 24, 2.6);
