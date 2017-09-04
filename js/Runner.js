

class Runner {
  constructor(id, firstName, lastName) {
    this.firstName = firstName || "";
    this.lastName = lastName || "";
    this.id = id;
    this.times = {'1':'10:00' , '2': '5:33' , '3': '2:55'};
    this.calculation = {fastest:this.findFastest(), slowest:this.findSlowest() , average:this.findAvg()};
  }

  findFastest(){
    let min = this.times['1']
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
    let max = this.times['1']
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
