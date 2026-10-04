# Connecting Sanity (one-time setup)

This gives Suhani a real admin panel — she logs in, adds a product, uploads
a photo, hits publish, and it's live on the site. No code, no Cursor, no
GitHub.

The code is already wired up. What's left is creating the free Sanity
account and plugging in three IDs. About 15 minutes.

**Until you do this, the site works exactly as it does now** — it reads
from the built-in product list. Nothing breaks if you skip this step or
come back to it later.

---

## 1. Create the Sanity project

1. Go to [sanity.io/manage](https://www.sanity.io/manage) and sign up free
   (GitHub or Google login is fine).
2. Click **Create project**. Name it whatever — e.g. "Adore via Décor".
3. It creates a dataset called `production` automatically. Keep that name.
4. Copy the **Project ID** shown on the project's overview page — you'll
   need it twice below.

## 2. Connect the main site

1. In `adore-via-decor/`, copy `.env.local.example` to `.env.local`.
2. Paste your Project ID into `NEXT_PUBLIC_SANITY_PROJECT_ID`.
3. Leave `NEXT_PUBLIC_SANITY_DATASET=production` as is.
4. Leave `SANITY_API_TOKEN` empty for now — that's only for step 4.

## 3. Set up the Studio (the admin panel itself)

The `studio/` folder is a separate small app — this is what Suhani will
actually open and use.

```bash
cd studio
npm install
cp .env.example .env
```

Paste the same Project ID into `.env` (`SANITY_STUDIO_PROJECT_ID`).

Then deploy it to a free hosted URL:

```bash
npx sanity login
npx sanity deploy
```

It'll ask you to choose a studio hostname (e.g. `adore-via-decor`) — that
becomes Suhani's permanent login link:
**`https://adore-via-decor.sanity.studio`**

Bookmark that URL for her. She logs in with her own Google/GitHub account
(add her as a project member first — see step 5).

## 4. Move the existing 24 products into Sanity

Right now the products live in code (`src/data/products.ts`). Run this
once to copy all of them into Sanity, photos included, so the catalogue
doesn't start empty:

1. In `sanity.io/manage` → your project → **API** → **Tokens** → **Add
   API token** → give it **Editor** permissions → copy the token.
2. Paste it into `SANITY_API_TOKEN` in `adore-via-decor/.env.local`.
3. From `adore-via-decor/`:
   ```bash
   npm run seed
   ```
4. It'll print progress as it uploads each photo and creates each
   product. Safe to re-run — it skips anything already there.

## 5. Give Suhani access

In `sanity.io/manage` → your project → **Members** → **Invite members** →
add her email. She'll get an invite, log in, and land straight in the
product editor at the studio URL from step 3.

## 6. Deploy the live site with these env vars

Whichever of `NEXT_PUBLIC_SANITY_PROJECT_ID` / `NEXT_PUBLIC_SANITY_DATASET`
you put in `.env.local`, also add them in **Vercel → Project → Settings →
Environment Variables**, then redeploy. (Don't add `SANITY_API_TOKEN` to
Vercel — it's only needed locally, for seeding.)

---

## What Suhani can now do herself

- Add a new product: name, category (picks from the real 8), photo,
  price, description, materials, delivery time, and toggle "Bestseller" /
  "New" badges.
- Edit or remove anything, anytime.
- Changes go live within about a minute (no rebuild needed — the site
  refetches on each visit).

## What she still needs you for

- Anything outside the product catalogue — hero text, testimonials, FAQ,
  workshop listings, site-wide design. Those still live in code. If she'll
  be updating those often too, say so and I'll extend the schema to cover
  them the same way.
