chrome.runtime.onMessage.addListener((req, sender) => {
	if (req.usingSvelte) {
		chrome.browserAction.setIcon({
			path: "images/svelte.png",
			tabId: sender.tab.id
		});
	}
});