// create a class for past present and future and assign properties based on time
// each hour has a different class or ID
// if today is a new day it clears previous results
// function to save form inputs in schedule when page is refreshed

var timeDisplayEl = $('#time-display');

var schedule9El = $('#schedule9');
var schedule10El = $('#schedule10');
var schedule11El = $('#schedule11');
var schedule12El = $('#schedule12');
var schedule1El = $('#schedule1');
var schedule2El = $('#schedule2');
var schedule3El = $('#schedule3');
var schedule4El = $('#schedule4');
var schedule5El = $('#schedule5');
var plans9 = JSON.parse(localStorage.getItem("9am"));
var plans10 = JSON.parse(localStorage.getItem("10am"));
var plans11 = JSON.parse(localStorage.getItem("11am"));
var plans12 = JSON.parse(localStorage.getItem("12pm"));
var plans1 = JSON.parse(localStorage.getItem("1pm"));
var plans2 = JSON.parse(localStorage.getItem("2pm"));
var plans3 = JSON.parse(localStorage.getItem("3pm"));
var plans4 = JSON.parse(localStorage.getItem("4pm"));
var plans5 = JSON.parse(localStorage.getItem("5pm"));



if (plans9 !== null) {
    $("#input9").html(plans9);
} if(plans10 !== null){
    $("#input10").html(plans10);
} if(plans11 !== null){
    $("#input11").html(plans11);
} if(plans12 !== null){
    $("#input12").html(plans12);
} if(plans1 !== null){
    $("#input1").html(plans1);
} if(plans2 !== null){
    $("#input2").html(plans2);
} if(plans3 !== null){
    $("#input3").html(plans3);
} if(plans4 !== null){
    $("#input4").html(plans4);
} if(plans5 !== null){
    $("#input5").html(plans5);
}



function scheduleInput9(event){
  event.preventDefault();
  var plans = $("#input9").val();
  $("#input9").html(plans);
  localStorage.setItem("9am",JSON.stringify(plans));

}

function scheduleInput10(event){
    event.preventDefault();
    var plans = $("#input10").val();
    $("#input10").html(plans);
    localStorage.setItem("10am",JSON.stringify(plans));

  
  }
  function scheduleInput11(event){
    event.preventDefault();
    var plans = $("#input11").val();
    localStorage.setItem("11am",JSON.stringify(plans));
  

  
  }
  function scheduleInput12(event){
    event.preventDefault();
    var plans = $("#input12").val();
    localStorage.setItem("12pm",JSON.stringify(plans));
    
  
  }
  function scheduleInput1(event){
    event.preventDefault();
    var plans = $("#input1").val();
    localStorage.setItem("1pm",JSON.stringify(plans));
  
  
  }
  function scheduleInput2(event){
    event.preventDefault();
    var plans = $("#input2").val();
    localStorage.setItem("2pm",JSON.stringify(plans));
  
  }
  function scheduleInput3(event){
    event.preventDefault();
    var plans = $("#input3").val();
    localStorage.setItem("3pm",JSON.stringify(plans));
  
  }
  function scheduleInput4(event){
    event.preventDefault();
    var plans = $("#input4").val();
    localStorage.setItem("4pm",JSON.stringify(plans));
  
  }
  function scheduleInput5(event){
    event.preventDefault();
    var plans = $("#input5").val();
    localStorage.setItem("5pm",JSON.stringify(plans));
  }  



// handle displaying the time
function displayTime() {
    var date = moment().format('MMMM Do YYYY');
    var time = moment().format('h:mm:ss');
    //tried to put time on a newline but did not work??
    timeDisplayEl.text(date + " " + time);
  }

  setInterval(displayTime, 1000);

  //submit event on the form
  schedule9El.submit(scheduleInput9);
  schedule10El.submit(scheduleInput10);
  schedule11El.submit(scheduleInput11);
  schedule12El.submit(scheduleInput12);
  schedule1El.submit(scheduleInput1);
  schedule2El.submit(scheduleInput2);
  schedule3El.submit(scheduleInput3);
  schedule4El.submit(scheduleInput4);
  schedule5El.submit(scheduleInput5);