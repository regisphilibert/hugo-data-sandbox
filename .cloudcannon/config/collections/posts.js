const { inputs, options } = require('../commons.js')

module.exports = {
  path: "content/posts",
  name: "Posts",
  
  // Only useful if singular name cannot be deduced from collection key
  singular_name: "Post",
  // Only useful if singular key cannot be deduced from collection key
  singular_key: "post",
  // If not set, will default to an ugly screenshot of the page.
  image_key: "none",
  // Use Material Icons name. Use https://strict-hanger.cloudvent.net for up-to-date list.
  icon: "heat_pump",
  // Will appear at the top of the collection landing page
  description: "This is where the pages for the 'Your Project' section of the site are edited.",
  /* Useful to add a documentation link
  documentation: {
    url: "https://www.site.com/documentation/posts",
    text: "Read the documentation for this section here"
  }, */
  // See ./commons.js[options][sort_options]
  sort_options: options.sort_options,

  // Overwrite the project's default selection
  _enabled_editors: [
    "content"
  ],

  // This example provides two schemas, one for all the files, and one for the landing page (_index.md)
  // _schema: landing must be added to landing page's front-matter.
  schemas: {
    default: {
      ...options.base_schema,
      path: ".cloudcannon/schemas/posts/default.md"
    },
    landing: {
      ...options.base_schema,
      path: ".cloudcannon/schemas/posts/landing.md"
    }
  },
  // This allow to overwrite default inputs configuration for this collection
  _inputs: {
    title: {
      label: "Post Title"
    }
  }
}
