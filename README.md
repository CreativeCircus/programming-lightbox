# Lightbox

## Usage

First, add a script tag to the lightbox JS file

```html
<script src="dist/js/main.js"></script>
```

And a link tag to the lightbox CSS file

```html
<link rel="stylesheet" href="dist/css/main.css">
```

Then in your HTML, any link that should launch a lightbox needs the class of `lightboxify`, and the href should be the URL of the large image that will appear in the lightbox.

```html
<a class="lightboxify" href="large.jpg">
	<img src="small.jpg">
</a>
```
