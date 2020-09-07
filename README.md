# Hugo Product Launch ![Test](https://github.com/janraasch/hugo-product-launch/workflows/CI/badge.svg?branch=master&event=push)

🚀 A [Hugo][hugo-io-url]-theme for young start-ups, product launches, and »coming soon«-websites. Includes ready-to-go contact form & newsletter sign up via [Netlify Forms][netlify-forms-url].

![Screenshot Hugo Product Theme](https://raw.githubusercontent.com/janraasch/hugo-product-launch/master/images/screenshot.png)

## Demo

For a current & working demo of this theme, please check out https://hugo-product-launch.netlify.app/ 🎯.

## 🔑 Key Features

- Pretty, quick & straightforward single-page design 🌻
- Contact form 📇
- Newsletter sign-up 📫
- Responsive 📲
- [One-click deploy 🚀 to netlify](https://app.netlify.com/start/deploy?repository=https://github.com/janraasch/hugo-product-launch-kickstart)
- Easily add CMS functionality via [Netfliy CMS](https://www.netlifycms.org) or [Forestry](https://forestry.io) 💼
- [tailwindcss](https://tailwindcss.com) with [PostCSS](https://postcss.org/) and [PurgeCSS](https://purgecss.com/) => _super tiny CSS file_ 🏎
- No! JavaScript 🥳

## Installation

### One-click Deploy / Installation

Deploy [🚀 Hugo Product Launch][github-url] to [netlify](https://www.netlify.com/) by clicking this button:

[![Deploy to netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/janraasch/hugo-product-launch-kickstart)

Alternatively, you may also clone the [kickstart-repo](https://github.com/janraasch/hugo-product-launch-kickstart), and skip right to the [usage instructions](#usage)

### Manual Installation

If you already have a Hugo site on your machine, you can simply add this theme via

```
git submodule add https://github.com/janraasch/hugo-product-launch.git themes/hugo-product-launch
```

Then, adjust the `config.toml` as [detailed below](#usage).

For more information, read the official [setup guide](https://gohugo.io/getting-started/installing) of Hugo.

#### Example Content

Simply copy over the contents of the `exampleSite`-directory included in this theme to your source directory. That should give you a good idea about how things work, and then you can go on from there to make the site your own.

#### NodeJS Dependencies

You need to have [NodeJS](https://nodejs.org) installed. Then, copy the `package.json`- & `package-lock.json`-files from the root of this theme to your site's root. Run `npm install` & `npm install postcss-cli -g` to set up your [PostCSS-Pipe](https://gohugo.io/hugo-pipes/postcss/).

#### Take over `main.css` & `tailwind.config.js`

Simply copy over the `assets/css/main.css`-file from this repo into your local `assets/css`-folder. Also, copy the `tailwind.config.js`-file from the root of this repository to your site's root. You may then add any CSS you like into your own `assets/css/main.css`-file and even overwrite the tailwind configuration in `tailwind.config.js`-file. See [tailwindcss > docs > configuration](https://tailwindcss.com/docs/configuration) for more details.

#### Optional: Take over `postcss.config.js`

Take full control of the [PostCSS](https://postcss.org/)-setup by copying the `postcss.config.js`-file from this repo into the root directory of your site.

## Usage

### Base configuration: `config.toml`

Please check out the [`config.toml`](https://github.com/janraasch/hugo-product-launch/blob/master/exampleSite/config.toml)-file included in the [exampleSite](https://github.com/janraasch/hugo-product-launch/tree/master/exampleSite) of this theme.

### Adding Content: `content/_index.md`

Start with the contents provided in the [`_index.md`](https://github.com/janraasch/hugo-product-launch/blob/master/exampleSite/content/_index.md)-file in the [`exampleSite/content`](https://github.com/janraasch/hugo-product-launch/tree/master/exampleSite/content)-directory. That should give you a good idea about how things work, and then you can go on from there to make the site your own.

### Adding your branding / colors / css: `assets/css/main.css`

Check out the [`main.css`](https://github.com/janraasch/hugo-product-launch/blob/master/assets/css/main.css)-file from the [`assets/css`](https://github.com/janraasch/hugo-product-launch/tree/master/assets/css)-directory to get started and to find more detailed instructions.

## Issues / Feedback / Contributing

Please use [GitHub issues][github-issues-url] and [Pull Requests][github-pulls-url].

If you do not have a GitHub-account, feel free to hit me up via email (see [janraasch.com][author-url]).

## Sponsor [![Pay me][insert-coins-svg]][paypal-dot-me]

Support my work via [GitHub Sponsors][github-sponsors] or [PayPal][paypal-dot-me]. Also, check out [MORE_PERMISSIONS.md][more-permissions-url].

[![GitHub Stats](https://github-readme-stats.vercel.app/api/?username=janraasch)][github-sponsors].

## Special Thanks 🎁

- Go to [favicon.io][favicon-io-url], for supplying a quick & easy way to create the [favicon used on the exampleSite][favicon-io-example-site-url].
- Go to [Pexels][pexels-url], for supplying those wonderful free stock photos on the [exampleSite][github-example-site-url].

## License

[Hugo Product Launch][github-url] by [Jan Raasch][author-url] is licensed under [CC BY 4.0][license-url]

### Attribution

Please keep the original attribution link when using this theme for your project.

### More Permissions

If you would like to use this theme without attribution, permissions beyond this license's scope are available at [MORE_PERMISSIONS.md][more-permissions-url].

[![CC][license-cc-svg] ![BY][license-by-svg]][license-url]

[more-permissions-url]: https://github.com/janraasch/hugo-product-launch/blob/master/MORE_PERMISSIONS.md
[github-url]: https://github.com/janraasch/hugo-product-launch
[github-example-site-url]: https://github.com/janraasch/hugo-product-launch/tree/master/exampleSite
[github-issues-url]: https://github.com/janraasch/hugo-product-launch/issues
[github-pulls-url]: https://github.com/janraasch/hugo-product-launch/pulls
[author-url]: https://www.janraasch.com
[license-url]: https://creativecommons.org/licenses/by/4.0
[license-cc-svg]: https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1
[license-by-svg]: https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1
[hugo-io-url]: https://gohugo.io/
[netlify-forms-url]: https://www.netlify.com/products/forms/
[favicon-io-url]: https://favicon.io
[favicon-io-example-site-url]: https://favicon.io/favicon-generator/?t=BF&ff=Catamaran&fs=110&fc=%23FFFFFF&b=rounded&bc=%2338b2ac
[pexels-url]: https://www.pexels.com
[paypal-dot-me]: https://www.paypal.me/janraasch/49,00
[insert-coins-svg]: https://img.shields.io/badge/insert-coins-11dde2.svg
[github-sponsors]: https://github.com/sponsors/janraasch
