module.exports = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Examples',
    url: '',
    dropdown: {
      collection: 'examples',
      custom: ''
    }
  },
  {
    name: 'More',
    url: '',
    dropdown: {
      collection: '',
      custom: [
        {
          name: 'Link A',
          url: '/'
        },
        {
          name: 'Link B',
          url: '/'
        },
      ]
    }
  }
];
