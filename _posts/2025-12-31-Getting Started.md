---
layout: post
permalink: /getting-started/
title: Getting Started
description: >
  This post contains quickstart information, and examples for building the theme.
---

## 1) Clone the repo

```bash
git clone https://github.com/YOUR_NAME/YOUR_REPO.git
cd YOUR_REPO
```

---

## 2) Install dependencies

```bash
bundle install
```
---

## 3) Run locally

```bash
bundle exec jekyll serve
```

Open:

```
http://localhost:4000
```

---

## 4) Build production output

```bash
JEKYLL_ENV=production bundle exec jekyll build
```

Static output is generated in:

```
_site/
```

This is exactly what GitHub Pages will serve.

---

## 5) Deploy to GitHub Pages (manual or CD)

This repo uses **manual deployment** via GitHub Actions but CD can also be set to run on branch push.

### A) Push your changes

```bash
git add -A
git commit -m "Update site"
git push
```

---

## 6) URLs

In `_config.yml`:

### User / org site (`username.github.io`)

```yaml
url: "https://username.github.io"
baseurl: ""
```

### Project site (`username.github.io/repo`)

```yaml
url: "https://username.github.io"
baseurl: "/repo"
```

The theme already uses `relative_url`, so links and assets will work correctly.

### 7) Run the deploy workflow

On GitHub:

1. Go to **Actions**
2. Select **Deploy to Pages**
3. Click **Run workflow**