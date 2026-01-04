---
title: Customize the Favicon
date: 2026-01-03
categories: [Site, Tutorial]
tags: [favicon, branding, media]
description: Replace the default favicon with your own.
comments: false
---

The favicon used across this site lives in a dedicated asset directory and can be fully customized. This guide walks through generating a new favicon set and swapping it in cleanly.

---

## Generate a favicon set

Start with a **square image** (PNG, JPG, or SVG), ideally **512×512** or larger.

Then visit **an online favicon generator** and Generate your Favicons from an image.

---

## Download and place the files

Download the generated package and unzip it.

From the extracted files, move the following:

- `.png`{: .filepath}
- `.ico`{: .filepath}
- `.svg`{: .filepath}

Now move those files into the site assets at:

```

assets/img/favicons/

```

---

## Rebuild the site

Once the files are in place, rebuild the site locally or deploy as usual.

On the next load, hard-refresh the page or clear the browser cache — favicons may be aggressively cached.
