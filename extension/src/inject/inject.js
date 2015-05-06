chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		if($( "#glamorama" ).length > 0)
		{
			$("#glamorama").remove();
			console.log('Glamorama gone!');
		}
	}
	}, 10);
});