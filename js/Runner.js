class Runner {
  constructor(id, firstName, lastName) {
    this.firstName = firstName || "";
    this.lastName = lastName || "";
    this.id = id;
    this.times = {'1':'10:00' , '2': '5:33' , '3': '2:55'};
    this.calculation = {fastest:this.findFastest(), slowest:this.findSlowest() , average:this.findAvg()};
  }

  findFastest(){
    let min = this.times[Object.keys(this.times)[0]]
    let minNum = Number(min.split(':')[0])*60 + Number(min.split(':')[1])
    for (let time in this.times){
      let minute = Number(this.times[time].split(':')[0])
      let sec = Number(this.times[time].split(':')[1])
      let totalTime = minute*60 + sec
      min = totalTime < minNum ? this.times[time] : min
    }
    return min
  }
  findSlowest(){
    let max = this.times[Object.keys(this.times)[0]]
    let maxNum = Number(max.split(':')[0])*60 + Number(max.split(':')[1])
    for (let time in this.times){
      let minute = Number(this.times[time].split(':')[0])
      let sec = Number(this.times[time].split(':')[1])
      let totalTime = minute*60 + sec
      max = totalTime > maxNum ? this.times[time] : max
    }
    return max
  }
  findAvg(){
    let total = 0
    let len = 0;
    for (let time in this.times){
      let minute = Number(this.times[time].split(':')[0])
      let sec = Number(this.times[time].split(':')[1])
      let totalTime = minute*60 + sec
      total += totalTime
      len++;
    }
    let avgTime = total/len
    let avgStr = `${Math.floor(avgTime/60)}:${Math.round(avgTime%60) < 10 ? '0' + Math.round(avgTime%60) : Math.round(avgTime%60)}`
    return avgStr
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
