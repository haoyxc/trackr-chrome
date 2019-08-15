$(document).ready(function() {
	$('#checkPage').click(function() {
        console.log('outer');
		chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            console.log('inner');
            chrome.identity.getProfileUserInfo(function(userInfo) {
				$.post('https://tranquil-wildwood-15780.herokuapp.com/createUser', {
					name: 'Brian',
					userId: userInfo.id.toString()
				})
					.done(function() {
						alert('success');
					})
					.fail(function() {
						alert('failure');
					});
			});
		});
	});
});