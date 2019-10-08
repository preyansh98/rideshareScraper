var uberfound; 
var date; 
var time; 

var dateFound = false; 
var timeFound = false; 
var index; 

//Main Code:
// if(searchUber()){
// 	//search was succesful, then find parent element
// 	var text = uberfound.parentElement; 
// 	parsetext(text); 
// }

//test code
var text = document.querySelector("p").innerText; 
parsetext(text); 

function searchUber(){
	var searchbutton = document.getElementsByClassName("inputtext")[0]; 
	searchbutton.value = "Uber"; 
	searchbutton.parentElement.parentElement.parentElement.submit(); 
	uberfound = document.getElementsByClassName("highlightNode"); 

	return (uberfound.length > 0);
}


//we take in the text and we're going to return the following
//1. Date
//2. Time
//3. From where
//4. To where
function parsetext(text){
	var wordsArray = text.trim().split(" "); 
	for(var i = 0; i<wordsArray.length; i++){
	 	var curr = wordsArray[i]; 

	 	//only run this if we haven't found both, no need to keep running if we've found all we need. 
	 	isDate(curr); 
	 	isTime(curr); 

	 	if(dateFound == true && timeFound == true){
	 		//proceed to next step
	 		console.log("The date is " + date + " and the time is " + time); 
	 	}
	}
}

function isDate(curr){
	//possible inputs: 
		//tomorrow, this weekend, today, Mar xx, 19th, 20th, 21st, tmr, tomorow, tmrw, 
		//Monday, Tuesday, Wednesday, Thursday, Friday

	curr = curr.replace(/[^A-Za-z]/g, ""); 
	curr = curr.toLowerCase().trim();

	var dates = [[0, "tomorrow"], [0, "weekend"], [0, "tmr"], [0,"tmrw"], [0,"monday"], [0,"tuesday"], [0,"wednesday"], 
	[0,"thursday"], [0,"friday"]];  //we keep growing this list, and shifting elements based on priority.  

			/**
		 * TODO: Replace the Dates 2D Array with a simple Map. 
	*/
		for(var i = 0; i<dates.length; i++) {
			if(curr.localeCompare(dates[i][1]) === 0) {
				//we found the date
				date = curr; 
				index = i; 
				refreshDatesList(dates); 
				dateFound = true; 
				return; //returns so for loop and function is exited. 
			}
		}
		
		return;
}

function isTime(curr) {
	//possible inputs: 
		//anything pm, anything am, could be just a number. 

		//lets work with pm and am first
		curr = curr.replace(/[?.]+/g, "");
		curr = curr.toLowerCase().trim(); 

		if(curr.endsWith("am") || curr.endsWith("pm")){
			//this is time
			if(curr.endsWith("am")){
				//its am
				var amPos = curr.indexOf("am"); 
				time = curr.substring(0,amPos);
				console.log("i found an am time");
				timeFound = true; 
				return; 
			}
			else{
				//its pm
				var pmPos = curr.indexOf("pm"); 
				time = curr.substring(0,pmPos);
				console.log("i found the pm time"); 
				timeFound = true; 
				return; 
			}
		}
		else{
			return; 
		}
}

function refreshDatesList(dates){
	if(index >= 0){
		//its set to some number
		dates[index][0]+=1; 
		index = index+1; 
	}
	dates.sort(sortFunc);

	function sortFunc(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] > b[0]) ? -1 : 1;
    }
}
}
