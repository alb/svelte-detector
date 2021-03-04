let regex = new RegExp(/<[^>]+class=\"[^\"]+\ssvelte-[\w]*\"/i);

function svelteCheck() {
	let isSvelte = regex.test(document.body.innerHTML);

	if(isSvelte) {
		chrome.runtime.sendMessage({
			"usingSvelte": true
		});
	} else {
		setTimeout(svelteCheck, 1250);
	}
}

svelteCheck();
