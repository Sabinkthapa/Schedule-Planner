


$(document). ready(function() {

  var today = dayjs();
$('#currentDay').text(today);

$(".saveBtn").click(function () {
  // console.log('test clicked');
  var clickedbutton = $(this); //stores query object representing clicked save button
   // console.log(parentRow);
  var parentRow = clickedbutton.closest('.time-block');  //stores closest ancester element with the class 'time-block'
  var hourID = parentRow.attr('id');//  stores ID attributes of parent row
  var content =parentRow.find(".description").val(); 
  //.find method searches for element withnt the current jquery ojbect,val method retrives the content.

  localStorage.setItem(hourID, content);

});

});



