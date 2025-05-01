export default {
  likes: 'like | likes',
  seeMore: 'See more',
  options: {
    label: 'Options',
    close: 'Close',
    share: 'Share',
    shareOn: 'Share on {content}',
    delete: 'Delete story',
    copyLink: 'Copy link',
    copied: 'Copied'
  },

  expired: 'The story you tried to view already expired.',

  errors: {
    unsupportedMediaType: 'The media format sent is not supported, please try with a format media {types}',
    unsupportedConstraints: 'Your image should be at least {width}px wide and at least {height}px high.',
    uploadError: 'Sorry, an error occurred during upload.',
    maxUploadSize: 'The size of the sent media is very large, please try with a media of up to {maxUploadSize}MB.',
    or: 'or'
  },

  shareMessages: {
    whatsapp: 'New story from {user} - {url}'
  },

  review: {
    story: `
            Evaluate the <br />
            Fatal Stories
        `
  },

  deleteModal: {
    title: 'Warning',
    content: 'If you have an obligation to delete the media, you cannot publish it again for 48 hours. Do you want to continue and delete the story?',
    confirm: 'Delete story',
    cancel: 'Cancel'
  }
}
