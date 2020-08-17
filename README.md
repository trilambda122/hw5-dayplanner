# hw5-dayplanner

SITE can be found here [DAYPLANNER](https://trilambda122.github.io/hw5-dayplanner/)
## Requirements


- Displays the current day at the top of the calendar
- Dayplanner showing 9am to 5pm thourly timeblocks
- Colorcodes the day blocks based on current (red), in the past (gray), or upcoming (green)
- ability to enter an event into a timeblock
  - Ability to save tht timeblock event to local storage
  - Events in local Storage should persists for that day. 


## Approach
- utilize moment.js for all date ad time fucntions 
- use 3 column grid layout for displaying 9am to 5pm 
  - assign custom class to each of the 3 columns [time-display]-[event-display]-[save-display]
- utilize bootstap for basic sytling 
- 
## BUGS
- can enter empty events into local storage. that will likley cause problems down the line
- when you change an event the changed event get added to the local storage but the old one does not get deleted. 
## TODO

**HTML / CSS** 
- [X] import bootstap 
- [X] import jquery library
- [X] import moment.js library
- [X] create main container
- [X] Create row with 3 column grid layout [time-display]-[event-display]-[save-display]
  - [X] assign custimer classes to each column 
- [X] label time slots
- [X] label with save icons for save button 

**Javascript**
- [X] Create global VARs 
  - [X] Current moment object 
  - [X] Check for local storage or create new local storage is none exists. 
    - [X] data [timeblock,eventtext]
  - [X] assign vars to customer class targets [time-display]-[event-display]-[save-display]
    - [X] and assign event listener to [event-display]-[save-display]
- [X] Function to display current DAY at the top of the calendar
- [X] Function to colorize blocks based on hour. 
- [X] Function to save event text to local storage
  - [X] need to check if text is empty
  - [ ] Ability to  change events once placed for the day

## CODE BREAKDOWN

created an array to hold all the hours 

```
var hours = [];

    for (let hour = 9; hour <= 20; hour++) {
        hours.push(moment({ hour }).format('hh:mma'));
    }
```



used a foreach loop on the array along with a crazy html string to dinamicly generate the each row of time. used this code to set spefic id's to elements to that each column in each row could be targeted when needed. 

```
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

    ```


