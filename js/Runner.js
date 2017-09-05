class Runner {
  constructor(id, firstName, lastName) {
    this.firstName = firstName || "";
    this.lastName = lastName || "";
    this.id = id;
    this.times = {};
  }

  // Adding a new time to the current date.
  addTime(date, time) {
    this.times[date] = [time];
  }

  parseEntry() {
    var $entry = $(`
      <tr class="runner" id='${this.id}'>
        <td class='first-name-data'>${this.firstName}</td>
        <td class='last-name-data'>${this.lastName}</td>
        <td class="calc-data">4:50</td>
        <td class="calc-data">6:00</td>
        <td class="calc-data">8:00</td>
        <td><i class="add-time-btn material-icons">add_circle</i></td>
        <td class="add-time-entry"><input type="text" class="validate"><label for="time"></label></td>
      </tr>
    `);

    // Add time listener
    // $entry.find(".add-time-btn").click(function() {
    //   console.log("clicked");
    //   this.refreshTimes();
    //   // $(`<td class="trial-data ${}">2:00</td>`).insertAfter($entry.find('.add-time-entry'));
    // });

    return $entry;
  }

  refreshTimes() {
    let $container = $("");
    for(date in this.times) {
      let $currentTime = $(`<td class="trial-data ${date}">${this.time[date]}</td>`);
      $container.append($currentTime);
    }
    console.log($container);
  }

}
