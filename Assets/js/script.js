$(document).ready(function () {

  // Pull the date and time from moment.js
  $("#currentDay").append(moment().format("dddd MMMM Do YYYY"));

  let currentHour = parseInt(moment().format("HH"));

  //Change textarea background color based on time
  let backgroundColor = function () {
    let textAreas = $(".description");
    for (let i = 0; i < textAreas.length; i++) {
      let textAreaID = parseInt(textAreas[i].id);
      if (textAreaID < currentHour) {
        textAreas[i].classList.add("past");
      } else if (textAreaID > currentHour) {
        textAreas[i].classList.add("future");
      } else {
        textAreas[i].classList.add("present");
      }
    }
  };
  backgroundColor();

  // Creating the on click button to save date to Local Storage
  $(".saveBtn").click(function () {
    let addDataID = $(this).prev().attr("id");
    let addData = $(this).prev().children().val();
    localStorage.setItem(addDataID, addData);
  });

  //Get local storage data
  // Get ID
  // Get data
  //Update the text area

  function getLocalData() {

    //If null, won't add anything
    for (j = 9; j < 18; j++) {
      let data = localStorage.getItem(`${j}`);
      console.log(data);
      $(`#${j} textarea`).val(data);
    };
  };
  //Calls function upon opening page
  getLocalData();

});