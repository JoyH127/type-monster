# type-monster

The project mainly uses the module 1 technique to implement Tetris as the game history legend. The rules of the game are simple. There are a set of fifty random words. Within a given time, the player has to get ten scores. Test your typing skills!

## Technologies:
1. DOM methods
:`addEventlistner()`
,`document.querySelector()`
,`appendChild()`
,`createElement`
2. function method
:`forEach()`,
`switch`
3. API
: `axio`
## Approach:
1. Dataset: it sets up a limited dataset with random words API.
resource: https://random-word-api.herokuapp.com/
2. Function Setting
: The essential functions are checking the user's input, setting up timer, removing word set, saving score. 

## Technical Challenge
1. Checking whether user input is the same as random words on the playground  
2. Setting up the time depending on which level.
3. Removing corrected words from the list.

## Unsolved Problem
1. Whenever the HTML word element is erased, there is an error message about the existence of the list[i].
2. User's limited health. 

## Project Link
https://objective-haibt-7f916b.netlify.app
