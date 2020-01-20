let $lightboxLinks = document.querySelectorAll('.lightboxify');

$lightboxLinks.forEach(function ($lightboxLink) {
	$lightboxLink.addEventListener('click', function (event) {
		// prevent the link click from taking us away to another page
		event.preventDefault();

		// create the overlay
		let $overlay = document.createElement('div');
		$overlay.classList.add('lightbox-overlay');
		document.body.appendChild($overlay);

		// create the lightbox
		let $lightbox = document.createElement('div');
		$lightbox.classList.add('lightbox');
		document.body.appendChild($lightbox);

		// create the close button and put it in the lightbox
		let $close = document.createElement('button');
		$close.classList.add('lightbox-close');
		$lightbox.appendChild($close);

		// create the image and put it in the lightbox
		let $image = document.createElement('img');
		$image.classList.add('lightbox-image');
		$image.setAttribute('src', this.getAttribute('href'));
		$lightbox.appendChild($image);

		// make the close button work
		$close.addEventListener('click', function () {
			document.body.removeChild($overlay)
			document.body.removeChild($lightbox)
		})
	})
})