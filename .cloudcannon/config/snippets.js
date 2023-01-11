module.exports = {
  spacer: {
    template: 'hugo_shortcode_positional_args',
    inline: false,
    definitions: {
      shortcode_name: 'spacer',
      positional_args: [
        {
          editor_key: 'size',
          type: 'string',
          optional: true,
          remove_empty: true
        }
      ]
    },
    picker_preview: {
      subtext: 'Add some spacing in between paragraphs'
    },
    preview: {
      icon: "height",
      text: 'Spacer',
      subtext: [
        {
          key: 'size'
        },
        "Size 1"
      ]
    },
    _inputs: {
      size: {
        type: 'select',
        label: "The size of the vertical space",
        options: {
          values: ["1", "2", "3"]
        }
      }
    }
  },
  colorize: {
    template: "hugo_paired_markdown_shortcode_positional_args",
    inline: true,
    definitions: {
      shortcode_name: "colorize",
      content_key: "copy",
      positional_args: [
        {
          editor_key: 'color',
          type: 'string',
          default: "green",
          optional: true,
          remove_empty: true
        }
      ]
    },
    picker_preview: {
      icon: "color_lens",
      text: 'Colorize',
      subtext: 'Colorize some text.'
    },
    preview: {
      icon: false,
      text: 'Colorize',
      subtext: [
        {
          key: 'color'
        },
        "green"
      ]
    },
    _inputs: {
      color: {
        type: "select",
        options: {
          values: ["green", "orange", "pink"]
        }
      }
    }
  }
}