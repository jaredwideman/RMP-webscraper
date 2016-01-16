(function() {
	
	// Add jQuery to HTML Doc
	var script = document.createElement('script');
	script.src = 'https://code.jquery.com/jquery-2.2.0.js';
	script.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(script);
	
	// For each 'td' with text content 'Lecture'
	$("td:contains('Lecture')").next().next().next().next().each(function() { 
		
		// Get professor's name
		var name = ($(this).text());
		names = name.split(" ");
		
		// Create url to personal website that calls a python script
		var pageUrl = "https://iamja.red/cgi-bin/pythonscript.py?fname=" + names[0] + "&lname=" + names[1];
		var rating = "";
		
		
		// Use ajax to execute python script hosted on personal website to extract json data from RateMyProfessors.com
		function getRating(pageUrl) {
			$.ajax({
				url: pageUrl,
				type: 'GET',
				dataType: "text",
				async:false,
				contentType: "application/json; charset=utf-8",
				success: function(res) {
					var obj = JSON.parse(res);
					rating = obj.professors[0].overall_rating;
				},
				error: function(res) {
					console.log("failed");
				}
			});
		};

		// Call function and add rating beside professor's name
		getRating(pageUrl);
		$(this).append(" (" + rating + ")");
	});
})();


