module.exports = {
  uploads_dir: '/assets/img/uploads',
  _collection_groups: [
    {
      heading: "Pagina's",
      collections: ['pages']
    },
    {
      heading: 'Aanbod',
      collections: ['omgeving', 'arrangementen', 'activiteiten', 'overnachtingen']
    },
    {
      heading: 'Sloepen',
      collections: ['sloepen']
    },
    {
      heading: 'Algemeen',
      collections: ['data/info']
    },
  ],
  collections: {
    pages: {
      path: '',
      filter: 'strict',
      output: true,
      _enabled_editors: ['visual']
    },
    omgeving: {
      path: '/aanbod/omgeving',
      _icon: 'landscape',
      output: true,
      _enabled_editors: ['visual']
    },
    arrangementen: {
      path: '/aanbod/arrangementen',
      _icon: 'groups',
      output: true,
      _enabled_editors: ['visual']
    },
    activiteiten: {
      path: '/aanbod/activiteiten',
      _icon: 'directions_bike',
      output: true,
      _enabled_editors: ['visual']
    },
    overnachtingen: {
      path: '/aanbod/overnachtingen',
      _icon: 'hotel',
      output: true,
      _enabled_editors: ['visual']
    },
    routes: {
      path: '/aanbod/routes',
      _icon: 'map',
      output: false,
      _enabled_editors: ['data']
    },
    sloepen: {
      path: '/sloepen',
      _icon: 'directions_boat',
      output: true,
      _enabled_editors: ['visual']
    }
  },
  _inputs: {
    SEO: {
      comment: 'Zoekmachine-optimalisate, Wordt weergegeven in Google en heeft invloed op je vindbaarheid'
    },
    page_title: {
      label: 'Titel',
      comment: 'Probeer de pagina te beschrijven in 50–60 karakters'
    },
    page_description: {
      label: 'Omschrijving',
      comment: 'Probeer je pagina te beschrijven in 50-120 karakters'
    },
    image: {
      label: 'Upload'
    },
    alt: {
      label: 'Omschrijving',
      comment: 'Omschrijf je afbeelding in maximaal 125 karakters'
    }
  }
};