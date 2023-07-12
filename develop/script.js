// Global variables
var dateDisplay = $("#currentDay");
var current = dayjs().format("MMM DD, YYYY h:mm:ss a");

// Saves user text input by clicking the save button that matches the textarea
$(document).ready(
  $(function () {
    $(".saveBtn").click(function () {
      var text = $(this).siblings(".description").val();
      var parentId = $(this).parent().attr("id");
      localStorage.setItem(parentId, text);
    });
  var currentHour = dayjs().hour();

function timeTracker() {
  // Takes each array and splits to grab only the integer
  $(".time-block").each(function() {
    const myArray = $(this).attr("id").split("hour-");

    // Replacing class in each div to match live time
    if (currentHour > myArray[1]) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
    } 
      
    else if (currentHour == myArray[1]) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    }
    
    else {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
      }
    })
  };

// Saved user input in localStorage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

// Runs a clock that updates each second live
dateDisplay.text(current);
  setInterval(function () {
  current = dayjs().format("MMM DD, YYYY h:mm:ss a");
  dateDisplay.text(current);
  timeTracker();
}, 1000);
})
);