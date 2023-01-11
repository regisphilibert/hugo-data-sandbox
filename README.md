# Huge Project Template Repo

This template repo should be used upon starting a new Huge Project. It uses Huge of course, and other useful TND modules and project structure plus loads some basic templates.


## Update values

Search and replace the following {strings} in the project with:

`{siteID}` > Site ID, a string or int with alphanumeric chars (ex: mywebsite)
`{siteTitle}` > Site Title (ex: My Website)
`{siteURL}` > Site URL (ex: https://www.mywebsite.com)
`{repoURL}` > Git repo domain without protocole (ex: github.com/theNewDynamic/mywebsite)
## Setup

### 1. Download Hugo binary:
1. Update Package.json "hugo.version" key with latest or desired Hugo Version symver. Warning: It should always match `netlify.toml`'s `HUGO_VERSION` environment variable.
2. `$ npm run gethugo`

### 2. Setup Hugo Module
Where `repo_url` is GitHub's repo url without protocole: Ex: `github.com/theNewDynamic/thenewdynamic.com` 
1. `$ REPO={repo_url} npm run modinit`

### 3. Install required NPM modules
1. `$ npm install`

### 4. Multilingual sites
If the site shall be multilingual:

1. Update [`config/_default/languages.yaml`](https://github.com/theNewDynamic/huge-project-template/blob/main/config/_default/languages.yaml
) to add more languages.
2. Reorganize content under per-language directories and assign with each language's `contentDir` setting. (Ex: `content/fr`)
3. Add string localization files under the `118n` directory matching the extra languages' codes with needed strings. (Ex: `/i18n/fr.yaml`)


## NPM Scripts

- `$ npm run start`: Run Hugo in a local dev server environment -> http://localhost/1313.
- `$ npm run deploy`: Deploy site and process ressources.

## CSS

Project uses [HUGE/Styles](https://github.com/theNewDynamic/huge/wiki/Styles) module to manage TailwindCSS and [HUGE/Fonts](https://github.com/theNewDynamic/huge/wiki/Fonts) to handle fonts.

### Configurations

- Tailwind Configuration is at `assets/css/config/tailwind.config.js`.
- Purge Configuration is at `assets/css/config/purge.config.js`.
- See `assets/css/tailwind/utilities.css` for declaring Tailwind custom utilities.

### CSS Files
`assets/css/style.scss` holds all relative imports. 
SCSS syntax can be used in any files alongside Tailwind's own methods. `@apply` etc...

### Font files
Font files should live under `assets/fonts`. The TND Style module will handle every thing fonts from `@fontface` decleration to preloading.
User should declare fonts using the TND Styles Module API in its section of the `/config/params.yaml` file. See https://github.com/theNewDynamic/hugo-module-tnd-styles#fonts

## JS
Javascripts is built with Hugo's `js.Build` and can handle `jsx` as long as all the files' extension are `jsx`.

### JS Files

We use https://github.com/theNewDynamic/hugo-module-tnd-scripts. By default, `assets/js/index.js` will be processed and added. For anything more custom, user should declare their scripts and settings using the module's [params](https://github.com/theNewDynamic/hugo-module-tnd-scripts#registered-scripts).

## Assets Processing

All assets are built by Hugo, their subsequent tags are loaded using the TND Styles module solution.

`$ npm run deploy` will process the assets and commit style related resources so that `production` does not compile the assets. (Thus gaining a good 3s of PostCSS)

## Multilingual

The template is setup as Multilingual. Check the `config/languages.yaml` file to remove/edit other languages.

String translations are handled via the `i18n`.

## Media

We're using HUGE/Media and its DX.

See [Settings](https://github.com/theNewDynamic/huge/wiki/Media) and [Get function](https://github.com/theNewDynamic/huge/wiki/Media#functions)

```
{{ $args := dict 
  "path" "/uploads/an-image.jpg" 
  "width" 1024 
  "height" 100 
}}
{{ with partial "huge/media/Get" $args }}
  <img src="{{ .RelPermalink }}" alt="Something nice" />
{{ end }}
```

# SEO

SEO is handled with [HUGE/SEO](https://github.com/theNewDynamic/huge/wiki/SEO). To complement SEO data, use the `partials/huge/seo/data.html` partial as described [here](https://github.com/theNewDynamic/huge/wiki/SEO#override-huge-seo-logic).

# Google Analytics

See `config/_default/config`'s `googleAnalytics` key.

# Redirects

The netlify app domain redirection should be added through the params.tnd_redirects once code lives at final domain.