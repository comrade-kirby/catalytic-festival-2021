const programs = {
  'vienna': {
    location: 'Vienna, Austria',
    venue: {
      name: 'Porgy & Bess',
      link: 'https://www.porgy.at/'
    },
    date: 'October 1-3',
    events: []
  },
  'rotterndam-haarlem-amsterdam': {
    location: 'Rotterndam + Haarlem + Amsterdam, Netherlands',
    date: 'October 8-10',
    events: [
      {
        location: 'Rotterndam',
        date: 'Friday October 8, 2021',
        venue: { name: 'Worm' },
        address: 'Boomgaardsstraat 71, Rotterdam, NL',
        audience: 40,
        performances: [
          { name: 'Ig  & Gonzo' },
          { name: 'Andy & Yannis' },
          { name: 'Terrie &  Kaja  & Ig' },
          { name: 'Ab  & Joost' },
          { name: 'Jaap & Raoul' }
        ]
      },
      {
        location: 'Haarlem',
        date: 'Saturday October 9, 2021',
        venue: { name: 'Pletterij' },
        performances: [
          { name: 'Ab & Ig & George & Pau' },
          { name: 'Terrie & Andy & Jaap& Genevieve' },
          { name: 'Ig & Isabelle  Hanne & Martha' }
        ]
      },
      {
        location: 'Amsterdam',
        date: 'Sunday October 10, 2021',
        venue: { name: 'Bimhuis' },
        performances: [
          { name: 'Ab & Isabelle & Terrie & Hanne' },
          { name: 'Andy en Genevieve' },
          { name: 'Ig & Anne' },
          { name: 'Jaap & Felicity' }
        ]
      },
    ]
  },
  'chicago': {
    location: 'Chicago, USA',
    date: 'October 14, 16-17',
    venue: {
      name: 'Elastic Arts',
      link: 'https://elasticarts.org'
     },
    events: [
      {
        date: 'Thursday October 14, 2021',
        link: 'https://elasticarts.org',
        performances: [
          { name: 'claire rousay, Macie Stewart & Ken Vandermark' },
          { name: 'Bonnie Jones' },
          { name: 'Kuzu' }
        ]
      },
      {
        date: 'Saturday October 16, 2021',
        performances: [
          { name: 'Joe McPhee & claire rousay' },
          { name: 'Damon Locks' },
          { name: 'Marker' }
        ]
      },
      {
        date: 'Sunday October 17, 2021',
        performances: [
          { name: 'Mark Feldman & Tim Daisy' },
          { name: 'Tashi Dorji' },
          { name: 'Joe McPhee, Chris Corsano, Bonnie Jones & Katjinka Klein' }
        ]
      }
    ]
  },
  'new-york': {
    location: 'New York, USA',
    date: 'October 23, 24',
    venue: {
      name: 'Fridman Gallery',
      link: 'https://www.fridmanlive.com'
    },
    audience: 120,
    events: [
      {
        performances: [
          { name: 'Zeena Parkins' },
          { name: 'Brandon Lopez' },
          { name: 'Nate Wooley' },
          { name: 'Chris Corsano' },
          { name: 'Ikue Mori' },
          { name: 'Luke Stewart' },
          { name: 'Bonnie Jones' },
          { name: '+ Others' }
        ]
      },
    ]
  },
  'trondheim': {
    location: 'Trondheim, Norway',
    date: 'October 30, 31',
    venue: { name: 'Stillverk1' },
    audience: 60,
    events: [
      {
        date: 'Saturday October 10, 2021',
        performances: [
          {
            name: 'Paal Nilssen-Love & Guro Kvåle',
            info: {
              bio: 'ad-hoc meeting with Paal and an amazing up-and-coming trombonist studying first semester at the jazz academy in Trondheim'
            }
          },
          {
            name: 'TEIP TRIO',
            info: {
              bio: 'local improvising trio and working group with bass, guitar and bass clarinet. This performance will be in connection with their debut album-release on Sonic Transmissions Records'
            }
          },
          {
            name: 'TRIO NÅRTH',
            info: {
              bio: 'Mette Rasmussen/Ingebrigt Håker Flaten/Veslemøy Narvesen (new improvising working band based in Trondheim with Mette, Veslemøy and myself'
            }
          },
          {
            name: 'Paal Nilssen-Love & Terrie Ex & Signe Emmeluth & Hanne DeBacker',
            info: {
              bio: 'pan-scandinavian/european working band with Paal and Terrie)'
            }
          },
          {
            name: 'Juliane Schutz',
            info: {
              bio: 'live stream and projections'
            }
          },
          {
            name: 'DJ LOVE',
            info: {
              bio: 'ALBUMS FROM INGOS RECORD COLLECTION'
            }
          }
        ]
      },
      {
        date: 'Saturday October 10, 2021',
        performances: [
          {
            name: 'Tollef Østvang & Klaus Holm',
            info: {
              bio: 'local / national ad-hoc drum and reed duo'
            }
          },
          { name: 'Genevieve Murphy & Andy Moor' },
          {
            name: 'Jenny Frøysa & Emil Storløkken Åse/August Glännestrand',
            info: {
              bio: 'working band with local improvisers freshly out from the jazz academy'
            }
          },
          {
            name: 'Matilda Rolfsson & Anna Thu Smith & Ingebrigt Håker Flaten & Amalie Dahl',
            info: {
              bio: 'ad-hoc meeting between drums, bass, saxophone and dance with PHD fellow Matilda Rolfsson and improvisers from the interdisciplinary art scenes in Trondheim'
            }
          },
          {
            name: 'Juliane Schutz',
            info: {
              bio: 'live stream and projections'
            }
          },
          {
            name: 'REFLECTIONS/PANEL',
            info: {
              bio: '3 x 30-45 min with three different panels with artists from the lineup'
            }
          }
        ]
      }
    ]
  },
  'washington-dc': {
    location: 'Washington, D.C., USA',
    date: 'October 30, 31',
    venue: {
      name: 'Rhizome',
      link: 'https://www.rhizomedc.org'
    },
    audience: 150,
    events: [
      {
        performances: [
          { name: 'Luke Stewart' },
          { name: 'Ben Hall' },
          { name: 'Joe Morris' }
        ]
      }
    ]
  },
}

export default programs
