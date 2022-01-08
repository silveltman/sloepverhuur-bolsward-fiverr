module.exports = {
  uploads_dir: '/assets/img/uploads',
  _collection_groups: [
    {
      heading: "Pagina's",
      collections: ['pages']
    },
    {
      heading: 'Aanbod',
      collections: ['omgeving', 'arrangementen', 'activiteiten']
    },
    {
      heading: 'Sloepen',
      collections: ['sloepen']
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
      _enabled_editors: ['data', 'content']
    },
    arrangementen: {
      path: 'aanbod/arrangementen',
      _icon: 'groups',
      _enabled_editors: ['visual', 'data']
    },
    activiteiten: {
      path: 'aanbod/activiteiten',
      _icon: 'directions_bike',
      _enabled_editors: ['visual']
    },
    routes: {
      path: 'aanbod/routes',
      _icon: 'map',
      _enabled_editors: ['data']
    },
    sloepen: {
      path: 'sloepen',
      _icon: 'directions_boat',
      _enabled_editors: ['data', 'content']
    }
  },
  _inputs: {
    page_title: {
      label: 'Pagina titel',
      comment: 'Probeer je pagina te beschrijven in 50–60 karakters. Wordt weergegeven in Google en heeft invloed op je vindbaarheid'
    },
    page_description: {
      label: 'Pagina beschrijving',
      comment: 'Probeer je pagina te beschrijven in 120-50 karakters. Wordt weergegeven in Google en heeft invloed op je vindbaarheid'
    },
    image: {
      label: 'Afbeelding upload'
    },
    alt: {
      label: 'Afbeelding beschrijving',
      comment: 'Omschrijf je afbeelding in maximaal 125 karakters'
    }
  }
};