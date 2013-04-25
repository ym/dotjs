(function () {
	if(document.location.href.indexOf('/member/') !== -1) {
		return ;
	}

	var avatars = document.getElementsByClassName('avatar');

	for(var i in avatars) {
		(function (avatar) {
			if(!avatar.src || avatar.src.indexOf('avatar_') == -1) {
				return ;
			}

			if(avatar.parentNode.tagName == 'TD') {
				avatar.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
			} else if(avatar.parentNode.tagName == 'A' && avatar.parentNode.parentNode.tagName == 'TD') {
				avatar.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
			}
		})(avatars[i]);
	}
})();