//Establishing top-level variables//

var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var stores = [];
var table;

//Basic cookie store constructor function with all elements of a cookie store//

function CookieStore(store, min, ma, avgCustomer) {
  this.store = store;
  this.min = min;
  this.ma = ma;
  this.avgCustomer = avgCustomer;
  this.perHourTotals = [];
  this.grandTotal = 0;
  stores.push(this);

//This code was referred to me by partner -- neither of us is 100% sure how/why it is necessary//
  this.hourTotal();
  renderStore(table, this) ;
}
//Customer generator -- random number between min and max//
CookieStore.prototype.getRandom = function(min, max) {
  return Math.random() * (max - min) + min;
};

//Uses random customer number and applies a random number of cookies purchased by customer based on the average number of cookies from store data//
CookieStore.prototype.hourTotal = function() {
  for (var i = 0; i < hours.length; i++) {
    var averageCookiesPerCusty = Math.floor(this.avgCustomer * this.getRandom(this.min, this.ma));
    this.perHourTotals.push(averageCookiesPerCusty);
    this.grandTotal += averageCookiesPerCusty;
  }
};

//This function renders the final table -- neither me nor partner sure why it is in parantheses//
(function renderTable() {
  table = document.createElement('table');
  table.id = 'table';
  var nameCell = document.createElement('tr');
  var store = document.createElement('th');
  store.textContent = '';
  nameCell.appendChild(store);
  for (var i = 0; i < hours.length; i++) {
    var cookiesPerHour = document.createElement('th');
    cookiesPerHour.textContent = hours[i];
    nameCell.appendChild(cookiesPerHour);
  }
  var showsTotal = document.createElement('th');
//Appends the word "totals" to proper column of table//
  showsTotal.textContent = 'Totals';
  nameCell.appendChild(showsTotal);
  table.appendChild(nameCell);
  //Places table in html//
  document.getElementById('store_data').appendChild(table);
})();

//Constructor for store table data -- note appending within store constructor function//
function renderStore(table, store) {
    var placeStoreHere = document.createElement('tr');
    var showStoreName = document.createElement('th');
    showStoreName.textContent = store.store;
    placeStoreHere.id = store.id;
    placeStoreHere.appendChild(showStoreName);
//Loops function for creation of hourly sales totals//
    for (var i = 0; i < hours.length; i++) {
      var totalPerHourCell = document.createElement('td');
      totalPerHourCell.textContent = store.perHourTotals[i];
      placeStoreHere.appendChild(totalPerHourCell);
    }

    var showGrandTotal = document.createElement('td');
    showGrandTotal.textContent = store.grandTotal;
    placeStoreHere.appendChild(showGrandTotal);
    table.appendChild(placeStoreHere);
};

//Calls new stores with data and enters them into the constructor//
var pikePlace = new CookieStore('Pike Place', 17, 88, 5.2);
var seaTac = new CookieStore('SeaTac Airport', 6, 44, 1.2);
var southCenter = new CookieStore('Southcenter Mall', 11, 38, 1.9);
var bellevue = new CookieStore('Bellevue Square', 20, 48, 3.3);
var alki = new CookieStore('Alki', 3, 24, 2.6);
