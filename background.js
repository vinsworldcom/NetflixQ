chrome.browserAction.onClicked.addListener(
    function(t) {
        chrome.tabs.create(
            {"url" : "http://dvd.netflix.com/" }
        );
    }
);

var clickHandler = function (t) {
    chrome.tabs.create(
        {"url" : "http://dvd.netflix.com/Search?v1=" + encodeURI(t.selectionText) }
    );
}

chrome.contextMenus.create(
    {
        "title": "Add to Netflix Queue",
        "contexts": ["selection"],
        "onclick" : clickHandler
    }
);
