# Block Party — Setup Guide

## Files in this folder

| File | What it does |
|------|-------------|
| `index.html` | Homepage |
| `catalog.html` | Browse & filter all models |
| `model.html` | Individual model detail page |
| `cart.html` | Your pack / download page |
| `guide.html` | How to install guide |
| `faq.html` | FAQ page |
| `style.css` | All visual styles |
| `cart.js` | Cart logic shared across all pages |
| `data.js` | **All your model data — edit this to add new models** |
| `images/` | Put your screenshots here (see below) |

---

## Adding your screenshots

Each model needs its images in the right folder:

```
images/
  ssc077/
    a.png       ← color variant screenshots
    b.png
    c.png
    ... (one per variant code)
    ssc077.png       ← default position screenshot
    ssc077center.png ← center position screenshot

  ssc076/
    a.png
    b.png
    c.png
    d.png
    ssc076.png
    ssc076corner.png

  ssc082/
    a.png ... h.png
    ssc082.png
    ssc082top.png

  ssc085/
    a.png ... j.png
    ssc085.png
```

Just copy your existing screenshot files into these folders with these exact names.

---

## Adding a new model

Open `data.js` and copy one of the existing model objects. Fill in:
- `id` — unique ID, e.g. `"ssc088"`
- `name` — display name
- `collection` — `"ssc"` (or add a new one to `COLLECTIONS`)
- `number` — model number, e.g. `"088"`
- `category` — one of: `seating`, `decor`, `utility`, `outdoor`
- `room` — array of room types
- `description` — one or two sentences
- `baseItem` — the Minecraft item name
- `anvilCode` — the code prefix, e.g. `"ssc088"`
- `variants` — array of `{ code, name, color }` objects
- `positions` — array of `{ code, name, description }` objects
- `colorTags` — for filtering: `neutral`, `brown`, `green`, `blue`, `pink`, `purple`
- `images` — map of variant codes to filenames

Then add your images to `images/[modelId]/`.

---

## Deploying to GitHub Pages (free hosting)

1. Go to https://github.com and create a free account
2. Click **New repository** — name it `blockparty` (or anything you like)
3. Upload ALL these files (drag and drop them all into the repo)
4. Go to **Settings → Pages**
5. Under **Source**, select **Deploy from a branch**, choose `main`, folder `/root`
6. Click Save — your site will be live at `https://[yourusername].github.io/blockparty/`

It takes about 1 minute to go live after you save.

---

## Updating your site

Whenever you add new models or images:
1. Upload the new/changed files to GitHub
2. The site updates automatically within a minute

That's it — no servers, no deployments, no costs.
