# Hugo Product Launch [![CI](https://github.com/janraasch/hugo-product-launch/actions/workflows/ci.yml/badge.svg)](https://github.com/janraasch/hugo-product-launch/actions/workflows/ci.yml)

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
- _No!-code_ Content Management via [Forestry](https://forestry.io) 💼
- [tailwindcss](https://tailwindcss.com) for speedy styling 🏎
- No! JavaScript 🥳

## One-click Deploy / Installation

Deploy [🚀 Hugo Product Launch][github-url] to [netlify](https://www.netlify.com/) by clicking this button:

[![Deploy to netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/janraasch/hugo-product-launch-kickstart)

Alternatively, you may also clone the [kickstart-repo](https://github.com/janraasch/hugo-product-launch-kickstart), and skip right to the [usage instructions](#usage)

## Manual Installation

If you already have a Hugo site on your machine, you can simply add this theme via

```
git submodule add https://github.com/janraasch/hugo-product-launch.git themes/hugo-product-launch
```

Then, adjust the `hugo.toml` as [detailed below](#usage).

For more information, read the official [setup guide](https://gohugo.io/getting-started/installing) of Hugo.

#### Example Content

Simply copy over the contents of the `exampleSite`-directory included in this theme to your source directory. That should give you a good idea about how things work, and then you can go on from there to make the site your own.

#### NodeJS Dependencies

You need to have [NodeJS](https://nodejs.org) installed. Then, copy the `package.json`- & `package-lock.json`-files from the root of this theme to your site's root. Run `npm install`.

#### Take over `main.css`

Simply copy over the `assets/css/main.css`-file from this repo into your local `assets/css`-folder. You may then add any CSS you like into your own `assets/css/main.css`-file. See [tailwindcss > docs > configuration](https://tailwindcss.com/docs/configuration) for more details.

## Usage

If you would like to have a nice & clean _no!-code_ User Interface 🧁 for Content Management, simply connect your repository with [Forestry](https://forestry.io). We included the necessary batteries 🔋 (i.e. settings) on the `exampleSite/.forestry`-folder so you are ready to go right out of the gate.

### Base configuration: `hugo.toml`

Please check out the [`hugo.toml`](https://github.com/janraasch/hugo-product-launch/blob/master/exampleSite/hugo.toml)-file included in the [exampleSite](https://github.com/janraasch/hugo-product-launch/tree/master/exampleSite) of this theme.

### Adding Content: `content/_index.md`

Start with the contents provided in the [`_index.md`](https://github.com/janraasch/hugo-product-launch/blob/master/exampleSite/content/_index.md)-file in the [`exampleSite/content`](https://github.com/janraasch/hugo-product-launch/tree/master/exampleSite/content)-directory. That should give you a good idea about how things work, and then you can go on from there to make the site your own.

This [markdown cheat-sheet](https://www.markdownguide.org/cheat-sheet) might come in handy 🙌🏻.

### Adding your branding / colors / css: `assets/css/main.css`

Check out the [`main.css`](https://github.com/janraasch/hugo-product-launch/blob/master/assets/css/main.css)-file from the [`assets/css`](https://github.com/janraasch/hugo-product-launch/tree/master/assets/css)-directory to get started and to find more detailed instructions.

## Issues / Feedback / Contributing

Please use [GitHub issues][github-issues-url] and [Pull Requests][github-pulls-url].

If you do not have a GitHub-account, feel free to hit me up via email (see [janraasch.com][author-url]).

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
