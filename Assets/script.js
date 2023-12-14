
//current date 
$('#currentDay').text(dayjs().format('dddd, MMMM, D'));


//compares time sections to actual time to decide weather its past, present, or future
$('.time-block').each(function () {
  var timeSections = $(this).attr("id").split("-")[1];
  var currentTime = dayjs().hour();

  if (currentTime > timeSections) {
    $(this).addClass("past");
  } else if (currentTime == timeSections) {
    $(this).addClass("present");
  } else if (currentTime < timeSections) {
    $(this).addClass("future");
  }
});

//time and task values are saved to local storage
$('.saveBtn').click(function() {

  var time = $(this).parent().attr("id").split("-")[1];
  var task = $(this).siblings(".description").val();
  localStorage.setItem(time, task);

  console.log('Saved!')
});

//gets saved user input from local storage and sets them in the corresponding hour
$("#hour-9 .description").val(localStorage.getItem(9));
$("#hour-10 .description").val(localStorage.getItem(10));
$("#hour-11 .description").val(localStorage.getItem(11));
$("#hour-12 .description").val(localStorage.getItem(12));
$("#hour-13 .description").val(localStorage.getItem(13));
$("#hour-14 .description").val(localStorage.getItem(14));
$("#hour-15 .description").val(localStorage.getItem(15));
$("#hour-16 .description").val(localStorage.getItem(16));
$("#hour-17 .description").val(localStorage.getItem(17));

