

(function() {
	
	//Add jQuery to HTML Doc
	var script = document.createElement('script');
	script.src = 'https://code.jquery.com/jquery-2.2.0.js';
	script.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(script);
	
	$("td:contains('Lecture')").next().next().next().next().each(function() { 
		var name = ($(this).text());
		names = name.split(" ");
	
		
		var pageUrl = "https://iamja.red/cgi-bin/pythonscript.py?fname=" + names[0] + "&lname=" + names[1];
		//console.log(pageUrl);
		
		var rating = "";
		
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
		
		getRating(pageUrl);
		$(this).append(" (" + rating + ")");
	});
})();


