# Brandon Memorial Wall v1.2 — Cinematic Edition

This version is built for a Chess.com forum iframe.

## Music: drop-in numbered MP3 files

Upload MP3 files directly into:

`assets/music/`

Use these names:

- `01.mp3`
- `02.mp3`
- `03.mp3`
- ...
- `50.mp3`

The page probes for those files, skips missing numbers, builds the playlist, and
plays the next available track automatically. No JSON or JavaScript editing is
required.

## Autoplay limitation

The page attempts to begin memorial music immediately when the forum iframe
loads. However, Safari, Chrome, Firefox, and other browsers may block audible
autoplay—especially inside an iframe—until the visitor interacts with the page.

When autoplay is blocked, a small **Enable Memorial Audio** button appears.
After one tap, the music continues automatically. The audio stops when the
visitor leaves, closes, or unloads the forum page.

This is a browser security rule and cannot be fully overridden by GitHub Pages
or by the embedded memorial.

## Recommended file preparation

- Use MP3 format.
- Keep each file reasonably compressed for mobile visitors.
- Use two-digit names exactly as shown above.
- Avoid uploading a fake or empty MP3.
- The player starts from the lowest-numbered available track.

## Chess.com embed

```html
<iframe
  src="https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/"
  width="100%"
  height="2200"
  frameborder="0"
  scrolling="yes"
  allow="autoplay"
  style="display:block;border:0;border-radius:12px;overflow:hidden;"
  title="Brandon Memorial">
</iframe>
```

The `allow="autoplay"` attribute gives the iframe permission to request
autoplay, but the visitor's browser may still require interaction.
