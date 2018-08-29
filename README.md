# Choose Your Own Adventure

##### By Catherine Bradley, Mel Yasuda, Victoria Oh, Regina Nurieva, and David Mortkowitz 30/08/2018.

## *Description*

A Javascript-powered Choose Your Own Adventure website that allows you to explore a branching narrative.

## *Behavior-driven Development*

| Specs         |Input Example| Output Example|
|:-------------:|:-------------:|:-------------:|
| Player is able to click through a single storyline.| Upon start, Player clicks button on each "page" to proceed. | Player is able to proceed through storyline and come to a linear conclusion without issue. |
| Player is able to make choices and "alter" their storyline. | Player chooses option "A" (vs "B" or "C") | Result is path "a" (vs respective path "b" or "c") |
| Player is able to access a total of 3 storylines. | Player's first walkthrough experience. | Player's 2nd+ experience is different from first, so long as alternate options are chosen. (up to *x* total storyline permutations.)|
| Player is able to reset the story. | Player clicks "reset" button to start over. | Click "reset" | Takes player back to title page. |
| Program will receive the player's name and replace the adventurer with the player's name throughout the story. | Bob | "Does Bob choose to fight the Dwarves?" |
| Program has locked player characters, which are accessible with access code. | e.g. code: "epic0du5Win" | access to additional characters. |
| "Winning" the game provides an "unlock" code. | Positive storyline outcome | e.g. code: "epic0du5Win" |
| An "auto-win" character | Choose auto-win character | Always leads to positive outcome/ending. |
| An "auto-lose" character | Choose auto-lose character | Always leads to negative outcome/ending. |
| Turn page animation | Click a path option button | Pages of book simulate what it looks like to actually turn a page(s). |
| Turn page audio | Click a path option button | Audio that simulates what it sounds like to actually turn a page(s) plays. |

## *Setup/Installation Requirements*

1. Clone this repository by using Terminal command:
```
    $ git clone https://github.com/dmortkowitz/choose-your-adventure.git
```
2. Change into the work directory from download location using Terminal command:
```
    $ cd
```
3. Open the project in your preferred text editor.

4. To run the webpage, open it in any browser.

## *Known Bugs*


## *Support and contact details*

Please contact me at dmortkowitz [at] gmail.com for questions or feedback.

## *Technologies Used*

* Atom
* HTML
* CSS
* Bootstrap v3.3.7
* JavaScript
* jQuery v3.3.1    
* Git
* GitHub

### *License*: MIT.

#### *Copyright* (c) 2018 Catherine Bradley, Mel Yasuda, Victoria Oh, Regina Nurieva, and David Mortkowitz
