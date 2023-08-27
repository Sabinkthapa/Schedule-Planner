

  $(document). ready(function() {

    var today = dayjs();
  $('#currentDay').text(today);

  function recognizeTracker() {
    var currentHour =dayjs().hour();
    console.log("current hourt",currentHour);

  $(".time-block").each(function() {
  var parentRow = $(this);
  // console.log("parent",parentRow);
  // var idAttribute = parentRow.attr('id');
  // console.log('attribut',idAttribute);

  var numericHour =parseInt($(this).attr("id").split("hour")[1]);
  console.log("hour",numericHour);
  // var hourTime = dayjs().hour(numericHour);
  // console.log("hours",hourTime);

  if (numericHour < currentHour) {
    $(this).addClass('past');
    $(this).removeClass('future');
    $(this).removeClass('present ');
  }
  else if (numericHour === currentHour) {
    $(this).addClass('present');
    $(this).removeClass('future');
    $(this).removeClass('past');
  } else {
    $(this).addClass('future');
    $(this).removeClass('past');
    $(this).removeClass('present');
  }
  });
  }


$(".saveBtn").click(function () {
  // console.log('test clicked');
  var clickedbutton = $(this); //stores query object representing clicked save button
   // console.log(parentRow);
  var parentRow = clickedbutton.closest('.time-block');  //stores closest ancester element with the class 'time-block'
  var hourID = parentRow.attr('id');
  console.log(hourID);//  stores ID attributes of parent row
  var textArea = parentRow.find(".description");
  var content = textArea.val();
  //.find method searches for element withnt the current jquery ojbect,val method retrives the content.
  localStorage.setItem(hourID, content);
  });

  // retrive and display the content from local storage
  $(".time-block").each(function () {
  var hourID = $(this).attr('id');
  var content = localStorage.getItem(hourID);
  var textArea = $(this).find(".description")
  textArea.val(content);
  });

  recognizeTracker(); 

  });



