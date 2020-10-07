# Lightbox

## Already done

On the page there are 4 thumbnail images with anchor tags around them. The anchor tags link directly to the full-size images. That's called a "fallback". If you don't write any javascript, or your javascript doesn't work, at least the thumbnails are linked to the big images using traditional links.

I've written the scss for you. Look at the classes in there to see how to create your elements.

I've also put a class on the anchor tags called `lightboxify` and written the first line of js for you, querying for all those `lightboxify` elements.

## What to do

Your job is to write javascript to take those anchor tags and stop them from working the traditional way, instead having them open the big image in a "lightbox," which is a nicely designed popup on the page that the user can click to close.
