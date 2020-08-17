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
- [ ] Create global VARs 
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

