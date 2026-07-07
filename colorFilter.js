// ============================================================
//  VARIANT-LEVEL COLOR FILTERING
//  Drop this alongside data.js. Depends on MODELS from data.js.
// ============================================================

/**
 * Given a color value (e.g. "green"), returns one entry per matching
 * variant across all models — NOT one entry per model. A model with
 * 7 variants where only 2 are green will contribute exactly 2 results.
 *
 * @param {string} colorValue - value from FILTER_OPTIONS.colorTag, e.g. "green"
 * @param {object} [opts]
 * @param {string} [opts.category] - optional additional category filter
 * @param {string} [opts.room] - optional additional room filter
 * @returns {Array<{model: object, variant: object}>}
 */
function getVariantsByColor(colorValue, opts = {}) {
  const results = [];

  for (const model of MODELS) {
    if (opts.category && model.category.toLowerCase() !== opts.category.toLowerCase()) continue;
    if (opts.room && !model.room.some(r => r.toLowerCase() === opts.room.toLowerCase())) continue;

    for (const variant of model.variants) {
      const tags = variant.colorTags || [];
      if (tags.includes(colorValue)) {
        results.push({ model, variant });
      }
    }
  }

  return results;
}

/**
 * Convenience helper: resolves the image filename for a given
 * model + variant pairing, using the model's `images` map.
 */
function getVariantImage(model, variant) {
  return model.images[variant.code];
}

/**
 * Resolves which variant should be shown as a model's "cover" image.
 * Priority: 1) a variant matching the given color context (if any),
 * 2) the model's manually-set defaultVariant (if any and valid),
 * 3) the first variant.
 *
 * @param {object} model
 * @param {string[]} [colorContext] - color values currently active (filters and/or search)
 */
function getDefaultVariant(model, colorContext = []) {
  for (const c of colorContext) {
    const match = model.variants.find(v => (v.colorTags || []).includes(c));
    if (match) return match;
  }
  if (model.defaultVariant) {
    const dv = model.variants.find(v => v.code === model.defaultVariant);
    if (dv) return dv;
  }
  return model.variants[0];
}

/**
 * Resolves a free-text search string to a valid FILTER_OPTIONS.color
 * value, if it matches one exactly (case-insensitive, value or label).
 * Returns null if the query isn't a recognized color.
 */
function resolveColorFromQuery(query) {
  if (!query) return null;
  const q = query.toLowerCase().trim();
  const opt = FILTER_OPTIONS.color.find(o => o.value === q || o.label.toLowerCase() === q);
  return opt ? opt.value : null;
}

// If you're on plain <script> tags (no bundler/modules), these are
// already globally available. If you're using ES modules, uncomment:
// export { getVariantsByColor, getVariantImage, getDefaultVariant, resolveColorFromQuery };
