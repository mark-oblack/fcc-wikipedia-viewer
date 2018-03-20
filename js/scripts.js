//Pseudo Code
//1a. A user enters a value in a search field
	//2. The value entered is stored in a variable
	//3. Search results are retrieved based on variable value
	//4. User can click on a search result and the article will open in a new tab
//1b. A user clicks Random and are linked to a randome Wikipedia artilce in a new tab

$(document).ready(function() {
	var input;
	$(".search-button").click(function() {
		input = document.getElementById("userSearch").value;
		console.log(input);
	});
});
