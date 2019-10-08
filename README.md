# Rideshare Scraper
A work-in-progress (chrome extension) to scrape fb posts to find people who want to share an Uber (or other rideshares)

## Implementation
The current implementation strategy is to create this as a chrome extension. Users log in to their Facebook, open the respective Group, and click on the extension. The extension then scrapes the page for Uber rides, parses and extracts information, and displays potential Uber matches. 
Possible features could include: 
* User enters date and time they're seeking a uber split for, and is returned with closest match(s).
* Users view all uber dates and select one accordingly
* Users can message post owner on prompt if they wish to go with the uber 
* Users could post directly into the app and a post is made for them

## ToDos

Integrate with FB Group / Posts API instead of scraping?
