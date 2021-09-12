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
  'rotterdam-haarlem-amsterdam': {
    location: 'Rotterdam + Haarlem + Amsterdam, Netherlands',
    date: 'October 8-10',
    events: [
      {
        location: 'Rotterdam',
        date: 'Friday October 8, 2021',
        link: 'https://worm.org/production/catalytic-sound-festival/',
        venue: {
          name: 'Worm',
          link: 'https://worm.org'},
        audience: 40,
        performances: [
          {
            name: 'Ig Henneman, Gonçalo Almeida & Kaja Draksler',
            info: {
              bio: 'Ig Henneman, on viola, will play with Gonçalo Almeida on bass and brilliant Slovenian pianist Kaja Draksler. '
                  }
          },
          {
            name: 'Andy Moor & Yannis Kyriakides',
            info: {
              bio: 'Andy Moor (The Ex) and Cypriot Composer Yannis Kyriakides are a long-standing duo working with textured and pulse electronics and abrasive guitar. They will perform pieces from their recent release ‘Pavilion’ on the Unsounds label.'
            }
           },
          {
            name: 'Terrie Ex & Kaja Draksler with Ab Baars',
            info: {
              bio: 'Terrie Ex and Kaja Draksler will play as a duo, an enervating combination of strings and keys galore. Later Ab Baars will join on reeds (tenor sax clarinet, shakuhachi). The trio plans to release a CD in the near future.'
            }
           },
          {
            name: 'Jaap Blonk & Raoul Van de Weide with Terrie Ex',
            info: {
              bio: 'Jaap Blonk and Raoul Van de Weide will begin an improvised set, then joined by Terrie Ex. This promises to be a cacophony of sound, voice, electronics and double bass; with Terrie’s unmistakable guitar sound.'
            }
          },
          {
            name: 'Hanne De Backer, Paul Lytton & Andy Moor',
            info: {
              bio: 'Hanne De Backer is a powerful and vibrant reed player from Antwerp. Hanne will play  baritone sax with the amazing UK drummer Paul Lytton. Guitarist Andy Moor will join them.'
            }
          },
          {
            name: 'Ab Baars, Joost Buis & Hanne De Backer',
            info: {
              bio: 'Ab Baars (tenor sax), Joost Buis (trombone) and Hanne De Backer (baritone sax and bass clarinet) are three incredible horn players. The trio have never played together before. So: the idea was, put them together and see what happens! Expect fireworks.'
            }
          }
        ]
      },
      {
        location: 'Haarlem',
        date: 'Saturday October 9, 2021',
        link: 'https://www.pletterij.nl/event/09-okt-21-catalytic-sound-festival-2021/',
        venue: {
          name: 'Pletterij',
          link: 'https://www.pletterij.nl/'},
        performances: [
          {
            name: 'Ab Baars, Ig Henneman, George Dumitriu & Pau Sola Masafrets',
            info: {
              bio: 'Ab Baars (tenorsax/clarinet/shakuhachi), Ig Henneman (viola), George Dumitriu (violin/viola) & Pau Sola Masafrets (cello)'
            }
          },
          {
            name: 'Terrie Ex, Andy Moor, Jaap Blonk & Genevieve Murphy',
            info: {
              bio: 'Terrie Ex (guitar), Andy Moor (guitar), Jaap Blonk (voice/electronics) & Genevieve Murphy (electronics/bagpipe)'
            }
          },
          {
            name: 'Ig Henneman, Isabelle Duthoit, Hanne De Backer & Martha Warelis' ,
            info: {
              bio: 'Ig Henneman (viola), Isabelle Duthoit (clarinet/voice), Hanne De Backer (baritonsax) & Martha Warelis (piano)' 
            }
          }
        ]
      },
      {
        location: 'Amsterdam',
        date: 'Sunday October 10, 2021',
        link: 'https://www.bimhuis.nl/en/calendar/catalytic-festival/',
        venue: {
          name: 'BIMHUIS',
          link: 'https://www.bimhuis.nl/en'},
        performances: [
          {
            name: 'Ab Baars, Isabelle Duthoit, Terrie Ex & Hanne De Backer',
            info: {
              bio: 'Ab Baars (tenorsax/clarinet/shakuhachi), Isabelle Duthoit (clarinet/voice), Terrie Ex (guitar) & Hanne De Backer (baritonsax)'
            }
          },
          {
            name: 'Andy Moor & Genevieve Murphy',
            info: {
              bio: 'Andy Moor (guitar) & Genevieve Murphy (electronics/bagpipe)'
            }
          },
          {
            name: 'Ig Henneman & Anne La Berge',
            info: {
              bio: 'Ig Henneman (viola) & Anne La Berge (flutes/electronics)'
            }
          },
          {
            name: 'Jaap Blonk & Felicity Provan',
            info: {
              bio: 'Jaap Blonk (voice/electronics) & Felicity Provan (trumpet/voice)'
            }
          }
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
        link: 'https://elasticarts.org/events/catalytic-sound-festival',
        performances: [
          { name: 'claire rousay, Macie Stewart & Ken Vandermark' },
          { name: 'Bonnie Jones' },
          { name: 'Kuzu' }
        ]
      },
      {
        date: 'Saturday October 16, 2021',
        link: 'https://elasticarts.org/events/catalytic-sound-festival-z52cj-mhsay',
        performances: [
          { name: 'Joe McPhee & claire rousay' },
          { name: 'Damon Locks' },
          { name: 'Marker' }
        ]
      },
      {
        date: 'Sunday October 17, 2021',
        link: 'https://elasticarts.org/events/catalytic-sound-festival-z52cj',
        performances: [
          { name: 'Mark Feldman & Tim Daisy' },
          { name: 'Tashi Dorji Solo' },
          { name: 'Marker' }
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
