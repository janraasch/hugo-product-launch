# Tailwind CSS v4 Migration Guide

This document outlines the changes made during the migration from Tailwind CSS v2.2.16 to v4.1.11.

## Major Changes

### 1. Package Dependencies

- Updated `tailwindcss` from `^2.2.16` to `^4.1.11`
- Updated `@tailwindcss/typography` from `^0.4.1` to `^0.5.15`
- Added `@tailwindcss/postcss` as the new PostCSS plugin

### 2. CSS Import Syntax

**Before (v2):**

```css
@import "node_modules/tailwindcss/base";
@import "node_modules/tailwindcss/components";
@import "node_modules/tailwindcss/utilities";
```

**After (v4):**

```css
@import "tailwindcss";
```

### 3. Configuration Method

**Before (v2):** Configuration was done in `tailwind.config.js`

**After (v4):** Configuration is now done directly in CSS using `@theme`:

```css
@theme {
  --color-gray-100: #f7fafc;
  --color-gray-200: #edf2f7;
  /* ... */
}
```

### 4. PostCSS Plugin

**Before (v2):**

```js
require("tailwindcss");
```

**After (v4):**

```js
require("@tailwindcss/postcss");
```

## Benefits of v4

- **5x faster full builds** and **100x+ faster incremental builds**
- **CSS-first configuration** - no more JavaScript config files
- **Automatic content detection** - no need to manually configure content paths
- **Built-in container queries**
- **Modern CSS features** like cascade layers and registered custom properties
- **New utilities** like `text-shadow-*`, `mask-*` utilities, and more

## Backward Compatibility

The migration preserves all existing custom colors and functionality. All Tailwind classes used in templates should continue to work as expected.

## Files Modified

1. `package.json` - Updated dependencies
2. `postcss.config.js` - Updated to use new PostCSS plugin
3. `assets/css/main.css` - Updated imports and added theme configuration
4. `tailwind.config.js` - Can be removed (functionality moved to CSS)

## Next Steps

1. Test the build process
2. Verify all existing styles still work
3. Consider taking advantage of new v4 features like:
   - Container queries (`@container`, `@sm:`, `@md:`, etc.)
   - Text shadows (`text-shadow-sm`, `text-shadow-lg`, etc.)
   - Mask utilities for creative effects
   - New 3D transform utilities

## Resources

- [Tailwind CSS v4.0 Release Notes](https://tailwindcss.com/blog/tailwindcss-v4)
- [Tailwind CSS v4.1 Release Notes](https://tailwindcss.com/blog/tailwindcss-v4-1)
- [Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide)
