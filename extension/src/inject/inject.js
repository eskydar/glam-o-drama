chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		//Check if Glamorama box is there
		if($( "#glamorama" ).length > 0)
		{
			//Remove Glamorama box
			$("#glamorama").remove();
			//Message that it has been removed
			console.log('Glamorama gone!');
		}

		//Array with users, needs to come from settings
		var users = [''];

		$.each(users, function(key, value)
		{
			//Find all comments on post for user with username
			$('.comment footer:contains("'+value+'")').each(function()
			{
				//Remove the comment
				$(this).parent().hide();
			});
		});

		$('.dump-tags ul').children().hide();
		$('.dump-tags ul').html('<li>Tags staan momenteel uit, open de Glam-0-Drama extentie om de instellingen aan te passen</li>');


	}
	}, 10);
});