

class Runner {
  constructor(id, firstName, lastName) {
    this.firstName = firstName || "";
    this.lastName = lastName || "";
    this.id = id;
    this.times = {};
  }

  addTime(date, time) {
    this.times[date] = [time];

    // let $entry = $(`#${this.id}`);

    // for(time in this.times) {
    //   $entry.append(`<td>${this.times[time]}</td>`);
    // }
  }

  parseEntry() {
    var $entry = $(`
      <tr id='${this.id}'>
        <td class='first-name-data'>${this.firstName}</td>
        <td class='last-name-data'>${this.lastName}</td>
        <td class="calc-data">4:50</td>
        <td class="calc-data">6:00</td>
        <td class="calc-data">8:00</td>
        <td><i class="add-time-btn material-icons">add_circle</i></td>
        <td class="add-time-entry"><input type="text" class="validate"><label for="time">Time (4:20)</label></td>
      </tr>
    `);

    //Add time listener
    $entry.find(".add-time-btn").click(function() {
      console.log("clicked");
      var $tablePerson = $(this).closest('tr')
      $(`<td>2:00</td>`).insertAfter($entry.find('.add-time-entry'));
    });

    return $entry;
  }


}

// Runner.prototype.addTime = function(date, time) {
//   if(this.times[date]) {
//     this.times[date].push(time);
//   } else {
//     this.times[date] = [time];
//   }
//
//   let $entry = $(`#${this.id}`);
//
//   for(time in this.times) {
//     if()
//     $entry.append(`<td>${this.times[time]}</td>`);
//   }
//
// }

// Runner.prototype.parseEntry = function() {
//   var $entry = $(`
//     <tr id='${this.id}'>
//       <td class='first-name-data'>${this.firstName}</td>
//       <td class='last-name-data'>${this.lastName}</td>
//       <td class="calc-data">4:50</td>
//       <td class="calc-data">6:00</td>
//       <td class="calc-data">8:00</td>
//       <td><i class="add-time-btn material-icons">add_circle</i></td>
//       <td>4:50</td>
//     </tr>
//   `);
//
//   //Add time listener
//   $entry.find(".add-time-btn").click(function() {
//     console.log("clicked");
//     var $tablePerson = $(this).closest('tr')
//     $tablePerson.append($(`<td>2:00</td>`))
//   });
//
//   return $entry;
// }
