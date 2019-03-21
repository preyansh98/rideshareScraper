var uberfound; 
var date; 
var time; 

//This function will search for the keyword uber once mcgill group page is open. 

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

if(searchUber()){
	//search was succesful, then find parent element
	var text = uberfound.parentElement; 
	parsetext(text); 
}

//we take in the text and we're going to return the following
//1. Date
//2. Time
//3. From where
//4. To where
function parsetext(text){

}