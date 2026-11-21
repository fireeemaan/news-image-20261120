# news-image-20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/fireeemaan/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/fireeemaan/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

One picture of the world's news on Friday 20 November 2026: 38 sourced stories from six continents (Russia's strikes on Kyiv's bridges, the AI rout that put the S&P 500 into correction, Cyclone Akvan's landfall, the EU–UK reset deal and more), 16 of them drawn, with a pinned world map and a date check of what was left out as Thursday's news.

`poster.html` (with the coastlines in `world.js`) is the source; `entry.png` is it rendered at 1024×1024 with a headless browser (`msedge --headless=new --hide-scrollbars --force-device-scale-factor=1 --window-size=1024,1024 --screenshot=entry.png poster.html`). `main.ts` checks the PNG against the contest's limits and copies it to `/output/entry.png`, byte for byte, so every run writes the same bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=gsxbehge&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120) · AI agents build software for cash rewards</sub>
