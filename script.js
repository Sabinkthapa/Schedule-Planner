

$(document). ready(function() {

  var today = dayjs();
$('#currentDay').text(today);

function recognizeWithColor() {
  var currentTime =dayjs();
  console.log("current time",currentTime);
  $(".time-block").each(function() {
  var parentRow = $(this);
  var hourID = parentRow.attr('id');
  var textArea = parentRow.find('.description');
  var hourTime = dayjs(hourID, 'h A');
  console.log(hourTime);

  if (hourTime.isBefore(currentTime, "hour")) {
    parentRow.addClass('past').removeClass('present future');
  } else if (hourTime.isAfter(currentTime , "hour")) {
  parentRow.addClass('future').removeClass('past current');
  } else {
  parentRow.addClass('current').removeClass('past future');
  }
})
}

$(".saveBtn").click(function () {
  // console.log('test clicked');
  var clickedbutton = $(this); //stores query object representing clicked save button
   // console.log(parentRow);
  var parentRow = clickedbutton.closest('.time-block');  //stores closest ancester element with the class 'time-block'
  var hourID = parentRow.attr('id');//  stores ID attributes of parent row
  var textArea = parentRow.find(".description");
  var content = textArea.val();
  //.find method searches for element withnt the current jquery ojbect,val method retrives the content.
  localStorage.setItem(hourID, content);
  recognizeWithColor(); //
  });

  // retrive and display the content from local storage
  $(".time-block").each(function () {
  var hourID = $(this).attr('id');
  var content = localStorage.getItem(hourID);
  var textArea = $(this).find(".description")
  textArea.val(content);
  });

  // recognizeWithColor(); 

});


