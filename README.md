# Brandon Memorial Wall v1.3 — Personal Memorial Edition

This update removes all ACFA branding and the chessboard section. The page is
now dedicated solely to Brandon / BR4ndonv.

## Included

- Brandon's portrait and Chess.com profile link
- Moonlit cathedral background
- Animated fog, embers, light rays, and drifting feathers
- Animated candles
- Stone memorial monument
- Scroll-triggered transitions
- Automatic numbered MP3 playback
- No visible radio or playlist
- No ACFA logos, seals, slogans, or club branding
- No chessboard at the bottom

## Add music

Upload MP3 files into `assets/music/` using numbered names:

- `01.mp3`
- `02.mp3`
- `03.mp3`
- ...
- `50.mp3`

No code or JSON changes are required.

## Autoplay

The page attempts to begin music when the embedded forum page loads. Browsers
may block audible autoplay until the visitor interacts with the page. When that
happens, a small **Enable Memorial Audio** button appears.

## Chess.com embed

```html
<iframe
  src="https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/"
  width="100%"
  height="2100"
  frameborder="0"
  scrolling="yes"
  allow="autoplay"
  style="display:block;border:0;border-radius:12px;overflow:hidden;"
  title="Brandon Memorial">
</iframe>
```
