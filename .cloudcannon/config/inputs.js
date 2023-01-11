const { inputs, options } = require ('./commons.js')

module.exports = {
  layout: inputs.hidden,
  template: inputs.hidden,
  seo: {
    type: "object",
    comment: "Everything SEO"
  },
  blocks: {
    type: "array",
    options: {
      structures: "_structures.blocks"
    }
  },
  copy: {
    ...inputs.markdown,
    options: {
      ...options.editable_base
    }
  },
  alt_title: {
    label: "Alternative title"
  },
  video_id: {
    label: "Video ID",
    comment: "If the media is a video, use this field. Can either be a YouTube video ID or a Vimeo video ID. Ex: x9bRtrfBcPo"
  },
}