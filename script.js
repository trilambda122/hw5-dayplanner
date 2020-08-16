// get the current time object and format strings from it
var currentTimeObj = moment();
var dayStr = currentTimeObj.format('dddd');
var dateStr = currentTimeObj.format("MMMM D,YYYY");


// setup the local storage 
var eventStorage = JSON.parse(localStorage.getItem('eventStorage')) || [];

// create an array of the hours for the workday
var hours = [];
var ids = [];
for (let hour = 9; hour <= 17; hour++) {

    hours.push(moment({ hour }).format('hh:mma'));
    ids.push(moment({ hour }).format('hh'));
}


// loop through the array and create html rows for each hour block
hours.forEach(function(item) {
    console.log(item);
    // create this crazy code block that we can apped to the main container durning each loop
    var codeBlock = "<div class=\"row\">" +
        // create first column  - area for time to display
        "<div class=\"col-3 border border-dark time-display shadow  \">" +
        "<p class=\"float-right\">" + item + "</p>" +
        "</div>" +
        // create second column for event to display
        "<div class=\"col-6 border border-secondary text-left text-wrap event-display shadow  event-class \" " + "id=\" event-" + item + "\"" + ">" +
        "<p>Some Cool things to do this hour</p>" +
        "</div>" +
        // create area for save icon to display
        "<div class=\"col-2  border border-secondary shadow   \" " + "id=\" icon-block-" + item + "\"" + ">" +
        "<i class=\"far fa-save fa-3x save-display save-class\"" + "id=\" icon-" + item + "\"" + ">" + "</i>" +
        "</div>" +
        "</div>";
    // append the row to the main container.
    $(codeBlock).appendTo('#main-container');


});

//  add event listeners 
$('.event-class').on('click', function(event) {

    var eventTimeStr = $(this).attr("id").split("-");
    console.log("EVENT CLICKED: " + eventTimeStr[1]);


})

$('.save-class').on('click', function() {

    var saveTimeStr = $(this).attr("id").split("-");
    console.log("SAVE CLICKED: " + saveTimeStr[1]);
})

function setBackgroundColors() {};


// $(this).addClass("bg-primary text-white");