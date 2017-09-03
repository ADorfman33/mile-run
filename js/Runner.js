function Runner(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.times = {};
}

Runner.prototype.addTime = function(date, time) {
  if(this.times[date]) {
    this.times[date].push(time);
  } else {
    this.times[date] = [time];
  }
  console.log(this.times);
}
