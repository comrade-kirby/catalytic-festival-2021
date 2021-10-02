const programs = {
  'vienna': {
    location: 'Vienna, Austria',
    venue: {
      name: 'Porgy & Bess',
      link: 'https://www.porgy.at/'
    },
    date: 'October 1-2',
    events: [
      {
        date: 'Friday October 1, 2021 [20:00 CEST]',
        link: 'https://www.porgy.at/events/10684/',
        ticketLink: 'https://www.porgy.at/events/order/3727/',
        livestreamLink: 'https://www.porgy.at/events/payasyouwish/3732/',
        performances: [
          {
            name: 'Lisa Hofmaninger & Judith Schwarz',
            info: {
              bio:'Lisa Hofmaninger (bass clarinet/soprano saxophone), Judith Schwarz (drums)'
            }
          },
          {
            name: 'Daniel Lercher',
            info: {
              bio: 'Daniel Lercher (electronics)'
            }
          },
          {
            name: 'Mats Gustafsson & Didi Kern',
            info: {
              bio: 'Mats Gustafsson (reeds), Didi Kern (drums)'
            }
          }
        ]
      },
      {
        date: 'Saturday October 2, 2021 [20:00 CEST]',
        link: 'https://www.porgy.at/events/10685/',
        livestreamLink: 'https://www.porgy.at/events/live',
        performances: [
          {
            name: 'Susanna Gartmayer & Christof Kurzmann',
            info: {
              bio: 'Susanna Gartmayer (bass clarinet), Christof Kurzmann (ppooll/electronics/reeds/vocals)'
            }
          },
          {
            name: 'Thomas Berghammer, Jakob Gnigler & Martin Brandlmayr',
            info: {
              bio: 'Thomas Berghammer (trumpet), Jakob Gnigler (tenor saxophone), Martin Brandlmayr(drums)'
            }
          },
          {
            name: 'Elisabeth Harnik, Tanja Feichtmair & Nina Polaschegg',
            info: {
              bio: 'Elisabeth Harnik (piano), Tanja Feichtmair (alto saxophone) & Nina Polaschegg (bass)'
            }
          },
          {
            name: 'DJs Lisi Toobusy & Falling',
            info: {
              bio: 'Mats Gustafsson & Christof Kurzmann: turntables'
            }
          }
        ]
      }
    ]
  },
  'rotterdam-haarlem-amsterdam': {
    location: 'Rotterdam + Haarlem + Amsterdam, Netherlands',
    date: 'October 8-10',
    events: [
      {
        location: 'Rotterdam',
        date: 'Friday October 8, 2021 [20:30 CEST]',
        link: 'https://worm.org/production/catalytic-sound-festival/',
        livestreamLink: 'https://worm.stager.nl/web/tickets/111065011',
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
        date: 'Saturday October 9, 2021 [20:00 CEST]',
        link: 'https://www.pletterij.nl/event/09-okt-21-catalytic-sound-festival-2021/',
        livestreamLink: 'https://www.pletterij.nl/event/09-okt-21-catalytic-sound-festival-2021/',
        venue: {
          name: 'Pletterij',
          link: 'https://www.pletterij.nl/'},
        performances: [
          {
            name: 'Ab Baars, Ig Henneman, George Dumitriu & Pau Sola Masafrets',
            info: {
              bio: 'Ab Baars (tenorsax/clarinet/shakuhachi), Ig Henneman (viola), George Dumitriu (violin/viola), Pau Sola Masafrets (cello)'
            }
          },
          {
            name: 'Terrie Ex, Andy Moor, Jaap Blonk & Genevieve Murphy',
            info: {
              bio: 'Terrie Ex (guitar), Andy Moor (guitar), Jaap Blonk (voice/electronics), Genevieve Murphy (electronics/bagpipe)'
            }
          },
          {
            name: 'Ig Henneman, Isabelle Duthoit, Hanne De Backer & Martha Warelis' ,
            info: {
              bio: 'Ig Henneman (viola), Isabelle Duthoit (clarinet/voice), Hanne De Backer (baritonsax), Martha Warelis (piano)'
            }
          }
        ]
      },
      {
        location: 'Amsterdam',
        date: 'Sunday October 10, 2021 [20:30 CEST]',
        link: 'https://www.bimhuis.nl/en/calendar/catalytic-festival/',
        livestreamLink: 'https://www.bimhuis.nl/en/tv-2/',
        venue: {
          name: 'BIMHUIS',
          link: 'https://www.bimhuis.nl/en'},
        performances: [
          {
            name: 'Ab Baars, Isabelle Duthoit, Terrie Ex & Hanne De Backer',
            info: {
              bio: 'Ab Baars (tenorsax/clarinet/shakuhachi), Isabelle Duthoit (clarinet/voice), Terrie Ex (guitar), Hanne De Backer (baritonsax)'
            }
          },
          {
            name: 'Andy Moor & Genevieve Murphy',
            info: {
              bio: 'Andy Moor (guitar), Genevieve Murphy (electronics/bagpipe)'
            }
          },
          {
            name: 'Ig Henneman & Anne La Berge',
            info: {
              bio: 'Ig Henneman (viola), Anne La Berge (flutes/electronics)'
            }
          },
          {
            name: 'Jaap Blonk & Felicity Provan',
            info: {
              bio: 'Jaap Blonk (voice/electronics), Felicity Provan (trumpet/voice)'
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
        date: 'Thursday October 14, 2021 [8pm CT]',
        link: 'https://elasticarts.org/events/catalytic-sound-festival',
        livestreamLink: 'https://catalytic-sound.bandcamp.com/merch/catalytic-sound-festival-2021-chicago-day-1',
        performances: [
          {
            name: 'claire rousay, Macie Stewart & Ken Vandermark',
            info: {
              bio: 'claire rousay (percussion), Macie Stewart (violin/voice), Ken Vandermark (reeds)'
            }
           },
          {
            name: 'Bonnie Jones',
            info: {
              bio: 'Bonnie Jones (electronics)'
            }
          },
          {
            name: 'Kuzu',
            info: {
              bio: 'Dave Rempis (saxophones), Tashi Dorji (guitar), Tyler Damon (drums)'
            }
          }
        ]
      },
      {
        date: 'Saturday October 16, 2021 [8pm CT]',
        link: 'https://elasticarts.org/events/catalytic-sound-festival-z52cj-mhsay',
        livestreamLink: 'https://catalytic-sound.bandcamp.com/merch/catalytic-sound-festival-2021-chicago-day-2',
        performances: [
          {
            name: 'Joe McPhee & Olivia Block',
            info: {
              bio: 'Joe McPhee (reeds), Olivia Block(electric organ)'
            }
          },
          {
            name: 'Tashi Dorji',
            info: {
              bio: 'Tashi Dorji (guitar)'
            }
          },
          {
            name: 'Joe McPhee, Katjinka Klein, Bonnie Jones & Chris Corsano',
            info: {
              bio: 'Joe McPhee (reeds), Katjinka Klein (cello), Bonnie Jones (electronics), Chris Corsano (percussion)'
            }
          },
          {
            name: 'SPECIAL STREAMED ONLINE PERFORMANCE by Akira Sakata and Nana Omori',
            info: {
              bio: 'Akira Sakata (saxophone, clarinet, voice), Nana Omori (piano)'
            }
          }
        ]
      },
      {
        date: 'Sunday October 17, 2021 [8pm CT]',
        link: 'https://elasticarts.org/events/catalytic-sound-festival-z52cj',
        livestreamLink: 'https://catalytic-sound.bandcamp.com/merch/catalytic-sound-festival-2021-chicago-day-3',
        performances: [
          {
            name: 'Mark Feldman & Tim Daisy',
            info: {
              bio: 'Mark Feldman (violin), Tim Daisy (drums)'
            }
          },
          {
            name: 'Damon Locks',
            info: {
              bio: 'Damon Locks (dj/samples/misc)'
            }
          },
          {
            name: 'Marker',
            info: {
              bio: 'Ken Vandermark (reeds), Macie Stewart (violin/keyboards/vocals), Steve Marquette (guitar), Andrew Clinkman (guitar), Phil Sudderberg (drums)'
            }
          }
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
    events: [
      {
        date: 'Saturday October 23, 2021',
        livestreamLink: 'https://catalytic-sound.bandcamp.com/merch/catalytic-sound-festival-2021-nyc-day-1',
        performances: [
          {
            name: 'Bonnie Jones',
            info: {
              bio: 'Bonnie Jones (electronics)'
            }
          },
          {
            name: 'Cecilia Lopez',
            info: {
              bio: 'Cecilia Lopez (electronics)'
            }
          },
          {
            name: 'Ikue Mori & Zeena Parkins',
            info: {
              bio: 'Ikue Mori (computer), Zeena Parkins (harp)'
            }
          },
          {
            name: 'Joe McPhee',
            info: {
              bio: 'Joe McPhee (reeds)'
            }
          }
        ]
      },
      {
        date: 'Sunday : October 24, 2021',
        livestreamLink: 'https://catalytic-sound.bandcamp.com/merch/catalytic-sound-festival-2021-nyc-day-2',
        performances: [
          {
            name: 'Fred Lonberg-Holm, Karen Borca & Michael Wimberly',
            info: {
              bio: 'Fred Lonberg-Holm (cello), Karen Borca (bassoon), Michael Wimberly (percussion)'
            }
          },
          {
            name: 'Nava Dunkelman & gabby fluke-mogul',
            info: {
              bio: 'Nava Dunkelman (percussion), gabby fluke-mogul (violin)'
            }
          },
          {
            name: 'Fred Moten, Gerald Cleaver, Brandon Lopez',
            info: {
              bio: 'Fred Moten (voice), Gerald Cleaver (percussion), Brandon Lopez (bass)'
            }
          },
          {
            name: 'Chris Corsano & Patrick Holms',
            info: {
              bio: 'Chris Corsano (percussion), Patrick Holms (clarinet)'
            }
          },
          {
            name: 'SPECIAL STREAMED ONLINE PERFORMANCE by Akira Sakata and Nana Omori',
            info: {
              bio: 'Akira Sakata (saxophone, clarinet, voice), Nana Omori (piano)'
            }
          }
        ]
      }
    ]
  },
  'trondheim': {
    location: 'Trondheim, Norway',
    date: 'October 30, 31',
    venue: {
      name: 'Stillverk1',
      link: 'https://www.stillverk1.no'
     },
    events: [
      {
        date: 'Saturday October 30, 2021',
        link: 'https://www.stillverk1.no/30-31-10-2021-catalytic-festival/',
        performances: [
          {
            name: 'Signe Emmeluth',
            info: {
              bio: ''
            }
          },
          {
            name: 'Klaus Holm, Amalie Dahl & Alexander Riris',
            info: {
              bio: ''
            }
          },
          {
            name: 'Jenny Frøysa, Emil Storløkken Åse & August Glännestrand',
            info: {
              bio: 'working band with local improvisers freshly out from the jazz academy'
            }
          },
          {
            name: 'Signe Emmeluth, Andreas Røysum, Ingebrigt Håker Flaten & Paal Nilssen-Love',
            info: {
              bio: ''
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
        date: 'Sunday October 31, 2021',
        link: 'https://www.stillverk1.no/30-31-10-2021-catalytic-festival/',
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
              bio: 'Mette Rasmussen/Ingebrigt Håker Flaten/Veslemøy Narvesen'
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
        date: 'Saturday October 30, 2021',
        performances: [
          {
            name: 'To be announced...'
          }
        ]
      },
      {
        date: 'Sunday October 31, 2021',
        performances: [
          {
            name: 'To be announced...'
          },
        ]
      }
    ]
  },
}

export default programs
