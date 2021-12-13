module.exports = {
  uploads_dir: '/assets/img/uploads',
  _collection_groups: [
    {
      heading: "Pagina's",
      collections: ['pages']
    },
    // {
    //   heading: 'Collecties',
    //   collections: ['myCollection']
    // }
  ],
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