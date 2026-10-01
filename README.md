# Waitlist template

Dark-mode, center-focused waitlist landing page. Next.js 15 (App Router), React 19,
Tailwind v4, lucide-react. Every word on the page comes from one JSON file, so a
generated site is a template checkout plus a file write.

## The contract

`content/waitlist.json` is the only content source. It matches the schema in
`prompts/waitlist-copy.md` exactly. To generate a new site: run the copy prompt,
write the JSON over that file, build.

```
content/waitlist.json   <- the generated copy
lib/content.ts          <- types + typed import
lib/icons.tsx           <- allowed icon names -> lucide components
prompts/waitlist-copy.md <- the system prompt that produces the JSON
```

Icons are a fixed vocabulary. The prompt lists the allowed names and
`resolveIcon()` falls back to `sparkles` for anything unknown, so a hallucinated
icon name can never break a build.

Sections render defensively: an empty `features` or `faq` array drops the section
instead of leaving a hole.

## Local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export into ./out
```

`next.config.ts` uses `output: "export"`, so a build is a folder of static files.
Nothing renders at request time and there is no Node process in production.

## Email capture

`components/waitlist-form.tsx` posts `{ email }` to
`NEXT_PUBLIC_WAITLIST_ENDPOINT`. With no endpoint set, the form resolves
optimistically so a fresh deploy is demo-able immediately.

```bash
NEXT_PUBLIC_WAITLIST_ENDPOINT=https://api.example.com/waitlist
```

The variable is inlined at build time, so it has to be set before `npm run build`
in the Coolify build environment.

## Deploy

The included `Dockerfile` builds the export and serves it from nginx. In Coolify:
new resource, Dockerfile build pack, port 80. Fonts are self-hosted through
`@fontsource-variable/inter`, so the build needs no network beyond npm.

## Making it a theme

Everything visual is in `app/globals.css`. The palette is three variables at the
top (`--color-violet`, `--color-cyan`, `--color-fuchsia`) plus `--color-ink`.
Swapping those four values produces a different-looking template with the same
structure, which is the cheapest way to offer theme choice in the builder.
