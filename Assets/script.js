// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var hour9 = document.getElementById('hour-9');
var hour10 = document.getElementById('hour-10');
var hour11 = document.getElementById('hour-11');
var hour12 = document.getElementById('hour-12');
var hour13 = document.getElementById('hour-13');
var hour14 = document.getElementById('hour-14');
var hour15 = document.getElementById('hour-15');
var hour16 = document.getElementById('hour-16');
var hour17 = document.getElementById('hour-17');

const timeSections = [
  {name: "9AM", value: 9}, {name: "10AM", value: 10}, {name: "11AM", value: 11},
  {name: "12PM", value: 12}, {name: "1PM", value: 13}, {name: "2PM", value: 14},
  {name: "3PM", value: 15}, {name: "4PM", value: 16}, {name: "5PM", value: 17}
];

console.log(timeSections[1].value)
console.log(timeSections)

$('#currentDay').text(dayjs().format('dddd, MMMM, D'));

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
