//Hours universal variables for all locations -- top level//
var hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
//Added store function to accommodate new store addition functionality//
var stores = [];
var table;

//Recreated all elements from one store per example from lecture//
function Store(name, min, max, avg) {
  //Note capitalized constructor name//
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesPerHour = [];
  this.total = 0;
  stores.push(this);
  this.hours();
  renderStore(table, this) ;
}

//Originally didn't have prototype reference -- instructor suggested it be added
//during code review on Wed, but still not 100% sure why beyond it will be necessary
//later when functions become more complex//

//Creating first element -- random number of custies in an hour for one store//
Store.prototype.custiesPerHour = function(min, max) {
  return Math.random() * (max - min) + min;
};

////Creating per store cookie totals by multiplying custies by avg purchase for each hour//
Store.prototype.hours = function() {
  for (var i = 0; i < hours.length; i++) {
    var randomNum = Math.floor(this.avg * this.custiesPerHour(this.min, this.max));
    this.cookiesPerHour.push(randomNum);
    this.total += randomNum;
  }
};

//Creating table -- this part left me and my driver/nav partner struggling because we still aren't 100% sure
//why this function is contained in parantheses, but online sources said it had to be and it worked//

//This section renders the table elements that will then be populated by data as stores
//are rendered//
(function renderTable() {
  table = document.createElement('table');
  table.id = 'table';
  var storeNameCell = document.createElement('tr');
  var name = document.createElement('th');
  name.textContent = '';
  storeNameCell.appendChild(name);
  //Note the for loop using the still universal hours function -- Not
  //sure how this would work if all stores had radically different hours//
  for (var i = 0; i < hours.length; i++) {
    var cookiesPerHourEl = document.createElement('th');
    cookiesPerHourEl.textContent = hours[i];
    storeNameCell.appendChild(cookiesPerHourEl);
  }
  var showsTotal = document.createElement('th');
  showsTotal.textContent = 'Totals';
  storeNameCell.appendChild(showsTotal);
  table.appendChild(storeNameCell);
  document.getElementById('store_data').appendChild(table);
})();
//Previous code generated table in instruct -- this populates it with the actual
//data and drops it in based on element names//
function renderStore(table, store) {
    var placeStoreHere = document.createElement('tr');
    var showStoreName = document.createElement('th');
    showStoreName.textContent = store.name;
    placeStoreHere.id = store.id;
    placeStoreHere.appendChild(showStoreName);
    //Again, the for loop based on hours, mirroring the table generation function
    //but this time passing data into those newly constructed cells//
    for (var i = 0; i < hours.length; i++) {
      var showTotalThisHour = document.createElement('td');
      showTotalThisHour.textContent = store.cookiesPerHour[i];
      placeStoreHere.appendChild(showTotalThisHour);
    }
    var showGrandTotal = document.createElement('td');
    showGrandTotal.textContent = store.total;
    placeStoreHere.appendChild(showGrandTotal);
    table.appendChild(placeStoreHere);
};

//All store names//
var pikePlace = new Store('Pike Place', 17, 88, 5.2);
var seaTac = new Store('SeaTac Airport', 6, 44, 1.2);
var southCenter = new Store('Southcenter Mall', 11, 38, 1.9);
var bellevue = new Store('Bellevue Square', 20, 48, 3.3);
var alki = new Store('Alki', 3, 24, 2.6);

//New store functionality//

//Creating new store from user input, but adding the previously generated table//
function renderNewStore(newName, newMinimum, newMaximum, newAverage) {
  tbl = document.getElementById('table');
  var newStore = new Store(newName, newMinimum, newMaximum, newAverage);
}

//Updating function to include the new store data//
function update(newStore, min, max, avg) {
  var addsNewStore = document.getElementById(newStore.newName.replace(' ', ''));

//New store data fields -- exact mirror of other stores//
  newStore.min = min;
  newStore.max = max;
  newStore.avg = avg;
  newStore.cookiesPerHour = [];
  newStore.total = 0;
  newStore.hours();

  //Same for loop as before except using node functionality to open the possibility
  //of reusing this code over and over to generate unlimited stores//
  for (var i = 0; i < newStore.cookiesPerHour.length; i++) {
    addsNewStore.childNodes[i + 1].textContent = newStore.cookiesPerHour[i];
  }
  addsNewStore.childNodes[addsNewStore.childNodes.length-1].textContent = newStore.total;
}

//Event listener -- I actually toyed with this type of element in my first website//
//The use of event listeners and leveraging getElementByID is the preferred way to generate
//the button functionality I added for my guessing game, but it was too complex
//for me at the time//
document.getElementById('add-store').addEventListener('submit', function(event) {
  event.preventDefault();
  var exists = false;
  var store = event.target.store.value;
  var min = parseInt(event.target.min.value);
  var max = parseInt(event.target.max.value);
  var avg = parseInt(event.target.avg.value);
  //ParseInt prevents data that would break the function from being passed into those fields//
  for (var i = 0; i < stores.length; i++) {
    if (stores[i].id === store.replace(' ', '')) {
      exists = true;
      break;
    }
  }
  if (exists === true) {
    update(stores[i], min, max, avg);
  } else {
    renderNewStore(store, min, max, avg);
  }
  event.target.store.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;
});
