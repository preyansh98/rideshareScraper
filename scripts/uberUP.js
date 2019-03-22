var uberfound; 
var date; 
var time; 

var dateFound = false; 
var timeFound = false; 

//This function will search for the keyword uber once mcgill group page is open. 

/**
*	Main Code. 
*/
//if(searchUber()){
	//search was succesful, then find parent element
//	var text = uberfound.parentElement; 
//	parsetext(text); 
//}

//test code
var text = document.querySelector("p").innerText; 
parsetext(text); 

function searchUber(){
	var searchbutton = document.getElementsByClassName("inputtext")[0]; 
	searchbutton.value = "Uber"; 
	searchbutton.parentElement.parentElement.parentElement.submit(); 
	uberfound = document.getElementsByClassName("highlightNode"); 
	if(uberfound.length > 0){
		return true; 
	}
	else{
		return false; 
	}
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

	 	if(dateFound && timeFound){
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

	var dates = ["tomorrow", "weekend", "tmr", "tmrw", "monday", "tuesday", "wednesday", "thursday", 
		                  "friday"];  //we keep growing this list, and shifting elements based on priority.  

			/**
		 * This loop is theoretically O(n), but is close to O(1) for popular searches since 
	 * returns as soon as its found one. The array dates[] will be reshifted based on popular searches. 
	*/
		for(var i = 0; i<dates.length; i++) {
			if(curr.localeCompare(dates[i]) === 0) {
				//we found the date
				date = curr; 
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
}