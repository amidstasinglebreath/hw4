# hw4

# Purpose:


## Development Notes:
uses an array of references to hold buttons
uses an array answers to hold reference answers to a question-set
display format and style established
use functions: Load, correct, incorrect, and basic time complete
color in correct/incorrect response established
load complete: works for quizchoice
 - issue caused in document attachment declarations due to treating quizHeader as a index not a class

 ## Current issue:
 page freezes during the runQuiz, possibly due to memory or processing power,
 has something to do with how the functions are being called within the buttons, as the runquiz buttons do act as if they have been loaded from the quizchoice object
 and do not progress through the loop, however settime resets itself but decrements faster each time an active button is pressed.
 must have something to do with replacing only text and not generating new items

## To-do:
finalize logic in running through different quiz types and questions.
fix issues with logic/memory consumption
refine timing portion and incorporate into run-logic
add music/sound effects

# Unit 04 Web APIs Homework: Code Quiz