"use strict";

const rating = document.getElementById("slide1");
const thankYou = document.getElementById("slide2");
const radioBtns =  document.getElementsByName("rating");
const finalRatingHeader = document.getElementById("rating-result");

function submit_rating() {
  // get rating #
  let selectedRating;
  for (let i = 0; i < radioBtns.length; i++) {
    if (radioBtns[i].checked) {
      selectedRating = radioBtns[i].value;
      break;
    }
  }

  if (selectedRating) {
    // set rating for next slide
    finalRatingHeader.textContent = `You selected ${selectedRating} out of 5`;
    // go to next page
    rating.classList.add('hide');
    thankYou.classList.remove('hide');

    console.log(`You selected ${selectedRating}`);
  } 
  else {
    console.log(`You haven't selected any rating`);
  }
}