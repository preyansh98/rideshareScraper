# uberUP
A (chrome extension) to help McGill students find people who want to share an Uber

## Rationale
Every end of the semester, McGill's class groups get flooded with tons of students posting frantically about wanting to share/split an Uber to the airport. More than half of the time, these posts get lost in the void of social media and never find the person they were intended for. 
This simple application seems to cater for that gap, to provide an efficient solution for McGill students to view potential Uber rideshare matches in one location.

## Implementation
The current implementation strategy is to create this as a chrome extension. Users log in to their Facebook, open the McGill Entering Class Group, and click on the extension. The extension then searches for Uber rides, parses and extracts information, and displays potential Uber matches. 
Possible features could include: 
* User enters date and time they're seeking a uber split for, and is returned with closest match(s).
* Users view all uber dates and select one accordingly
* Users can message post owner on prompt if they wish to go with the uber 
* Users could post directly into the app and a post is made for them

## Progress so far

I've just began learning JavaScript, so there's a lot of new syntax I'm getting familiar to. So far on this initial commit, I've managed to search for "uber" on the McGill group page and retrieve all the corresponding text. April Update: can succesfully find the date/time, optimized for complexity. Chrome Extension integration is next. 

## Challenges/Unknowns

The main challenge anticipated is information extraction in JavaScript. I am considering using Python NLP techniques to extract information, as people all write in different ways and the extension should be able to adapt. After deliberation, NLP seemed like overkill and I'm instead using regex to filter out patterns. 

