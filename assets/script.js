var today = moment().format("dddd, MMMM Do YYYY ");

var now = moment().format("H A");

// current day

$("#currentDay").text(today);


/* planWorkday entries for each hour of the workday */
var planWorkday = [
    { time: "9 AM", 
        event: "" },
    { time: "10 AM", 
        event: "" },
    { time: "11 AM", 
        event: "" },
    { time: "12 PM", 
        event: "" },
    { time: "1 PM", 
        event: "" },
    { time: "2 PM", 
        event: "" },
    { time: "3 PM", 
        event: "" },
    { time: "4 PM", 
        event: "" },
    { time: "5 PM", 
        event: "" },
  ];

//displayed time and date
var currentdate = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
$('#currentDay').text(currentdate);
const now = dayjs();
var hour = now.format('HH');
//click storage function for all lines
$(document).ready(function () {
  $('#09 button').click(function () {
    var textareaValue = $('#09 textarea').val();
    localStorage.setItem('09am', textareaValue);
  });
});

$(document).ready(function () {
  $('#10 button').click(function () {
    var textareaValue = $('#10 textarea').val();
    localStorage.setItem('10am', textareaValue);
  });
});

$(document).ready(function () {
  $('#11 button').click(function () {
    var textareaValue = $('#11 textarea').val();
    localStorage.setItem('11am', textareaValue);
  });
});

$(document).ready(function () {
  $('#12 button').click(function () {
    var textareaValue = $('#12 textarea').val();
    localStorage.setItem('12am', textareaValue);
  });
});

$(document).ready(function () {
  $('#13 button').click(function () {
    var textareaValue = $('#13 textarea').val();
    localStorage.setItem('1pm', textareaValue);
    });
});

$(document).ready(function () {
  $('#14 button').click(function () {
    var textareaValue = $('#14 textarea').val();
    localStorage.setItem('2pm', textareaValue);
    console.log(localStorage);
  });
});

$(document).ready(function () {
  $('#15 button').click(function () {
    var textareaValue = $('#15 textarea').val();
    localStorage.setItem('3pm', textareaValue);
    });
});

$(document).ready(function () {
  $('#16 button').click(function () {
    var textareaValue = $('#16 textarea').val();
    localStorage.setItem('4pm', textareaValue);
  });
});

$(document).ready(function () {
  $('#17 button').click(function () {
    var textareaValue = $('#17 textarea').val();
    localStorage.setItem('5pm', textareaValue);
  });
});
//will change colors dependin time

$(".time-block").each(function () {
  var times = $(this).attr("id");
  if (times == hour) {
    $(this).removeClass("future").addClass("present");
  }
  else if (times < hour) {
    $(this).removeClass("future").addClass("past");
  }
  else {
    $(this).addClass("future");
  }

})