const removeNewlines = (string) => string.replace(/\n$/g, "");

// See https://gohugo.io/hugo-pipes/postprocess/#css-purging-with-postcss
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: [
    //
    // TODO: Maybe use process.cwd() to get some heuristics of what
    // is going on, i.e. which of the following cases we are in.
    //

    // When this file is copied to the root of your Hugo site
    "./hugo_stats.json",
    // When your Hugo site does not have its own postcss.config.js
    // and hence this file is used inside ./themes/hugo-product-launch
    "../../hugo_stats.json",
    // When building the exampleSite during development
    "./exampleSite/hugo_stats.json",
  ],
  defaultExtractor: (content) => {
    let els = JSON.parse(content).htmlElements;
    // An HTML element-name may include a newline, e.g.
    // <a
    //    href="https://www.yo.com"
    //    class="pretty-link"
    // >Yo!</a>
    // Thus we remove those newlines.
    return els.tags.concat(els.classes, els.ids).map(removeNewlines);
  },
});

module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.HUGO_ENVIRONMENT === "production" ? [purgecss] : []),
  ],
};
