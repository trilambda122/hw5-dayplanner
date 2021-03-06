$(document).ready(function() {


    // get the current time object and format strings from it
    var currentTimeObj = moment();
    var dayStr = currentTimeObj.format('dddd'); // could have probably just passed the object and done the string formating in the fucntion 
    var dateStr = currentTimeObj.format("MMMM D,YYYY"); // could have probably just passed the object and done the string formating in the fucntion
    displayCurrentDate(dayStr, dateStr);

    // setup the local storage 
    var eventStorage = JSON.parse(localStorage.getItem('eventStorage')) || [];
    console.log("at the START: " + eventStorage)
    var eventObj = "";

    // create an array of the hours for the workday and then a for loop that will add strings for each hour to the array.
    var hours = [];

    for (let hour = 9; hour <= 20; hour++) {
        hours.push(moment({ hour }).format('hh:mma'));
    }


    // loop through the array and create html rows for each hour block
    hours.forEach(function(item) {

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
        // call function to change the color of the block based on where it is in the timeline. 
        setTimeBlockColor(blockTime, idTag);

    });



    //  add event listeners 
    // event listner for clicking in where the events are listed. not sure i needed this one given there is an input field element. But its here for future use.
    $('.event-class').on('click', function() {
        event.stopPropagation();
        console.log("Event CLICKED: ");
    })

    // event listener for the save icon
    $('.save-class').on('click', function() {
        event.stopPropagation();
        console.log("SAVE CLICKED: ");
        // get the id attribute and do some string manipulation so that its in the right format to be a selector in jquery
        var id = $(this).attr('id');
        id = id.replace(/icon/, 'event');
        id = id.replace(/\s/, '');
        id = "#" + id;
        var textInEventBox = $(id).val();

        // create an object to store in local storeage
        var eventObj = {
            eventBlockId: id,
            eventText: textInEventBox
        };
        storeEvent(eventObj);

    })

    // call the popllate funtion to get any existing items from storage and display them to the page
    populateEventsFromStorage(eventStorage);

    // display the current date to the jumbotron on the page
    function displayCurrentDate(day, date) {
        $("<h3 class=\" badge badge-primary m-2 \">" + day + " - " + date + "</h3>").appendTo('#currentDay');

    };

    // function to store an event in the local storage 
    function storeEvent(eventObj) {

        // check if the eventStorage array is empty and if so push the event to the array
        if (eventStorage.length < 1 && eventObj.eventText !== "") {
            eventStorage.push(eventObj);
            localStorage.setItem("eventStorage", JSON.stringify(eventStorage));
        }

        // loop through the array and check to see if an event is already scheduled in that time block
        eventStorage.forEach(function(item) {

            if (item.eventBlockId === eventObj.eventBlockId) {
                //    do nothing if the event already exists
                console.log("TRUE MATCH");
            } else {
                // if there is not an existing event add it to the storage
                console.log("FALSE MATCH");
                eventStorage.push(eventObj);
                localStorage.setItem("eventStorage", JSON.stringify(eventStorage));
            }

        });
    }

    // read from local storage and populate fields if needed. 
    function populateEventsFromStorage(eventStorage) {
        eventStorage.forEach(function(item) {
            console.log("EVENT ID :" + item.eventBlockId + " EVENT TEXT: " + item.eventText);
            $(item.eventBlockId).val(item.eventText);
        });

    }
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