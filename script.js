$(document).ready(function() {


    // get the current time object and format strings from it
    var currentTimeObj = moment();
    var dayStr = currentTimeObj.format('dddd');
    var dateStr = currentTimeObj.format("MMMM D,YYYY");


    // setup the local storage 
    var eventStorage = JSON.parse(localStorage.getItem('eventStorage')) || [];

    // create an array of the hours for the workday
    var hours = [];


    displayCurrentDate(dayStr, dateStr);

    for (let hour = 9; hour <= 20; hour++) {

        hours.push(moment({ hour }).format('hh:mma'));

    }


    // loop through the array and create html rows for each hour block
    hours.forEach(function(item) {
        console.log(item);
        var blockTime = moment(item, 'h:mm a');
        idTag = item.replace(/:/, "");

        // create this crazy code block that we can apped to the main container durning each loop
        var codeBlock = "<div class=\"row\">" +
            // create first column  - area for time to display
            "<div class=\"col-3 border border-dark time-display shadow  \">" +
            "<p class=\"float-right\">" + item + "</p>" +
            "</div>" +
            // create second column for event to display
            "<input class=\"col-6 border border-secondary text-left text-wrap event-display shadow  event-class\"" + "id=\"event" + idTag + "\"" +
            ">" +
            "</input>" +
            // create area for save icon to display
            "<div class=\"col-2  border border-secondary shadow   \"" + "id=\" icon-block" + idTag + "\"" + ">" +
            "<i class=\"far fa-save fa-2x save-display save-class\"" + "id=\" icon" + idTag + "\"" + ">" + "</i>" +
            "</div>" +
            "</div>";
        // append the row to the main container.
        $(codeBlock).appendTo('#main-container');
        // change the color of the block based on where it is in the timeline. 
        setTimeBlockColor(blockTime, idTag);

    });

    // $(".event-class").addClass("bg-danger text-white");

    //  add event listeners 
    $('.event-class').on('click', function() {
        console.log("Event CLICKED: ");
    })

    $('.save-class').on('click', function() {
        console.log("SAVE CLICKED: ");
        // get the id attribute and do some string manipulation
        var id = $(this).attr('id');
        id = id.replace(/icon/, 'event');
        id = id.replace(/\s/, '');
        id = "#" + id;
        // target the event box and assign it to textInEventBox
        var textInEventBox = $(id).val();
        console.log(textInEventBox);

    })



    function displayCurrentDate(day, date) {
        $("<h3 class=\" badge badge-primary m-2 \">" + day + " - " + date + "</h3>").appendTo('#currentDay');
        // $("<h4 class=\" badge badge-primary m-2\">" + date + "</h4>").appendTo('#currentDay');


    };

    // set the time block color based on if it is current, before or after the current time.
    function setTimeBlockColor(blockTime, idTag) {
        if (currentTimeObj.isSame(blockTime, 'hour')) {
            selectorStr = "#event" + idTag;

            $(selectorStr).addClass("bg-danger text-white");
        }

        if (currentTimeObj.isAfter(blockTime, 'hour')) {
            selectorStr = "#event" + idTag;

            $(selectorStr).addClass("bg-secondary text-white");

        }
        if (currentTimeObj.isBefore(blockTime, 'hour')) {
            selectorStr = "#event" + idTag;

            $(selectorStr).addClass("bg-success text-white");

        }


    };
});