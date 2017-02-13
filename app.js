var hours = ['10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: '];

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
};

//Creating first element -- grabbing straight from one store//
CookieStore.custiesPerHour = function() {
  for ( var i = 0; i < hours.length; i++) {
    var hourlyCusty = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    this.avgCookiesPerSale.push(hourlyCusty);
  }
};

//Creating per store cookie totals//
CookieStore.cookiesPerCustomer = function() {
  this.custiesPerHour();
  for (var i = 0; i < hours.length; i++) {
    var singleHourCookies = Math.ceil(this.avgCookiesPerSale[i] * this.avg);
    this.cookiesPerHour.push(singleHourCookies);
    this.total += singleHourCookies;
  }
};
//Need to actually create stores to test table, to wit://
new Store('Pike Place', 17, 88, 5.2);
new Store('SeaTac Airport', 6, 24, 1.2);
new Store('Southcenter', 11, 38, 1.9);
new Store('Bellevue Square', 20, 48, 3.3);
new Store('Alki', 3, 24, 2.6);

//Generating table and populating with data//
this.renderAsRow = function(){
  var peopleTable = document.getElementByID('peopleTable');
  var trElement = document.createElement('tr');
  var nameData = document.createElement('td');
  var jobData = document.createElement('td');
  var ageData = document.createElement('td');
  nameData.textContent = this.name;
  jobData.textContent = this.job;
  ageData.textContent = this.age;
trElement.appendChild(nameData);
trElement.appendChild(jobData);
trElement.appendChild(ageData);
peopleTable.appendChild(trElement);
}
