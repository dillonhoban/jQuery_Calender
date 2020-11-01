$(document).ready(function () {

  // Pull the date and time from moment.js
  $(".lead").append("Today is " + moment().format("dddd MMMM Do YYYY"));

  // Setting variables for the color changer
  var timeFormat = "hh:mm:ss";
  var timeArray = [{
      textarea: $("#9"),
      begin: "09:00:00",
      end: "09:59:59"
    },
    {
      textarea: $("#10"),
      begin: "10:00:00",
      end: "10:59:59"
    },
    {
      textarea: $("#11"),
      begin: "11:00:00",
      end: "11:59:59"
    },
    {
      textarea: $("#12"),
      begin: "12:00:00",
      end: "12:59:59"
    },
    {
      textarea: $("#13"),
      begin: "13:00:00",
      end: "13:59:59"
    },
    {
      textarea: $("#14"),
      begin: "14:00:00",
      end: "14:59:59"
    },
    {
      textarea: $("#15"),
      begin: "15:00:00",
      end: "15:59:59"
    },
    {
      textarea: $("#16"),
      begin: "16:00:00",
      end: "16:59:59"
    },
    {
      textarea: $("#17"),
      begin: "17:00:00",
      end: "17:59:59"
    },
    {
      textarea: $("#18"),
      begin: "18:00:00",
      end: "18:59:59"
    },
  ];

  // Creating the function to change to text area colors 
  function colorChanger() {
    for (var i = 0; i < timeArray.length; i++) {
      var colorPast = moment(timeArray[i].begin, timeFormat);
      var colorFuture = moment(timeFormat[i].end, timeFormat);
      if (moment().isBetween(colorPast, colorFuture)) {
        timeArray[i].textarea.addClass("present");
      } else if (moment().isBefore(colorPast)) {
        timeArray[i].textarea.addClass("past");
      } else if (moment().isAfter(colorFuture)) {
        timeArray[i].textarea.addClass("future");
      };
    }
  };


  // Creating the on click button to save date to Local Storage
  $(".saveBtn").click(function () {
    var addValueID = $(this).prev().attr("id");
    var addValue = $(this).prev().val();
    localStorage.setItem(addValueID, addValue);
  });

  // // Getting the local data
  // var rowsID = $(".row");
  // for (i = 0; i < rowsID.length; i++) {
  //   $("#" + i).val(localStorage.getItem(i))
  // };

  // var timeBlockArray = $(".time-slot");
  // timeBlockArray.each(function (index) {
  //   var $timeBlock = $(timeBlockArray[index]);

  //   // getting the id 
  //   var id = $timeBlock.find("textarea").attr("id");
  //   console.log("****id", id);

  //   // getting the data associated with each id
  //   var data = localStorage.getItem(`hour-${id}`);
  //   console.log("****data", data);

  //   // Updating the textarea with the data found in local storage
  //   if (data) {
  //     $timeBlock.find("textarea").val(data);
  //   } else {
  //     $timeBlock.find("textarea").val("");
  //   }

  // });

});