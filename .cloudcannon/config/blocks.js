const { inputs } = require('./commons')

/*
  As it's more convenient to stores the blocks in a single file and import them singlehandedly in structures.
*/

module.exports = {
  text: {
    label: "Text",
    icon: "article",
    // This structures the fields of the block when a user will have to edit its content.
    // Here we only have two fields, `layout` needs to be added to identify the block "type".
    value: {
      layout: "text",
      title: null,
      copy: null
    },
  },
  image: {
    label: "Image",
    icon: "image",
        // Overwrite the global or collection inputs configuration here.
    _inputs: {
      copy: {
        label: "Caption",
        comment: "The caption will appear below the image"
      }
    },
    value: {
      layout: "image",
      image: null,
      copy: null,
      alt: null
    }
  },
  video: {
    label: "Video",
    icon: "videocam",
    value: {
      layout: "video",
      title: null,
      video_id: null,
    }
  }
}