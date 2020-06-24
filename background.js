chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.executeScript({file: "cheat.js"});
});

chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.executeScript({code: 'console.log("Running Alright");'});
});