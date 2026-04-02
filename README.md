# Aisling Wellness Center Website

Plain HTML/CSS/JavaScript — no build step, no Node, no frameworks.
Works directly on GitHub Pages.

## Structure

```
aisling-static/
├── index.html          Homepage
├── book.html           Interactive booking page
├── team.html           Provider bios
├── about.html          Brand story & location
├── css/
│   └── style.css       All styles (design system, layout, components)
├── js/
│   ├── data.js         All content — services, providers, reviews
│   └── shared.js       Nav, footer, icons, shared utilities
└── images/
    └── hero-poster.jpg Replace with real photo/video screenshot
```

## Deploy to GitHub Pages (5 minutes)

1. Create a new GitHub repository (e.g. `aisling-website`)
2. Upload all files from this folder — maintain the folder structure
3. Go to **Settings → Pages**
4. Under **Source**, select `main` branch, `/ (root)` folder
5. Click **Save** — your site will be live at `https://yourusername.github.io/aisling-website`

For a custom domain (aislingwellnesscenter.com):
- Add a file named `CNAME` to the repo root containing just: `aislingwellnesscenter.com`
- In your domain registrar, point the DNS to GitHub Pages (see [GitHub's guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site))

## Updating Content

Everything is in `js/data.js`. No code knowledge needed — just edit the text:

### Add or edit a review
Find the `REVIEWS` array and add/edit entries:
```js
{ id:"r7", author:"First L.", initials:"FL", rating:5, date:"April 2025",
  text:"Your review text here." },
```

### Update a provider's bio or booking link
Find them in the `PROVIDERS` array. Change `bookingUrl` to your actual booking platform link:
```js
bookingUrl: "https://your-booking-platform.com/provider-name"
```

### Update service pricing or description
Find the service in the `SERVICES` array and edit `price`, `duration`, or `fullDescription`.

## Swap in real photos

**Hero image:** Replace `images/hero-poster.jpg` with a real photo of the space.
For video: add your MP4 to `images/hero.mp4` and update `index.html` — find the comment that says "VIDEO" and uncomment the `<video>` block.

**Provider photos:** Once you have headshots:
1. Add photos to `images/team/teressa.jpg`, `images/team/rachel.jpg`, etc.
2. In `team.html`, replace the avatar `<div>` for each provider with:
   ```html
   <img src="images/team/teressa.jpg" alt="Teressa M." style="width:100%;height:100%;object-fit:cover">
   ```

## Wire up real booking links

In `js/data.js`, find each provider's `bookingUrl` and replace with their direct booking page from your platform (Jane App, Vagaro, Mindbody, etc.).

## Add Google Maps embed

In `about.html`, find the `map-placeholder` div and replace it with your Google Maps embed code (get it from Google Maps → Share → Embed a map).
