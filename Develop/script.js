// create a class for past present and future and assign properties based on time
// each hour has a different class or ID
// if today is a new day it clears previous results
// function to save form inputs in schedule when page is refreshed



var timeDisplayEl = $('#time-display');

// handle displaying the time
function displayTime() {
    var date = moment().format('MMMM Do YYYY');
    var time = moment().format('h:mm:ss');
    timeDisplayEl.text(date + " " + time);
  }

  setInterval(displayTime, 1000);