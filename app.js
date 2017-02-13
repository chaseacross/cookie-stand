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
