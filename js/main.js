$(function() {
  console.log("JS Linked");
  $('.modal').modal();
  var runners = [];

  // Setting length of time header based on number of time entries
  var numTimes = 4;
  var $times = $("<th colspan=" + numTimes + ">Times</th>");
  $('#header-times').append($times);

  // Dealing with the dates (got bored)
  // let $dates = $('#dates');
  // console.log($dates.children().length-1);

  // Triggering modal to add player
  $('#add-runner-btn').click(function() {
    $('#add-modal').modal('open');
  });
  $('#floating-add').click(function() {
    $('#add-modal').modal('open');
  });

  // Saving data and
  $('#add-runner').click(function(e) {
    e.preventDefault();
    var firstName = $('#first-name').val();
    var lastName = $('#last-name').val();
    var newRunner = new Runner(runners.length, firstName, lastName);
    var $entry = newRunner.parseEntry();
    runners.push(newRunner);
    $('#runner-data').append($entry);
  });

  var x = 0;
  $('#test-btn').click(function() {
    switch(x) {
      case 0:
        runners[0].addTime(date1, time1);
        break;
      case 1:
        runners[0].addTime(date2, time2);
        break;
      default:
        console.log("done");
    }
    x++;
  });

  // Add time listener
  $('.add-time-btn').click(function(e){
    console.log("clicked");
    var $tablePerson = $(this).closest('tr')
    $(`<td>2:00</td>`).insertAfter($tablePerson.find('.add-time-entry'));
  });


  [date1, time1] = normalize("9/20", "2:30");
  [date2, time2] = normalize("9/21", "2:15");

  // var runner = new Runner("Jon", "Doe");
  // runners[0].addTime(date1, time1);
  // runner.addTime(date2, time2);

  // let $entry = runner.parseEntry();
  // $('#runner-data').append($entry);



});

function normalize(date, time) {
  var regexDate = /(.*)\/(.*)/g;
  var normalizedData = [];
  var m;

  while ((m = regexDate.exec(date)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regexDate.lastIndex) {
      regexDate.lastIndex++;
    }
    var month = Number(m[1]);
    var day = Number(m[2]);
    normalizedData.push(month + "/" + day);
  }

  var regexTime = /(.*):(.*)/g;
  var n;

  while ((n = regexTime.exec(time)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (n.index === regexTime.lastIndex) {
      regexTime.lastIndex++;
    }
    var hour = Number(n[1]);
    var minute = Number(n[2]);
    normalizedData.push(hour + ":" + minute);
  }
  return normalizedData;
}

function getDate() {
  console.log("run");
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!

  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  var today = mm + '/' + dd + '/' + yyyy;
  return today
})
