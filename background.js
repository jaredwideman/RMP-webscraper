// background.js

// Called when the user clicks on the browser action.
/*
chrome.browserAction.onClicked.addListener(function(tab) {
	// For the current tab, inject the "inject.js" file and executre it
	chrome.tabs.executeScript(tab.ib, {
		file: 'inject.js'
	});
});*/

//chrome.tabs.onClicked.addListener(function(tabId, changeInfo, tab){
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if(changeInfo && changeInfo.status == "complete"){
        chrome.tabs.executeScript(tabId, {file: "jquery-2.2.0.js"}, function(){
			chrome.tabs.executeScript(tabId, {file: "inject.js", runAt:'document_end'});
			
        });
    }
});