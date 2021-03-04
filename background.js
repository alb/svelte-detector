browser.runtime.onMessage.addListener((req, sender) => {
	if (req.usingSvelte) {
		browser.browserAction.setIcon({
			path: "images/svelte.png",
			tabId: sender.tab.id
		});
	}
});