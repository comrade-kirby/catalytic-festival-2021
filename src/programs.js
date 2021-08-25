const programs = {
  'vienna': {
    location: 'Vienna, Austria',
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
        venue: 'Worm',
        address: 'Boomgaardsstraat 71, Rotterdam, NL',
        audience: 40,
        performances: [
          'Ig  & Gonzo',
          'Andy & Yannis',
          'Terrie &  Kaja  & Ig',
          'Ab  & Joost',
          'Jaap & Raoul'
        ]
      },
      {
        location: 'Haarlem',
        date: 'Saturday October 9, 2021',
        venue: 'Pletterij',
        performances: [
          'Ab & Ig & George & Pau',
          'Terrie & Andy & Jaap& Genevieve',
          'Ig & Isabelle  Hanne & Martha'
        ]
      },
      {
        location: 'Amsterdam',
        date: 'Sunday October 10, 2021',
        venue: 'Bimhuis',
        performances: [
          'Ab & Isabelle & Terrie & Hanne',
          'Andy en Genevieve',
          'Ig & Anne',
          'Jaap & Felicity'
        ]
      },
    ]
  },
  'chicago': {
    location: 'Chicago, USA',
    date: 'October 14, 16-17',
    venue: 'Elastic Arts',
    events: [
      {
        date: 'Thursday October 14, 2021',
        performances: [
          'Claire & Macie & Ken',
          'Bonnie', 
          'Kuzu'
        ]
      },
      {
        date: 'Saturday October 16, 2021',
        performances: [
          'McPhee & claire',
          'Damon', 
          'Marker'
        ]
      },
      {
        date: 'Sunday October 17, 2021',
        performances: [
          'Feldman & Daisy',  
          'Tashi', 
          'McPhee & Corsano & Bonnie & (some other Chicagoan?'
        ]
      }
    ]
  },
  'new-york': {
    location: 'New York, USA',
    date: 'October 23, 24',
    venue: 'Fridman Gallery',
    audience: 120,
    events: [
      {
        performances: [
          'Zeena Parkins',
          'Brandon Lopez',
          'Nate Wooley',
          'Chris Corsano',
          'Ikue Mori',
          'Luke Stewart',
          'Bonnie Jones',
          '+ Others'
        ]
      },
    ]
  },
  'trondheim': {
    location: 'Trondheim, Norway',
    date: 'October 30, 31',
    venue: 'Stillverk1',
    audience: 60,
    events: [
      {
        date: 'Saturday October 10, 2021',
        performances: [
          'Paal Nilssen-Love & Guro Kvåle',
          'TEIP TRIO',
          'TRIO NÅRTH',
          'Paal Nilssen-Love & Terrie Ex & Signe Emmeluth & Hanne DeBacker',
          'Juliane Schutz',
          'DJ LOVE'
        ]
      },
      {
        date: 'Saturday October 10, 2021',
        performances: [
          'Tollef Østvang & Klaus Holm',
          'Genevieve Murphy & Andy Moor',
          'Jenny Frøysa & Emil Storløkken Åse/August Glännestrand',
          'Matilda Rolfsson & Anna Thu Smith & Ingebrigt Håker Flaten & Amalie Dahl',
          'Juliane Schutz',
          'REFLECTIONS/PANEL'
        ]
      }
    ]
  },
  'washington-dc': {
    location: 'Washington, D.C., USA',
    date: 'October 30, 31',
    venue: 'Rhizome',
    audience: 150,
    events: [
      {
        performances: [
          'Luke Stewart',
          'Ben Hall',
          'Joe Morris'
        ]
      }
    ]
  },
}

export default programs