(function() {
	// Add jQuery to HTML Doc
	var script = document.createElement('script');
	script.src = 'https://code.jquery.com/jquery-2.2.0.js';
	script.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(script);
	
	var callBackNum = 0;
	
	// For each 'td' with text content 'Lecture'
	$('td:contains("Lecture"), td:contains("Laboratory"), td:contains("Field Course"), td:contains("Tutorial"), td:contains("Directed Studies"), td:contains("Independant Study"), td:contains("Seminar"), td:contains("Discussion"), td:contains("Other")')
		.next().next().next().next().each(function(index) { 
		callBackNum++;
		// Get professor's name
		var name = ($(this).text());
		names = name.split(" ");
		
		// Create url to personal website that calls a python script
		var pageUrl = "https://iamja.red/cgi-bin/pythonscript.py?fname=" + names[0] + "&lname=" + names[1];
		var rating = "";
		
		// Needed to refer to this inside ajax request
		var self = this;
		
		// Use ajax to execute python script hosted on personal website to extract json data from RateMyProfessors.com
		function getRating(pageUrl) {
			$.ajax({
				url: pageUrl,
				type: 'GET',
				dataType: "text",
				contentType: "application/json; charset=utf-8",
				success: function(res) {
					var obj = JSON.parse(res);
					rating = (!obj.professors[0]) ? '?' : obj.professors[0].overall_rating;
					$(self).append("<br>(" + rating + ")");
					callBackNum--;
					if(callBackNum === 0) console.log("Finished!");
				},
				error: function(res) {
					console.log("Failed to retrieve information. Please check your internet connection.");
				}
			});
		};

		// Call function and add rating beside professor's name
		if ($(this).text() !== String.fromCharCode(160) && $(this).text() !== "TBD") getRating(pageUrl);
		else callBackNum--;
	});
})();


