$(function() {
  console.log("JS Linked");

  /* Initializations  */
  // Linking Materialize Components
  $('.modal').modal();
  $(".button-collapse").sideNav();

  // Initializing variables
  var runners = [];
  var activeDate = "";

  /*  Creating Date Picker  */
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 2, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });

  // Creating link for date picker
  var $input = $('.datepicker').pickadate();
  var picker = $input.pickadate('picker')

  // Setting default value of date to current date
  activeDate = getDate();
  picker.set('select', [activeDate[0], activeDate[1]-1, activeDate[2]]);
  activeDateRaw = $('.datepicker').pickadate('picker').get('highlight');

  // Setting length of time header based on number of time entries
  var numTimes = 4;
  var $times = $("<th colspan=" + numTimes + ">Times</th>");
  $('#header-times').append($times);

  /*  Events  */
  // Triggering modal to add player
  $('.add-runner-btn').click(function() {
    $('#add-modal').modal('open');
  });

  // Saving data and
  $('#add-runner').click(function(e) {
    e.preventDefault();
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let newRunner = new Runner(runners.length, firstName, lastName);
    let $entry = newRunner.parseEntry();
    runners.push(newRunner);
    $('#runner-data').append($entry);
    addClickListeners();
  });

  // Test Button (to be removed)
  // var x = 0;
  // $('#test-btn').click(function() {
  //   switch(x) {
  //     case 0:
  //       runners[0].addTime(date1, time1);
  //       break;
  //     case 1:
  //       runners[0].addTime(date2, time2);
  //       break;
  //     default:
  //       console.log("done");
  //   }
  //   x++;
  // });

  // Add time listener
  // $('.add-time-btn').click(function(e){
  //   console.log("clicked");
  //   var $tablePerson = $(this).closest('tr')
  //   $(`<td>2:00</td>`).insertAfter($tablePerson.find('.add-time-entry'));
  // });


  // [date1, time1] = normalize("9/20", "2:30");
  // [date2, time2] = normalize("9/21", "2:15");

  function addClickListeners() {
    $.find(".runner").forEach(function(runner, id) {
      let $runner = $(runner);
      $runner.find(".add-time-btn").click(function() {
        let entry = $runner.find(".add-time-entry > input").val();
        [dateN, timeN] = normalize(activeDateRaw.month + "/" + activeDateRaw.date, entry);
        if(dateN && timeN) {
          $runner.find(".add-time-entry > input").val("");
          activeDateRaw = $('.datepicker').pickadate('picker').get('highlight');
          let $entry = $(`<td class="trial-data ${dateN}">${timeN}</td>`);
          $entry.insertAfter($runner.find('.add-time-entry'));
        }
      });
    });

  }

});



// Converts the date and time to a standard format regardless of the input
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
    if(month && day) {
      normalizedData.push(month + "/" + day);
    } else {
      normalizedData.push(false);
    }

  }

  var regexTime = /(.*):(.*)/g;
  var n;

  while ((n = regexTime.exec(time)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (n.index === regexTime.lastIndex) {
      regexTime.lastIndex++;
    }
    var hour = Number(n[1]);
    var minute = n[2];
    if(hour || minute) {
      normalizedData.push(hour + ":" + minute);
    } else {
      normalizedData.push(false);
    }
  }

  return normalizedData;
}

// Returns the current date in an array [yyyy, mm, dd]
function getDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!

  var yyyy = today.getFullYear();
  // if (dd < 10) {
  //   dd = '0' + dd;
  // }
  // if (mm < 10) {
  //   mm = '0' + mm;
  // }
  // var today = mm + '/' + dd;
  return [yyyy, mm, dd];
}
