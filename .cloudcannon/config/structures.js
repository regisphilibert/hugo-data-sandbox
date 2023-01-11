const blocks = require('./blocks.js')

module.exports = {
  /*
  With the following, any field called `ctas` or ending in `_ctas` will become a "list group field"
  while any field called `cta` or ending in `_cta`, singular, will will become a "group field"
  To use this structure on a field called differently:
  ```
  _inputs: {
    buttons: {
      options: {
        structures: _structures.ctas
      }
    }
  }
  ```
  */
  ctas: {
    values: {
      value: {
        url: null,
        copy: null,
      }
    }
  },

  // the SEO Object field, always singular.
  seo: {
    values: {
      // The preview of the object. See: https://cloudcannon.com/documentation/articles/changing-how-cards-preview-your-data/?ssg=Hugo
      preview: {
        icon: "troubleshoot",
        image: [
          { key: "image" }
        ],
        text: [
          "Custom SEO Data"
        ],
        subtext: [
          { key: "description" },
          "Overwrite description for SEO?",
        ],
      },
      value: {
        description: null,
        canonical: null,
        image: null
      }
    }
  },

  /* Blocks for page builder...
     This is how to define a list of blocks on the `blocks` field. 
  */ 
  blocks: {
    label: "Blocks",
    style: "modal",
    // The id_key helps identify which block is what. (text, image or video)
    id_key: "layout",
    values: [
      // `blocks` is imported from `./blocks.js`
      blocks.text,
      blocks.image,
      blocks.video
    ]
  },
  /*  We declare a new structures here, to limit the number of blocks on some pages.
      Their `blocks` field needs to use `_structures.simple_blocks`
  */
  simple_blocks: {
    label: "Blocks",
    style: "modal",
    id_key: "layout",
    values: [
      blocks.text,
      blocks.image,
    ]
  },
}