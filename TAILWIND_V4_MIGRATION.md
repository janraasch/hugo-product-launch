# Tailwind CSS v4 Migration Guide for Hugo Product Launch Theme

This theme has been upgraded from Tailwind CSS v2 to v4. Here are the key changes:

## What's Changed

### 1. **CSS-based Configuration**
- Configuration moved from `tailwind.config.js` to `assets/css/main.css`
- All theme customizations now use CSS variables in the `@theme` block

### 2. **Simplified PostCSS Setup**
- Only requires `@tailwindcss/postcss` plugin
- Autoprefixer and postcss-import are now built into Tailwind v4
- PurgeCSS functionality is built-in and automatic

### 3. **Hugo Integration**
- Content detection works automatically with Hugo templates
- `hugo_stats.json` is still supported for optimal builds
- The `@source` directives in main.css tell Tailwind where to find templates

## Breaking Changes

### Color Palette
The theme uses the Tailwind v1/v2 color palette (with names like `gray-100` to `gray-900`). These are preserved in the configuration, so your existing color classes will continue to work.

### Build Performance
Tailwind v4 offers significantly faster build times:
- Full builds: ~3.5x faster
- Incremental builds: ~8x faster
- Builds with no new CSS: ~100x faster

## Hugo-Specific Setup

### Production Builds
Ensure your Hugo production config has build stats enabled:

```toml
# config/production/build.toml
[build.buildStats]
    enable = true
```

This generates `hugo_stats.json` which helps Tailwind optimize the final CSS.

### Development
No special configuration needed. Tailwind v4 automatically detects changes in your templates.

## Using the Theme

All existing Tailwind classes work the same way. The upgrade maintains backward compatibility with your existing templates and styles.

### Custom Colors
If you need to add custom colors, add them to the `@theme` block in `assets/css/main.css`:

```css
@theme {
  /* Add your custom colors */
  --color-brand-500: #your-color;
}
```

Then use them in your templates:

```html
<div class="text-brand-500">Your content</div>
```

## Troubleshooting

If you encounter any issues:

1. Clear Hugo's cache: `hugo mod clean`
2. Rebuild: `hugo --gc --minify`
3. Check that `hugo_stats.json` is being generated in production builds

For more information about Tailwind CSS v4, see: https://tailwindcss.com/docs/v4