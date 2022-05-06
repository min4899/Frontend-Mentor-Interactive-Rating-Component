"use strict";

function submit_rating() {
  var ele = document.getElementsByName("rating");

  let selectedRating;
  for (let i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      selectedRating = ele[i].value;
      break;
    }
  }

  if (selectedRating) {
    // set rating for next page
    document.getElementById("rating-result").textContent = `You selected ${selectedRating} out of 5`;
    // go to next page
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "flex";

    console.log(`You selected ${selectedRating}`);
  } 
  else {
    console.log(`You haven't selected any rating`);
  }
}