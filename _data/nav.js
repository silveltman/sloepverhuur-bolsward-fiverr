module.exports = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Sloepen',
    url: '',
    dropdown: {
      collection: 'sloepen',
    }
  },
  {
    name: 'Aanbod',
    url: '',
    dropdown: {
      collection: null,
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
        {
          name: 'Activiteiten',
          url: '/aanbod/activiteiten'
        },
        {
          name: 'Overnachtingen',
          url: '/aanbod/overnachtingen'
        },
      ]
    }
  }
];
