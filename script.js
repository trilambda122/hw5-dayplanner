var m = moment();
console.log(m);






// create an array of the hours in the workday
var hours = [];
for (let hour = 9; hour <= 17; hour++) {

    hours.push(moment({ hour }).format('hh:mma'));

}


hours.forEach(function(item) {
    console.log(item);

    var codeBlock = "<div class=\"row\">" +
        // create first column  - area for time to display
        "<div class=\"col-3    bg-light text-dark border border-dark time-display shadow  bg-white rounded\">" +
        "<p class=\"float-right\">" + item + "</p>" +
        "</div>" +
        // create second column for event to display
        "<div class=\"col-6    border border-secondary text-left text-wrap event-display shadow  bg-white rounded \" " + "id=\" event-" + item + "\"" + ">" +
        "<p>Some Cool things to do this hour</p>" +
        "</div>" +
        // create area for save icon to display
        "<div class=\"col-2       bg-light border border-secondary shadow  bg-white rounded \" " + "id=\" icon-block-" + item + "\"" + ">" +
        "<i class=\"far fa-save fa-3x save-display\"" + "id=\" icon-" + item + "\"" + ">" + "</i>" +
        "</div>" +
        "</div>";


    $(codeBlock).appendTo('#main-container');
    // add row to the container
    // $('<div class="row"').appendTo('#main-container');
    // // $("<div class='row' id=row-" + item + ">").appendTo("#main-container");
    // //    add DIV for time display area . ADD P tag and display the time
    // $("<div class='col- p-3 mb-2 bg-light text-dark border border-dark time-display'><p class='float-right'>" + item + " </p> </div>").appendTo("#main-container");

    // $("<div class='col-6 p-3 mb-2 border border-secondary text-left text-wrap event-display'> <p>Some Cool things to do this hour</p></div>").appendTo("#main-container");

    // $("<div class='col-2 p-3 mb-2 p-3 mb-2 bg-light border border-secondary'><i class='far fa-save fa-3x save-display'></i></div>").appendTo("#main-container");



});