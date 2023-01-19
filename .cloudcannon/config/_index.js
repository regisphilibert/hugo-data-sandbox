const { helpers: {collections_config} } = require('./commons.js')

module.exports = {
  // Easier to use the following when starting the setup.
  collections_config_override: true,

  timezone: "America/New_York",

  paths: {
    data: "data",
  },

  // If any data file is used to populate select fields,
  // its base basename below should be used as a truthy key.
  data_config: {
    // Example for `data/states.yaml`
    states: true
  },

  /**********************************
  * ENABLED EDITORS
  * Set the default editor for the project, add more to allow selection. 
  * See https://cloudcannon.com/documentation/articles/choosing-the-editors-for-each-file/?ssg=Hugo
  * Will be overwritten by collection.
  */
  _enabled_editors: [
    "data"
  ],

  /**********************************
  * COMPONENTIZED MAIN CONFIG OBJECTS
  * We use componentized files for main configuration objects. 
  * See files for related comments.
  */
  _inputs: require('./inputs.js'),
  _structures: require('./structures.js'),
  _select_data: require('./select.js'),
  _editables: require('./editables.js'),

  /************************* 
  * SNIPPETS IMPORTS
  * This will determinte which built-in Hugo shortcodes' snippets are enabled.
  */
  _snippets_imports: {
    hugo: {
      include: [
        "hugo_youtube",
        "hugo_vimeo"
      ]
    }
  },

  // This files hold the custom shortcodes' snippets of the project. See inside for comments.
  _snippets: require('./snippets.js'),

  /************************* 
  * SIDEBAR
  * This defines the sidebar ordering and grouping. 
  */
  collection_groups: [
    {
      heading: "Updates",
      collections: [
       "posts"
      ]
    },
  ],
    /************************* 
  * COLLECTION SETTINGS
  * This where we set settings for each collection.
  * The collections_config() function geneare `{name}: require('./collections/{name}')
  */
  collections_config: {
    ...collections_config([
      "posts"
    ]),
    /* Any collection which do not need a file can go here:
    simple: {
      path: content/simple,
    } 
    */
  }
}