# Content

Every word and fact on the site lives here as plain JavaScript data. There is no JSX in this folder. Edit a file, save, and the page changes. Each file starts with a comment that lists its fields.

| File | What it holds |
| --- | --- |
| `profile.js` | Name, greeting, section prompts, downloadable files, other pages |
| `experience.js` | Industry jobs and research positions |
| `education.js` | Degrees with start and end months |
| `publications.js` | Papers and presentations |
| `honors.js` | Honors and awards |
| `projects.js` | Every project card, tagged `academic` or `misc` |
| `contact.js` | Contact links |
| `format.js` | Date helper |
| `index.js` | One import point for all of the above |

## Common edits

Add a project: copy an object in `projects.js`, give it a new `id`, set `track`, `image` (a key from `src/assets/index.js`), `link` and `text`. Keep `text` to one or two sentences. Put the longer version in `long`.

Add a job: copy an object in `industry` or `research` in `experience.js`. The `about` field is the text printed in the About code block, so put the role and dates there.

Add a publication: copy an object in `publications.js`. The `lines` array is what the About block prints, one array per display line. A segment is a string, or `{ text, href }` for a link.

Add an image: put the file in `src/assets/`, import it in `src/assets/index.js`, add it to `images`.

Dates are `"YYYY-MM"` strings. Use `null` for an end date that has not happened yet.
