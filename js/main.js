$(function() {
  console.log("JS Linked");
  $('.modal').modal();

  // Setting length of time header based on number of time entries
  var numTimes = 3;
  var $times = $("<th colspan=" + numTimes + ">Times</th>");
  $('#header-times').append($times);

  // Triggering modal to add player
  $('#add-runner-btn').click(function() {
    $('#add-modal').modal('open');
  });

  $('#add-runner').click(function(e) {
    e.preventDefault();
    var firstName = $('#first-name').val();
    var lastName = $('#last-name').val();
    var newRunner;
  });

  // Creating sample data and adding it to table
  var $data3 = $(`
    <tr>
      <td>Andrew</td>
      <td>Dorfman</td>
      <td>4:50</td>
      <td>6:00</td>
      <td>8:00</td>
      <td><i class="add-time-btn material-icons">add_circle</i></td>
      <td>4:50</td>
      <td>6:00</td>
      <td>2:00</td>
    </tr>
  `);

  $('#runner-data').append($data3);




  [date, time] = normalize("9/20", "2:30");
  var dateN = date[0] + "/" + date[1];
  var timeN = time[0] + ":" + time[1];

  var runner3 = new Runner("Jon", "Doe");
  runner3.addTime(dateN, timeN);



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
    if (month < 10) {
      month = "0" + month;
    } else {
      month = month.toString();
    }
    if (day < 10) {
      day = "0" + day;
    } else {
      day = day.toString();
    }
    normalizedData.push([month, day]);
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
    if (hour < 10) {
      hour = "0" + hour;
    } else {
      hour = hour.toString();
    }
    if (minute < 10) {
      minute = "0" + minute;
    } else {
      minute = minute.toString();
    }
    normalizedData.push([hour, minute]);
  }
  return normalizedData;
}
