module.exports = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'Sloepen',
    url: '',
    dropdown: {
      collection: 'sloepen',
      custom: ''
    }
  },
  {
    name: 'Aanbod',
    url: '',
    dropdown: {
      collection: '',
      custom: [
        {
          name: 'Omgeving',
          url: '/aanbod/omgeving'
        },
        {
          name: 'Arrangementen',
          url: '/aanbod/arrangementen'
        },
        {
          name: 'Routes',
          url: '/aanbod/routes'
        },
      ]
    }
  },
  {
    name: 'Contact',
    url: '/'
  },
];
