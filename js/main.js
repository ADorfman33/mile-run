$(function() {
  console.log("JS Linked");
  $('.modal').modal();

  // Setting length of time header based on number of time entries
  let numTimes = 3;
  let $times = $("<th colspan=" + numTimes + ">Times</th>");
  $('#header-times').append($times);

  // Triggering modal to add player
  $('#add-runner-btn').click(function() {
    $('#modal1').modal('open');
  });

  $('#add-runner').click(function(e) {
    e.preventDefault();
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let newRunner;
  });


  // Creating sample data and adding it to table
  let $data3 = $(`
    <tr>
      <td>Andrew</td>
      <td>Dorfman</td>
      <td>4:50</td>
      <td>6:00</td>
      <td>8:00</td>
      <td>4:50</td>
      <td>6:00</td>
      <td>8:00</td>
    </tr>
  `);

  $('#runner-data').append($data3);




});

function normalize(date, time) {
  let regex = /(.*)\/(.*)/g;


}
