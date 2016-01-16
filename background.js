// Runs jquery and inject.js in background on permissible domains
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    if(changeInfo && changeInfo.status == "complete"){
        chrome.tabs.executeScript(tabId, {file: "jquery-2.2.0.js"}, function(){
			chrome.tabs.executeScript(tabId, {file: "inject.js", runAt:'document_end'});
			
        });
    }
});