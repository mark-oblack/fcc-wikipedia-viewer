//Pseudo Code
//1a. A user enters a value in a search field
	//2. The value entered is stored in a variable
	//3. Search results are retrieved based on variable value
	//4. User can click on a search result and the article will open in a new tab
//1b. A user clicks Random and are linked to a randome Wikipedia artilce in a new tab

$(document).ready(function() {
	var input;
	var url;

	$(".search-button").click(function() { //click function initiates when user clicks Search
		input = document.getElementById("userSearch").value; //value in input field is stored in variable
		if(input==="" || input === " ") {
			alert("Please enter search criteria.");
		} else {
			//value is placed in URL
			url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + input + "&format=json&callback=?";
			//ajax call to get json data
			$.ajax({
				type: "GET",
				url: url,
				async: false,
				dataType: "json",
				success: function(data) {
					//resets output list to blank each time function is run or a new search is initiated
					$(".results").html('');
					//appends li to ul for each search result
					for(var i = 0; i < data[0].length; i++) {
						if(data[1][i] === undefined) {
							$(".results").append("<li class='hide'></li>"); //hides any results that are undefined
						} else {
							// $(".results").append("<li><a href= \"" + data[3][i] + "\" target=\"_blank\">" + data[1][i] + "</a>" + "<p>" + data[2][i] + "</p></li>");
							$(".results").append("<a href= \"" + data[3][i] + "\" target=\"_blank\"><h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] + "</p></a>");

						}
					}
				},
				error: function(errorMessage) {
					alert("Error! Please try entering different search criteria.");
				}
			});
		}
	});
	//Allows a user to press Enter to search
	$("#userSearch").keypress(function(e) {
	    if (e.which == 13) {
	    	$(".search-button").click();
	    }
	});
});
