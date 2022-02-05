const pluginBookshop = require("@bookshop/eleventy-bookshop");
const pluginCloudCannonBookshop = require("@bookshop/cloudcannon-eleventy-bookshop");
const yaml = require("js-yaml");
const Image = require("@11ty/eleventy-img");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const metagen = require('eleventy-plugin-metagen');
const inspect = require("util").inspect;

////---------------
//// FUNCTIONS
////---------------

// For eleventy-img plugin via: {% image "[path]", "[class]", "[alt]", "[sizes]", "[widths]" %
// Usage exaple: {% image "./assets/img/myImg.jpg", "myClass", "A description", "(max-width: 768px) 90vw, 300px", "300, 600, 900" %}
async function imageShortcode(src, alt, className, sizes, widths) {
  let widthsArray = widths.split(',').map(Number);
  let metadata = await Image(`.${src}`, {
    widths: widthsArray,
    formats: ["webp", "jpeg", "svg"],
    urlPath: "/assets/img/generated",
    outputDir: "./_site/assets/img/generated",
    svgShortCircuit: true,
  });

  let imageAttributes = {
    class: className,
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // Throw an error when alt is missing (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}


module.exports = function(eleventyConfig) {

  ////---------------
  //// FILTERS
  ////---------------

  // Returns readable js-data
  eleventyConfig.addFilter("debug", (content) => `<pre>${inspect(content)}</pre>`);

  // Returns usable js-data
  eleventyConfig.addFilter("printJS", (data) => {
    const string = `${inspect(data)}`;
    return string.replace(/["]+/g, '')
  });

  // Filters collection by a frontmatter key + value
  eleventyConfig.addFilter("filterByFrontmatter", (collection, key, value) => {
    const found = collection.filter(item => {
       return item.data[key].includes(value)
    })
    return found
  });

  // Returns each collection item which fileSlug is included in an array 
  eleventyConfig.addFilter("filterBySlug", function(collection, slugList) {
    const found = collection.filter(item => {
      return slugList.includes(item.fileSlug)
    })
    return found
  });


  ////---------------
  //// SHORTCODES
  ////---------------

  eleventyConfig.addLiquidShortcode("image", imageShortcode);


  ////---------------
  //// PLUGINS
  ////---------------

  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://sloepverhuurbolsward.nl",
    },
  });

	eleventyConfig.addPlugin(pluginBookshop({
		bookshopLocations: ["component-library"]
	}));
  eleventyConfig.addPlugin(pluginCloudCannonBookshop);

  eleventyConfig.addPlugin(metagen);


  ////---------------
  //// CONFIG
  ////---------------

  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  eleventyConfig.setBrowserSyncConfig({
		files: './_site/assets/css/**/*.css'
	});

  return {
    dir: {
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
    },
  };
};
