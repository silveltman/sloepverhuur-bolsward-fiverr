const pluginSass = require("eleventy-plugin-sass");
const Image = require("@11ty/eleventy-img");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

// Function for eleventy-img plugin (docs: https://www.11ty.dev/docs/plugins/image/)
// Can be used in Liquid with: {% image "[path]", "[class]", "[alt]", "[sizes]", "[widths]" %
// Example: {% image "./assets/img/myImg.jpg", "myClass", "A description", "(max-width: 768px) 90vw, 300px", "300, 600, 900" %}

async function imageShortcode(src, className, alt, sizes, widths) {
  let widthsArray = widths.split(',').map(Number);
  // Put . infront of src so we don't have to do it manually for every image + compatability with CMS's
  let metadata = await Image(`.${src}`, {
    widths: widthsArray,
    formats: ["webp", "jpeg", "svg"],
    url_path: ".",    // WARNING: Usage with this url_path setting has not been tested yet
    outputDir: "./_site/img/",
    svgShortCircuit: true,
  });

  let imageAttributes = {
    class: className,
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // Throws an error when alt is missing (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {

  eleventyConfig.addLiquidShortcode("image", imageShortcode);

  eleventyConfig.addPlugin(pluginSass, {
    input: ['./_sass/**/*.{scss,sass}', '!node_modules/**'],
    outputDir: "assets",
    remap: true
  });

  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://example.com",
    },
  });

  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
    },
  };
};
