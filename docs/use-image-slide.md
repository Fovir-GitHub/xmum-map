# How to Use Image Slide

Suppose that there are three images to be inserted as a slide, whose URL are:

- `/images/1.png`
- `https://example.com/example.jpg`
- `../2.webp`

Then in the markdown file, using following code:

```md
<div class="image-slide">
  <img src="/images/1.png" />
  <img src="https://example.com/example.jpg" />
  <img src="../2.webp" />
</div>
```

And it will be rendered in the browser.
