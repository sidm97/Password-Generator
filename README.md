# Password-Generator

## Description

This repository contains a password generator. Its a simple application that takes user input to create a randomised password made of different character types. I made this to practice using functions in Javascript and to also learn how to link my scripts to specific sections on a HTML page. I spent a great deal of time trying to figure out how to get true randomness and still haven't quite hit the mark with the final product. I've used other's work as a basis for my own. In particular, the following person's Github page, https://github.com/rajeswarivmarimuthu, was extremely useful to me, but was ultimately lacking. As a simple description, her password generator checks to see if the user has selected a character type; if yes, this character type's array is added to an overall array from which the final password is selected. Unfortunately, the final randomized selection of characters from this array means that a user's selected character may not turn up after all. For example, if I had chosen numbers and special characters, these 2 character types would be added to an array, and a certain number of characters would be randomly selected to make up the final password. However, it may be that all the chosen characters are numeric, with no special characters in the final password! My javascript is a great deal more complex to avoid this issue. Essentially my scripts allot a random number of characters (based on the chosen password length) to each selected character type, to ensure none of them are missed out. The characters are selected randomly from within their own arrays AND THEN added to a final array, before being randomised again and converted to text to display in the HTML page.

## Usage
This site has 2 functional parts. It is useful to open the console log on the page to see my scripts in action. After the button is pressed and the user selects their password criteria, the page generates the password but also displays key parts of the script process in the log.

Link to site: https://sidm97.github.io/Console-Finances/

## Credits
Credit goes to the Skills Bootcamp that taught me how to use Javascript functions (the RPS game also came in handy for my random number generator!). I'm also grateful to Rajeswari Marimuthu and her GitHub page on her own password generator as it was a great entry point for my own. In addition, Mozilla's MDN docs and StackOverflow were both very useful in answering my questions along the way (on random shuffling, query selectors, and array to text conversion).

## License

I've used an MIT license

---