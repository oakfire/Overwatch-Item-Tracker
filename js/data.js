OWI.factory('Data', function() {
  var items = `{"skinsLegendary":{},"skinsEpic":{},"emotes":{},"intros":{},"sprays":{},"voicelines":{},"poses":{},"icons":{}}`
  return {
    checked: {
      SUMMER_GAMES_2016: JSON.parse(items),
      HALLOWEEN_2016: JSON.parse(items),
      WINTER_WONDERLAND_2016: JSON.parse(items),
      YEAR_OF_THE_ROOSTER_2017: JSON.parse(items)
    },
    prices: {
      'common': 75,
      'rare': 225,
      'epic': 750,
      'legendary': 3000
    },
    updates: {
      "SUMMER_GAMES_2016": {
        "name": "Summer Games 2016",
        "id": "SUMMER_GAMES_2016",
        "dates": {
          "start": "1470060000000",
          "end": "1471874400000"
        },
        "items": {
          "icons": [
            {
              "name": "Archery",
              "id": "hanzo-archery",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/hanzo-archery.png"
            },
            {
              "name": "Australia",
              "id": "australia",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/australia.png"
            },
            {
              "name": "BMX",
              "id": "reaper-bmx",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/reaper-bmx.png"
            },
            {
              "name": "Badminton",
              "id": "mercy-badminton",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/mercy-badminton.png"
            },
            {
              "name": "Basketball",
              "id": "pharah-basketball",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/pharah-basketball.png"
            },
            {
              "name": "Boxing",
              "id": "bastion-boxing",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/bastion-boxing.png"
            },
            {
              "name": "Brazil",
              "id": "brazil",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/brazil.png"
            },
            {
              "name": "China",
              "id": "china",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/china.png"
            },
            {
              "name": "Cycling",
              "id": "dva-cycling",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/dva-cycling.png"
            },
            {
              "name": "Diving",
              "id": "roadhog-diving",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/roadhog-diving.png"
            },
            {
              "name": "Egypt",
              "id": "egypt",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/egypt.png"
            },
            {
              "name": "Equestrian",
              "id": "mccree-equestrian",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/mccree-equestrian.png"
            },
            {
              "name": "Fencing",
              "id": "genji-fencing",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/genji-fencing.png"
            },
            {
              "name": "Football",
              "id": "lucio-football",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/lucio-football.png"
            },
            {
              "name": "France",
              "id": "france",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/france.png"
            },
            {
              "name": "Germany",
              "id": "germany",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/germany.png"
            },
            {
              "name": "Golf",
              "id": "soldier-76-golf",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/soldier-76-golf.png"
            },
            {
              "name": "Greece",
              "id": "greece",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/greece.png"
            },
            {
              "name": "Gymnastics",
              "id": "widowmaker-gymnastics",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/widowmaker-gymnastics.png"
            },
            {
              "name": "Japan",
              "id": "japan",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/japan.png"
            },
            {
              "name": "Mexico",
              "id": "mexico",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/mexico.png"
            },
            {
              "name": "Nepal",
              "id": "nepal",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/nepal.png"
            },
            {
              "name": "Numbani",
              "id": "numbani",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/numbani.png"
            },
            {
              "name": "Rhythmic Gymnastics",
              "id": "symmetra-rhythmic-gymnastics",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/symmetra-rhythmic-gymnastics.png"
            },
            {
              "name": "Russia",
              "id": "russia",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/russia.png"
            },
            {
              "name": "Shooting",
              "id": "ana-shooting",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/ana-shooting.png"
            },
            {
              "name": "South Korea",
              "id": "south-korea",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/south-korea.png"
            },
            {
              "name": "Summer Games",
              "id": "summer-games",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/summer-games.png"
            },
            {
              "name": "Sweden",
              "id": "sweden",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/sweden.png"
            },
            {
              "name": "Switzerland",
              "id": "switzerland",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/switzerland.png"
            },
            {
              "name": "Table Tennis",
              "id": "mei-table-tennis",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/mei-table-tennis.png"
            },
            {
              "name": "Taekwondo",
              "id": "zenyatta-taekwondo",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/zenyatta-taekwondo.png"
            },
            {
              "name": "Tennis",
              "id": "junkrat-tennis",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/junkrat-tennis.png"
            },
            {
              "name": "Track",
              "id": "tracer-track",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/tracer-track.png"
            },
            {
              "name": "United Kingdom",
              "id": "united-kingdom",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/united-kingdom.png"
            },
            {
              "name": "United States",
              "id": "united-states",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/united-states.png"
            },
            {
              "name": "Volleyball",
              "id": "winston-volleyball",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/winston-volleyball.png"
            },
            {
              "name": "Water Polo",
              "id": "torbjorn-water-polo",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/torbjorn-water-polo.png"
            },
            {
              "name": "Weightlifting",
              "id": "zarya-weightlifting",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/zarya-weightlifting.png"
            },
            {
              "name": "Wrestling",
              "id": "reinhardt-wrestling",
              "img": "./resources/updates/SUMMER_GAMES_2016/icons/reinhardt-wrestling.png"
            }
          ],
          "sprays": [
            {
              "hero": "Ana",
              "name": "Shooting",
              "id": "ana-shooting",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/ana-shooting.png"
            },
            {
              "hero": "Bastion", "heroCN": "堡垒",
              "name": "Boxing",
              "id": "bastion-boxing",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/bastion-boxing.png"
            },
            {
              "hero": "D.Va", "heroCN": "D.VA",
              "name": "Cycling",
              "id": "dva-cycling",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/dva-cycling.png"
            },
            {
              "hero": "Genji", "heroCN": " 源氏",
              "name": "Fencing",
              "id": "genji-fencing",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/genji-fencing.png"
            },
            {
              "hero": "Hanzo", "heroCN": "半藏",
              "name": "Archery",
              "id": "hanzo-archery",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/hanzo-archery.png"
            },
            {
              "hero": "Junkrat","heroCN": "狂鼠",
              "name": "Tennis",
              "id": "junkrat-tennis",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/junkrat-tennis.png"
            },
            {
              "hero": "Lúcio", "heroCN": "卢西奥",
              "name": "Football",
              "id": "lucio-football",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/lucio-football.png"
            },
            {
              "hero": "McCree", "heroCN": "麦克雷",
              "name": "Equestrian",
              "id": "mccree-equestrian",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/mccree-equestrian.png"
            },
            {
              "hero": "Mei", "heroCN": "美",
              "name": "Table Tennis",
              "id": "mei-table-tennis",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/mei-table-tennis.png"
            },
            {
              "hero": "Mercy", "heroCN": "天使",
              "name": "Badminton",
              "id": "mercy-badminton",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/mercy-badminton.png"
            },
            {
              "hero": "Pharah", "heroCN": "法老之鹰",
              "name": "Basketball",
              "id": "pharah-basketball",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/pharah-basketball.png"
            },
            {
              "hero": "Reaper", "heroCN": "死神",
              "name": "BMX",
              "id": "reaper-bmx",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/reaper-bmx.png"
            },
            {
              "hero": "Reinhardt", "heroCN": "莱因哈特",
              "name": "Wrestling",
              "id": "reinhardt-wrestling",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/reinhardt-wrestling.png"
            },
            {
              "hero": "Roadhog", "heroCN": "路霸",
              "name": "Diving",
              "id": "roadhog-diving",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/roadhog-diving.png"
            },
            {
              "hero": "Soldier: 76", "heroCN": "士兵76",
              "name": "Golf",
              "id": "soldier-76-golf",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/soldier-76-golf.png"
            },
            {
              "hero": "Symmetra", "heroCN": "秩序之光",
              "name": "Rhythmic",
              "id": "symmetra-rhythmic",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/symmetra-rhythmic.png"
            },
            {
              "hero": "Torbjörn", "heroCN": "托比昂",
              "name": "Water Polo",
              "id": "torbjorn-water-polo",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/torbjorn-water-polo.png"
            },
            {
              "hero": "Tracer", "heroCN": "猎空",
              "name": "Track",
              "id": "tracer-track",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/tracer-track.png"
            },
            {
              "hero": "Widowmaker", "heroCN": "黑百合",
              "name": "Gymnastics",
              "id": "widowmaker-gymnastics",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/widowmaker-gymnastics.png"
            },
            {
              "hero": "Winston", "heroCN": "温斯顿",
              "name": "Volleyball",
              "id": "winston-volleyball",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/winston-volleyball.png"
            },
            {
              "hero": "Zarya", "heroCN": "查莉娅",
              "name": "Weightlifting",
              "id": "zarya-weightlifting",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/zarya-weightlifting.png"
            },
            {
              "hero": "Zenyatta", "heroCN": "禅雅塔",
              "name": "Taekwondo",
              "id": "zenyatta-taekwondo",
              "quality": "common",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/zenyatta-taekwondo.png"
            },
            {
              "name": "Summer Games",
              "id": "summer-games",
              "img": "./resources/updates/SUMMER_GAMES_2016/sprays/summer-games.png"
            }
          ],
          "voicelines": [
            {
              "hero": "Ana",
              "name": "Learn from the Pain",
              "id": "ana-learn-from-the-pain",
              "quality": "common"
            },
            {
              "hero": "Bastion", "heroCN": "堡垒",
              "name": "WHOO-VWEEEEEE",
              "id": "bastion-whoovweeeeee",
              "quality": "common"
            },
            {
              "hero": "D.Va", "heroCN": "D.VA",
              "name": "I'm #1",
              "id": "dva-im-1",
              "quality": "common"
            },
            {
              "hero": "Genji", "heroCN": " 源氏",
              "name": "I was hoping for a challenge",
              "id": "genji-i-was-hoping-for-a-challenge",
              "quality": "common"
            },
            {
              "hero": "Hanzo", "heroCN": "半藏",
              "name": "Ignore all distractions",
              "id": "hanzo-ignore-all-distractions",
              "quality": "common"
            },
            {
              "hero": "Junkrat","heroCN": "狂鼠",
              "name": "I give it a 10!",
              "id": "junkrat-i-give-it-a-10",
              "quality": "common"
            },
            {
              "hero": "Lúcio", "heroCN": "卢西奥",
              "name": "Be champions",
              "id": "lucio-be-champions",
              "quality": "common"
            },
            {
              "hero": "McCree", "heroCN": "麦克雷",
              "name": "I don't much like losing",
              "id": "mccree-i-dont-much-like-losing",
              "quality": "common"
            },
            {
              "hero": "Mei", "heroCN": "美",
              "name": "Overcome all obstacles",
              "id": "mei-overcome-all-obstacles",
              "quality": "common"
            },
            {
              "hero": "Mercy", "heroCN": "天使",
              "name": "Piece of cake",
              "id": "mercy-piece-of-cake",
              "quality": "common"
            },
            {
              "hero": "Pharah", "heroCN": "法老之鹰",
              "name": "We are in this together",
              "id": "pharah-we-are-in-this-together",
              "quality": "common"
            },
            {
              "hero": "Reaper", "heroCN": "死神",
              "name": "It's in the refrigerator",
              "id": "reaper-its-in-the-refrigerator",
              "quality": "common"
            },
            {
              "hero": "Reinhardt", "heroCN": "莱因哈特",
              "name": "100%% German power",
              "id": "reinhardt-100-german-power",
              "quality": "common"
            },
            {
              "hero": "Roadhog", "heroCN": "路霸",
              "name": "What's mine is mine",
              "id": "roadhog-whats-mine-is-mine",
              "quality": "common"
            },
            {
              "hero": "Soldier: 76", "heroCN": "士兵76",
              "name": "You want a medal?",
              "id": "soldier-76-you-want-a-medal",
              "quality": "common"
            },
            {
              "hero": "Symmetra", "heroCN": "秩序之光",
              "name": "Hard work and dedication",
              "id": "symmetra-hard-work-and-dedication",
              "quality": "common"
            },
            {
              "hero": "Torbjörn", "heroCN": "托比昂",
              "name": "More where that came from",
              "id": "torbjorn-more-where-that-came-from",
              "quality": "common"
            },
            {
              "hero": "Tracer", "heroCN": "猎空",
              "name": "Eat my dust",
              "id": "tracer-eat-my-dust",
              "quality": "common"
            },
            {
              "hero": "Widowmaker", "heroCN": "黑百合",
              "name": "I don't miss",
              "id": "widowmaker-i-dont-miss",
              "quality": "common"
            },
            {
              "hero": "Winston", "heroCN": "温斯顿",
              "name": "Playtime's over",
              "id": "winston-playtimes-over",
              "quality": "common"
            },
            {
              "hero": "Zarya", "heroCN": "查莉娅",
              "name": "No pain, no gain",
              "id": "zarya-no-pain-no-gain",
              "quality": "common"
            },
            {
              "hero": "Zenyatta", "heroCN": "禅雅塔",
              "name": "Strive for improvement",
              "id": "zenyatta-strive-for-improvement",
              "quality": "common"
            }
          ],
          "emotes": [
            {
              "hero": "Bastion", "heroCN": "堡垒",
              "name": "Boxing",
              "id": "bastion-boxing",
              "quality": "epic",
              "video": "./resources/updates/SUMMER_GAMES_2016/emotes/bastion-boxing.webm"
            },
            {
              "hero": "Lúcio", "heroCN": "卢西奥",
              "name": "Juggle",
              "id": "lucio-juggle",
              "quality": "epic",
              "video": "./resources/updates/SUMMER_GAMES_2016/emotes/lucio-juggle.webm"
            },
            {
              "hero": "Symmetra", "heroCN": "秩序之光",
              "name": "Ribbon",
              "id": "symmetra-ribbon",
              "quality": "epic",
              "video": "./resources/updates/SUMMER_GAMES_2016/emotes/symmetra-ribbon.webm"
            }
          ],
          "skinsEpic": [
            {
              "hero": "McCree", "heroCN": "麦克雷",
              "name": "American",
              "id": "mccree-american",
              "quality": "epic",
              "img": "./resources/updates/SUMMER_GAMES_2016/skinsEpic/mccree-american.jpg"
            },
            {
              "hero": "Mercy", "heroCN": "天使",
              "name": "Eidgenossin",
              "id": "mercy-eidgenossin",
              "quality": "epic",
              "img": "./resources/updates/SUMMER_GAMES_2016/skinsEpic/mercy-eidgenossin.jpg"
            },
            {
              "hero": "Genji", "heroCN": " 源氏",
              "name": "Nihon",
              "id": "genji-nihon",
              "quality": "epic",
              "img": "./resources/updates/SUMMER_GAMES_2016/skinsEpic/genji-nihon.jpg"
            },
            {
              "hero": "D.Va", "heroCN": "D.VA",
              "name": "Taegeukgi",
              "id": "dva-taegeukgi",
              "quality": "epic",
              "img": "./resources/updates/SUMMER_GAMES_2016/skinsEpic/dva-taegeukgi.jpg"
            },
            {
              "hero": "Torbjörn", "heroCN": "托比昂",
              "name": "Tre Kronor",
              "id": "torbjorn-tre-kronor",
              "quality": "epic",
              "img": "./resources/updates/SUMMER_GAMES_2016/skinsEpic/torbjorn-tre-kronor.jpg"
            },
            {
              "hero": "Widowmaker", "heroCN": "黑百合",
              "name": "Tricolore",
              "id": "widowmaker-tricolore",
              "quality": "epic",
              "img": "./resources/updates/SUMMER_GAMES_2016/skinsEpic/widowmaker-tricolore.jpg"
            }
          ],
          "intros": [
            {
              "hero": "Lúcio", "heroCN": "卢西奥",
              "name": "Bicycle Kick",
              "id": "lucio-bicycle-kick",
              "quality": "epic",
              "video": "./resources/updates/SUMMER_GAMES_2016/intros/lucio-bicycle-kick.webm"
            },
            {
              "hero": "Tracer", "heroCN": "猎空",
              "name": "Hurdle",
              "id": "tracer-hurdle",
              "quality": "epic",
              "video": "./resources/updates/SUMMER_GAMES_2016/intros/tracer-hurdle.webm"
            },
            {
              "hero": "Junkrat","heroCN": "狂鼠",
              "name": "Shot Put",
              "id": "junkrat-shot-put",
              "quality": "epic",
              "video": "./resources/updates/SUMMER_GAMES_2016/intros/junkrat-shot-put.webm"
            }
          ],
          "skinsLegendary": [
            {
              "hero": "Lúcio", "heroCN": "卢西奥",
              "name": "Seleção",
              "id": "lucio-selecao",
              "quality": "legendary",
              "img": "./resources/updates/SUMMER_GAMES_2016/skinsLegendary/lucio-selecao.jpg"
            },
            {
              "hero": "Lúcio", "heroCN": "卢西奥",
              "name": "Striker",
              "id": "lucio-striker",
              "quality": "legendary",
              "img": "./resources/updates/SUMMER_GAMES_2016/skinsLegendary/lucio-striker.jpg"
            },
            {
              "hero": "Tracer", "heroCN": "猎空",
              "name": "Sprinter",
              "id": "tracer-sprinter",
              "quality": "legendary",
              "img": "./resources/updates/SUMMER_GAMES_2016/skinsLegendary/tracer-sprinter.jpg"
            },
            {
              "hero": "Tracer", "heroCN": "猎空",
              "name": "Track and Field",
              "id": "tracer-track-and-field",
              "quality": "legendary",
              "img": "./resources/updates/SUMMER_GAMES_2016/skinsLegendary/tracer-track-and-field.jpg"
            },
            {
              "hero": "Zarya", "heroCN": "查莉娅",
              "name": "Champion",
              "id": "zarya-champion",
              "quality": "legendary",
              "img": "./resources/updates/SUMMER_GAMES_2016/skinsLegendary/zarya-champion.jpg"
            },
            {
              "hero": "Zarya", "heroCN": "查莉娅",
              "name": "Weightlifter",
              "id": "zarya-weightlifter",
              "quality": "legendary",
              "img": "./resources/updates/SUMMER_GAMES_2016/skinsLegendary/zarya-weightlifter.jpg"
            }
          ],
          "poses": [
            {
              "hero": "Soldier: 76", "heroCN": "士兵76",
              "name": "Golf Swing",
              "id": "soldier-76-golf-swing",
              "quality": "rare",
              "img": "./resources/updates/SUMMER_GAMES_2016/poses/soldier-76-golf-swing.jpg"
            },
            {
              "hero": "Mei", "heroCN": "美",
              "name": "Medal",
              "id": "mei-medal",
              "quality": "rare",
              "img": "./resources/updates/SUMMER_GAMES_2016/poses/mei-medal.jpg"
            },
            {
              "hero": "Pharah", "heroCN": "法老之鹰",
              "name": "Medal",
              "id": "pharah-medal",
              "quality": "rare",
              "img": "./resources/updates/SUMMER_GAMES_2016/poses/pharah-medal.jpg"
            },
            {
              "hero": "Reaper", "heroCN": "死神",
              "name": "Medal",
              "id": "reaper-medal",
              "quality": "rare",
              "img": "./resources/updates/SUMMER_GAMES_2016/poses/reaper-medal.jpg"
            },
            {
              "hero": "Roadhog", "heroCN": "路霸",
              "name": "Medal",
              "id": "roadhog-medal",
              "quality": "rare",
              "img": "./resources/updates/SUMMER_GAMES_2016/poses/roadhog-medal.jpg"
            },
            {
              "hero": "Torbjörn", "heroCN": "托比昂",
              "name": "Medal",
              "id": "torbjorn-medal",
              "quality": "rare",
              "img": "./resources/updates/SUMMER_GAMES_2016/poses/torbjorn-medal.jpg"
            },
            {
              "hero": "Widowmaker", "heroCN": "黑百合",
              "name": "Medal",
              "id": "widowmaker-medal",
              "quality": "rare",
              "img": "./resources/updates/SUMMER_GAMES_2016/poses/widowmaker-medal.jpg"
            },
            {
              "hero": "Winston", "heroCN": "温斯顿",
              "name": "Medal",
              "id": "winston-medal",
              "quality": "rare",
              "img": "./resources/updates/SUMMER_GAMES_2016/poses/winston-medal.jpg"
            },
            {
              "hero": "Zenyatta", "heroCN": "禅雅塔",
              "name": "Medals",
              "id": "zenyatta-medals",
              "quality": "rare",
              "img": "./resources/updates/SUMMER_GAMES_2016/poses/zenyatta-medals.jpg"
            }
          ]
        }
      },
      "HALLOWEEN_2016": {
        "name": "Halloween 2016",
        "id": "HALLOWEEN_2016",
        "dates": {
          "start": "1476108000000",
          "end": "1477922400000"
        },
        "items": {
          "skinsEpic": [
            {
              "hero": "Reinhardt", "heroCN": "莱因哈特",
              "name": "Coldhardt",
              "id": "reinhardt-coldhardt",
              "quality": "epic",
              "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/reinhardt-coldhardt.jpg"
            },
            {
              "hero": "Hanzo", "heroCN": "半藏",
              "name": "Demon",
              "id": "hanzo-demon",
              "quality": "epic",
              "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/hanzo-demon.jpg"
            },
            {
              "hero": "Ana",
              "name": "Ghoul",
              "id": "ana-ghoul",
              "quality": "epic",
              "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/ana-ghoul.jpg"
            },
            {
              "hero": "Soldier: 76", "heroCN": "士兵76",
              "name": "Immortal",
              "id": "soldier-76-immortal",
              "quality": "epic",
              "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/soldier-76-immortal.jpg"
            },
            {
              "hero": "Pharah", "heroCN": "法老之鹰",
              "name": "Possessed",
              "id": "pharah-possessed",
              "quality": "epic",
              "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/pharah-possessed.jpg"
            },
            {
              "hero": "Zenyatta", "heroCN": "禅雅塔",
              "name": "Skullyatta",
              "id": "zenyatta-skullyatta",
              "quality": "epic",
              "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/zenyatta-skullyatta.jpg"
            },
            {
              "hero": "Bastion", "heroCN": "堡垒",
              "name": "Tombstone",
              "id": "bastion-tombstone",
              "quality": "epic",
              "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/bastion-tombstone.jpg"
            },
            {
              "hero": "Symmetra", "heroCN": "秩序之光",
              "name": "Vampire",
              "id": "symmetra-vampire",
              "quality": "epic",
              "img": "./resources/updates/HALLOWEEN_2016/skinsEpic/symmetra-vampire.jpg"
            }
          ],
          "emotes": [
            {
              "hero": "Ana",
              "name": "Candy",
              "id": "ana-candy",
              "quality": "epic",
              "video": "./resources/updates/HALLOWEEN_2016/emotes/ana-candy.webm"
            },
            {
              "hero": "Reinhardt", "heroCN": "莱因哈特",
              "name": "Pumpkin Smash",
              "id": "reinhardt-pumpkin-smash",
              "quality": "epic",
              "video": "./resources/updates/HALLOWEEN_2016/emotes/reinhardt-pumpkin-smash.webm"
            },
            {
              "hero": "Winston", "heroCN": "温斯顿",
              "name": "Shadow Puppets",
              "id": "winston-shadow-puppets",
              "quality": "epic",
              "video": "./resources/updates/HALLOWEEN_2016/emotes/winston-shadow-puppets.webm"
            }
          ],
          "sprays": [
            {
              "hero": "Ana",
              "name": "Trick or Treat",
              "id": "ana-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/ana-trick-or-treat.png"
            },
            {
              "hero": "Bastion", "heroCN": "堡垒",
              "name": "Trick or Treat",
              "id": "bastion-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/bastion-trick-or-treat.png"
            },
            {
              "hero": "D.Va", "heroCN": "D.VA",
              "name": "Trick or Treat",
              "id": "dva-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/dva-trick-or-treat.png"
            },
            {
              "hero": "Genji", "heroCN": " 源氏",
              "name": "Trick or Treat",
              "id": "genji-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/genji-trick-or-treat.png"
            },
            {
              "hero": "Hanzo", "heroCN": "半藏",
              "name": "Trick or Treat",
              "id": "hanzo-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/hanzo-trick-or-treat.png"
            },
            {
              "hero": "Junkrat","heroCN": "狂鼠",
              "name": "Trick or Treat",
              "id": "junkrat-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/junkrat-trick-or-treat.png"
            },
            {
              "hero": "Lúcio", "heroCN": "卢西奥",
              "name": "Trick or Treat",
              "id": "lucio-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/lucio-trick-or-treat.png"
            },
            {
              "hero": "McCree", "heroCN": "麦克雷",
              "name": "Trick or Treat",
              "id": "mccree-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/mccree-trick-or-treat.png"
            },
            {
              "hero": "Mei", "heroCN": "美",
              "name": "Trick or Treat",
              "id": "mei-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/mei-trick-or-treat.png"
            },
            {
              "hero": "Mercy", "heroCN": "天使",
              "name": "Trick or Treat",
              "id": "mercy-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/mercy-trick-or-treat.png"
            },
            {
              "hero": "Pharah", "heroCN": "法老之鹰",
              "name": "Trick or Treat",
              "id": "pharah-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/pharah-trick-or-treat.png"
            },
            {
              "hero": "Reaper", "heroCN": "死神",
              "name": "Trick or Treat",
              "id": "reaper-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/reaper-trick-or-treat.png"
            },
            {
              "hero": "Reinhardt", "heroCN": "莱因哈特",
              "name": "Trick or Treat",
              "id": "reinhardt-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/reinhardt-trick-or-treat.png"
            },
            {
              "hero": "Roadhog", "heroCN": "路霸",
              "name": "Trick or Treat",
              "id": "roadhog-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/roadhog-trick-or-treat.png"
            },
            {
              "hero": "Soldier: 76", "heroCN": "士兵76",
              "name": "Trick or Treat",
              "id": "soldier-76-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/soldier-76-trick-or-treat.png"
            },
            {
              "hero": "Symmetra", "heroCN": "秩序之光",
              "name": "Trick or Treat",
              "id": "symmetra-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/symmetra-trick-or-treat.png"
            },
            {
              "hero": "Torbjörn", "heroCN": "托比昂",
              "name": "Trick or Treat",
              "id": "torbjorn-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/torbjorn-trick-or-treat.png"
            },
            {
              "name": "Boo!",
              "id": "boo",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/boo.png"
            },
            {
              "hero": "Tracer", "heroCN": "猎空",
              "name": "Trick or Treat",
              "id": "tracer-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/tracer-trick-or-treat.png"
            },
            {
              "hero": "Widowmaker", "heroCN": "黑百合",
              "name": "Trick or Treat",
              "id": "widowmaker-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/widowmaker-trick-or-treat.png"
            },
            {
              "name": "Boop!",
              "id": "boop",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/boop.png"
            },
            {
              "hero": "Winston", "heroCN": "温斯顿",
              "name": "Trick or Treat",
              "id": "winston-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/winston-trick-or-treat.png"
            },
            {
              "hero": "Zarya", "heroCN": "查莉娅",
              "name": "Trick or Treat",
              "id": "zarya-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/zarya-trick-or-treat.png"
            },
            {
              "hero": "Zenyatta", "heroCN": "禅雅塔",
              "name": "Trick or Treat",
              "id": "zenyatta-trick-or-treat",
              "quality": "common",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/zenyatta-trick-or-treat.png"
            },
            {
              "name": "Witch's Brew",
              "id": "witchs-brew",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/witchs-brew.png"
            },
            {
              "name": "Pumpkins",
              "id": "pumpkins",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/pumpkins.png"
            },
            {
              "name": "Halloween Terror 2016",
              "id": "halloween-terror-2016",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/halloween-terror-2016.png"
            },
            {
              "name": "Gummy Hog",
              "id": "gummy-hog",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/gummy-hog.png"
            },
            {
              "name": "Fangs",
              "id": "fangs",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/fangs.png"
            },
            {
              "name": "Candyball",
              "id": "candyball",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/candyball.png"
            },
            {
              "name": "Bats",
              "id": "bats",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/bats.png"
            },
            {
              "name": "...Never Die",
              "id": "never-die",
              "img": "./resources/updates/HALLOWEEN_2016/sprays/never-die.png"
            }
          ],
          "voicelines": [
            {
              "hero": "Ana",
              "name": "Are you scared?",
              "id": "ana-are-you-scared",
              "quality": "common"
            },
            {
              "hero": "Bastion", "heroCN": "堡垒",
              "name": "W-W-Wooooo...?",
              "id": "bastion-wwwooooo",
              "quality": "common"
            },
            {
              "hero": "D.Va", "heroCN": "D.VA",
              "name": "Happy Halloween!",
              "id": "dva-happy-halloween",
              "quality": "common"
            },
            {
              "hero": "Genji", "heroCN": " 源氏",
              "name": "My Halloween costume?",
              "id": "genji-my-halloween-costume",
              "quality": "common"
            },
            {
              "hero": "Hanzo", "heroCN": "半藏",
              "name": "You are already dead",
              "id": "hanzo-you-are-already-dead",
              "quality": "common"
            },
            {
              "hero": "Junkrat","heroCN": "狂鼠",
              "name": "Happy Halloween",
              "id": "junkrat-happy-halloween",
              "quality": "common"
            },
            {
              "hero": "Lúcio", "heroCN": "卢西奥",
              "name": "Killed it!",
              "id": "lucio-killed-it",
              "quality": "common"
            },
            {
              "hero": "McCree", "heroCN": "麦克雷",
              "name": "It's your funeral",
              "id": "mccree-its-your-funeral",
              "quality": "common"
            },
            {
              "hero": "Mei", "heroCN": "美",
              "name": "Scary!",
              "id": "mei-scary",
              "quality": "common"
            },
            {
              "hero": "Mercy", "heroCN": "天使",
              "name": "Superstition",
              "id": "mercy-superstition",
              "quality": "common"
            },
            {
              "hero": "Pharah", "heroCN": "法老之鹰",
              "name": "Dead or alive",
              "id": "pharah-dead-or-alive",
              "quality": "common"
            },
            {
              "hero": "Reaper", "heroCN": "死神",
              "name": "I work the graveyard shift",
              "id": "reaper-i-work-the-graveyard-shift",
              "quality": "common"
            },
            {
              "hero": "Reinhardt", "heroCN": "莱因哈特",
              "name": "Smashing",
              "id": "reinhardt-smashing",
              "quality": "common"
            },
            {
              "hero": "Roadhog", "heroCN": "路霸",
              "name": "Want some candy?",
              "id": "roadhog-want-some-candy",
              "quality": "common"
            },
            {
              "hero": "Soldier: 76", "heroCN": "士兵76",
              "name": "Knock knock",
              "id": "soldier-76-knock-knock",
              "quality": "common"
            },
            {
              "hero": "Symmetra", "heroCN": "秩序之光",
              "name": "A frightening thought",
              "id": "symmetra-a-frightening-thought",
              "quality": "common"
            },
            {
              "hero": "Torbjörn", "heroCN": "托比昂",
              "name": "If you build it",
              "id": "torbjorn-if-you-build-it",
              "quality": "common"
            },
            {
              "hero": "Tracer", "heroCN": "猎空",
              "name": "Ooh, Scary!",
              "id": "tracer-ooh-scary",
              "quality": "common"
            },
            {
              "hero": "Widowmaker", "heroCN": "黑百合",
              "name": "The party is over",
              "id": "widowmaker-the-party-is-over",
              "quality": "common"
            },
            {
              "hero": "Winston", "heroCN": "温斯顿",
              "name": "This is not a costume",
              "id": "winston-this-is-not-a-costume",
              "quality": "common"
            },
            {
              "hero": "Zarya", "heroCN": "查莉娅",
              "name": "Never forget the fallen",
              "id": "zarya-never-forget-the-fallen",
              "quality": "common"
            },
            {
              "hero": "Zenyatta", "heroCN": "禅雅塔",
              "name": "Trick or treat?",
              "id": "zenyatta-trick-or-treat",
              "quality": "common"
            }
          ],
          "poses": [
            {
              "hero": "Reaper", "heroCN": "死神",
              "name": "R.I.P.",
              "id": "reaper-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/reaper-rip.jpg"
            },
            {
              "hero": "Ana",
              "name": "R.I.P.",
              "id": "ana-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/ana-rip.jpg"
            },
            {
              "hero": "D.Va", "heroCN": "D.VA",
              "name": "R.I.P.",
              "id": "dva-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/dva-rip.jpg"
            },
            {
              "hero": "Genji", "heroCN": " 源氏",
              "name": "R.I.P.",
              "id": "genji-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/genji-rip.jpg"
            },
            {
              "hero": "Hanzo", "heroCN": "半藏",
              "name": "R.I.P.",
              "id": "hanzo-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/hanzo-rip.jpg"
            },
            {
              "hero": "Junkrat","heroCN": "狂鼠",
              "name": "R.I.P.",
              "id": "junkrat-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/junkrat-rip.jpg"
            },
            {
              "hero": "Lúcio", "heroCN": "卢西奥",
              "name": "R.I.P.",
              "id": "lucio-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/lucio-rip.jpg"
            },
            {
              "hero": "McCree", "heroCN": "麦克雷",
              "name": "R.I.P.",
              "id": "mccree-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/mccree-rip.jpg"
            },
            {
              "hero": "Mei", "heroCN": "美",
              "name": "R.I.P.",
              "id": "mei-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/mei-rip.jpg"
            },
            {
              "hero": "Mercy", "heroCN": "天使",
              "name": "R.I.P.",
              "id": "mercy-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/mercy-rip.jpg"
            },
            {
              "hero": "Pharah", "heroCN": "法老之鹰",
              "name": "R.I.P.",
              "id": "pharah-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/pharah-rip.jpg"
            },
            {
              "hero": "Bastion", "heroCN": "堡垒",
              "name": "R.I.P.",
              "id": "bastion-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/bastion-rip.jpg"
            },
            {
              "hero": "Reinhardt", "heroCN": "莱因哈特",
              "name": "R.I.P.",
              "id": "reinhardt-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/reinhardt-rip.jpg"
            },
            {
              "hero": "Roadhog", "heroCN": "路霸",
              "name": "R.I.P.",
              "id": "roadhog-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/roadhog-rip.jpg"
            },
            {
              "hero": "Soldier: 76", "heroCN": "士兵76",
              "name": "R.I.P.",
              "id": "soldier-76-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/soldier-76-rip.jpg"
            },
            {
              "hero": "Symmetra", "heroCN": "秩序之光",
              "name": "R.I.P.",
              "id": "symmetra-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/symmetra-rip.jpg"
            },
            {
              "hero": "Torbjörn", "heroCN": "托比昂",
              "name": "R.I.P.",
              "id": "torbjorn-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/torbjorn-rip.jpg"
            },
            {
              "hero": "Tracer", "heroCN": "猎空",
              "name": "R.I.P.",
              "id": "tracer-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/tracer-rip.jpg"
            },
            {
              "hero": "Widowmaker", "heroCN": "黑百合",
              "name": "R.I.P.",
              "id": "widowmaker-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/widowmaker-rip.jpg"
            },
            {
              "hero": "Winston", "heroCN": "温斯顿",
              "name": "R.I.P.",
              "id": "winston-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/winston-rip.jpg"
            },
            {
              "hero": "Zarya", "heroCN": "查莉娅",
              "name": "R.I.P.",
              "id": "zarya-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/zarya-rip.jpg"
            },
            {
              "hero": "Zenyatta", "heroCN": "禅雅塔",
              "name": "R.I.P.",
              "id": "zenyatta-rip",
              "quality": "rare",
              "img": "./resources/updates/HALLOWEEN_2016/poses/zenyatta-rip.jpg"
            }
          ],
          "intros": [
            {
              "hero": "Reaper", "heroCN": "死神",
              "name": "Eternal Rest",
              "id": "reaper-eternal-rest",
              "quality": "epic",
              "video": "./resources/updates/HALLOWEEN_2016/intros/reaper-eternal-rest.webm"
            },
            {
              "hero": "Mei", "heroCN": "美",
              "name": "Ice Scream",
              "id": "mei-ice-scream",
              "quality": "epic",
              "video": "./resources/updates/HALLOWEEN_2016/intros/mei-ice-scream.webm"
            },
            {
              "hero": "Genji", "heroCN": " 源氏",
              "name": "Pumpkin Carving",
              "id": "genji-pumpkin-carving",
              "quality": "epic",
              "video": "./resources/updates/HALLOWEEN_2016/intros/genji-pumpkin-carving.webm"
            }
          ],
          "skinsLegendary": [
            {
              "hero": "Junkrat","heroCN": "狂鼠",
              "name": "Dr. Junkenstein",
              "id": "junkrat-dr-junkenstein",
              "quality": "legendary",
              "img": "./resources/updates/HALLOWEEN_2016/skinsLegendary/junkrat-dr-junkenstein.jpg"
            },
            {
              "hero": "Mercy", "heroCN": "天使",
              "name": "Witch",
              "id": "mercy-witch",
              "quality": "legendary",
              "img": "./resources/updates/HALLOWEEN_2016/skinsLegendary/mercy-witch.jpg"
            },
            {
              "hero": "Reaper", "heroCN": "死神",
              "name": "Pumpkin",
              "id": "reaper-pumpkin",
              "quality": "legendary",
              "img": "./resources/updates/HALLOWEEN_2016/skinsLegendary/reaper-pumpkin.jpg"
            },
            {
              "hero": "Roadhog", "heroCN": "路霸",
              "name": "Junkenstein's Monster",
              "id": "roadhog-junkensteins-monster",
              "quality": "legendary",
              "img": "./resources/updates/HALLOWEEN_2016/skinsLegendary/roadhog-junkensteins-monster.jpg"
            }
          ],
          "icons": [
            {
              "name": "...Never Die",
              "id": "never-die",
              "img": "./resources/updates/HALLOWEEN_2016/icons/never-die.png"
            },
            {
              "name": "Bewitching",
              "id": "bewitching",
              "img": "./resources/updates/HALLOWEEN_2016/icons/bewitching.png"
            },
            {
              "name": "Calavera",
              "id": "calavera",
              "img": "./resources/updates/HALLOWEEN_2016/icons/calavera.png"
            },
            {
              "name": "Candle",
              "id": "candle",
              "img": "./resources/updates/HALLOWEEN_2016/icons/candle.png"
            },
            {
              "name": "Eyeball",
              "id": "eyeball",
              "img": "./resources/updates/HALLOWEEN_2016/icons/eyeball.png"
            },
            {
              "name": "Ghostymari",
              "id": "ghostymari",
              "img": "./resources/updates/HALLOWEEN_2016/icons/ghostymari.png"
            },
            {
              "name": "Halloween Terror",
              "id": "halloween-terror",
              "img": "./resources/updates/HALLOWEEN_2016/icons/halloween-terror.png"
            },
            {
              "name": "Spider",
              "id": "spider",
              "img": "./resources/updates/HALLOWEEN_2016/icons/spider.png"
            },
            {
              "name": "Superstition",
              "id": "superstition",
              "img": "./resources/updates/HALLOWEEN_2016/icons/superstition.png"
            },
            {
              "name": "The Doctor",
              "id": "junkrat-the-doctor",
              "img": "./resources/updates/HALLOWEEN_2016/icons/junkrat-the-doctor.png"
            },
            {
              "name": "The Monster",
              "id": "roadhog-the-monster",
              "img": "./resources/updates/HALLOWEEN_2016/icons/roadhog-the-monster.png"
            },
            {
              "name": "The Reaper",
              "id": "reaper-the-reaper",
              "img": "./resources/updates/HALLOWEEN_2016/icons/reaper-the-reaper.png"
            },
            {
              "name": "The Witch",
              "id": "mercy-the-witch",
              "img": "./resources/updates/HALLOWEEN_2016/icons/mercy-the-witch.png"
            },
            {
              "name": "Tombstone",
              "id": "tombstone",
              "img": "./resources/updates/HALLOWEEN_2016/icons/tombstone.png"
            },
            {
              "name": "Vampachimari",
              "id": "vampachimari",
              "img": "./resources/updates/HALLOWEEN_2016/icons/vampachimari.png"
            },
            {
              "name": "Witch's Brew",
              "id": "witchs-brew",
              "img": "./resources/updates/HALLOWEEN_2016/icons/witchs-brew.png"
            },
            {
              "name": "Witch's Hat",
              "id": "witchs-hat",
              "img": "./resources/updates/HALLOWEEN_2016/icons/witchs-hat.png"
            },
            {
              "name": "Wolf",
              "id": "wolf",
              "img": "./resources/updates/HALLOWEEN_2016/icons/wolf.png"
            }
          ]
        }
      },
      "WINTER_WONDERLAND_2016": {
        "name": "Winter Wonderland 2016",
        "id": "WINTER_WONDERLAND_2016",
        "dates": {
          "start": "1481551200000",
          "end": "1483365600000"
        },
        "items": {
          "sprays": [
            {
              "hero": "Ana",
              "name": "Warm",
              "id": "ana-warm",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/ana-warm.png",
              "ornamentID": "ana-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/ana-ornament.png"
            },
            {
              "hero": "Ana",
              "name": "Ornament",
              "id": "ana-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/ana-ornament.png",
              "ornamentID": "ana-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/ana-ornament.png"
            },
            {
              "hero": "Bastion", "heroCN": "堡垒",
              "name": "ORNAMENT",
              "id": "bastion-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/bastion-ornament.png",
              "ornamentID": "bastion-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/bastion-ornament.png"
            },
            {
              "hero": "Bastion", "heroCN": "堡垒",
              "name": "FESTIVE",
              "id": "bastion-festive",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/bastion-festive.png",
              "ornamentID": "bastion-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/bastion-ornament.png"
            },
            {
              "hero": "D.Va", "heroCN": "D.VA",
              "name": "ORNAMENT",
              "id": "dva-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/dva-ornament.png",
              "ornamentID": "dva-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/dva-ornament.png"
            },
            {
              "hero": "D.Va", "heroCN": "D.VA",
              "name": "COOKIE",
              "id": "dva-cookie",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/dva-cookie.png",
              "ornamentID": "dva-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/dva-ornament.png"
            },
            {
              "hero": "Genji", "heroCN": " 源氏",
              "name": "Kadomatsu",
              "id": "genji-kadomatsu",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/genji-kadomatsu.png",
              "ornamentID": "genji-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/genji-ornament.png"
            },
            {
              "hero": "Genji", "heroCN": " 源氏",
              "name": "Ornament",
              "id": "genji-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/genji-ornament.png",
              "ornamentID": "genji-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/genji-ornament.png"
            },
            {
              "hero": "Hanzo", "heroCN": "半藏",
              "name": "Kadomatsu",
              "id": "hanzo-kadomatsu",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/hanzo-kadomatsu.png",
              "ornamentID": "hanzo-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/hanzo-ornament.png"
            },
            {
              "hero": "Hanzo", "heroCN": "半藏",
              "name": "Ornament",
              "id": "hanzo-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/hanzo-ornament.png",
              "ornamentID": "hanzo-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/hanzo-ornament.png"
            },
            {
              "hero": "Junkrat","heroCN": "狂鼠",
              "name": "\"WINTER\"",
              "id": "junkrat-winter",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/junkrat-winter.png",
              "ornamentID": "junkrat-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/junkrat-ornament.png"
            },
            {
              "hero": "Junkrat","heroCN": "狂鼠",
              "name": "Ornament",
              "id": "junkrat-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/junkrat-ornament.png",
              "ornamentID": "junkrat-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/junkrat-ornament.png"
            },
            {
              "hero": "Lúcio", "heroCN": "卢西奥",
              "name": "Ornament",
              "id": "lucio-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/lucio-ornament.png",
              "ornamentID": "lucio-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/lucio-ornament.png"
            },
            {
              "hero": "Lúcio", "heroCN": "卢西奥",
              "name": "Hockey",
              "id": "lucio-hockey",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/lucio-hockey.png",
              "ornamentID": "lucio-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/lucio-ornament.png"
            },
            {
              "hero": "McCree", "heroCN": "麦克雷",
              "name": "Ornament",
              "id": "mccree-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mccree-ornament.png",
              "ornamentID": "mccree-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mccree-ornament.png"
            },
            {
              "hero": "McCree", "heroCN": "麦克雷",
              "name": "Ugly Sweater",
              "id": "mccree-ugly-sweater",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mccree-ugly-sweater.png",
              "ornamentID": "mccree-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mccree-ornament.png"
            },
            {
              "hero": "Mei", "heroCN": "美",
              "name": "Sculpting",
              "id": "mei-sculpting",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mei-sculpting.png",
              "ornamentID": "mei-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mei-ornament.png"
            },
            {
              "hero": "Mei", "heroCN": "美",
              "name": "Ornament",
              "id": "mei-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mei-ornament.png",
              "ornamentID": "mei-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mei-ornament.png"
            },
            {
              "hero": "Mercy", "heroCN": "天使",
              "name": "Snow Angel",
              "id": "mercy-snow-angel",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mercy-snow-angel.png",
              "ornamentID": "mercy-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mercy-ornament.png"
            },
            {
              "hero": "Mercy", "heroCN": "天使",
              "name": "Ornament",
              "id": "mercy-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mercy-ornament.png",
              "ornamentID": "mercy-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/mercy-ornament.png"
            },
            {
              "hero": "Pharah", "heroCN": "法老之鹰",
              "name": "Ice Fishing",
              "id": "pharah-ice-fishing",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/pharah-ice-fishing.png",
              "ornamentID": "pharah-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/pharah-ornament.png"
            },
            {
              "hero": "Pharah", "heroCN": "法老之鹰",
              "name": "Ornament",
              "id": "pharah-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/pharah-ornament.png",
              "ornamentID": "pharah-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/pharah-ornament.png"
            },
            {
              "hero": "Reaper", "heroCN": "死神",
              "name": "Stocking",
              "id": "reaper-stocking",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reaper-stocking.png",
              "ornamentID": "reaper-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reaper-ornament.png"
            },
            {
              "hero": "Reaper", "heroCN": "死神",
              "name": "Ornament",
              "id": "reaper-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reaper-ornament.png",
              "ornamentID": "reaper-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reaper-ornament.png"
            },
            {
              "hero": "Reinhardt", "heroCN": "莱因哈特",
              "name": "Ice Fishing",
              "id": "reinhardt-ice-fishing",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reinhardt-ice-fishing.png",
              "ornamentID": "reinhardt-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reinhardt-ornament.png"
            },
            {
              "hero": "Reinhardt", "heroCN": "莱因哈特",
              "name": "Ornament",
              "id": "reinhardt-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reinhardt-ornament.png",
              "ornamentID": "reinhardt-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/reinhardt-ornament.png"
            },
            {
              "hero": "Roadhog", "heroCN": "路霸",
              "name": "\"Winter\"",
              "id": "roadhog-winter",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/roadhog-winter.png",
              "ornamentID": "roadhog-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/roadhog-ornament.png"
            },
            {
              "hero": "Roadhog", "heroCN": "路霸",
              "name": "Ornament",
              "id": "roadhog-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/roadhog-ornament.png",
              "ornamentID": "roadhog-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/roadhog-ornament.png"
            },
            {
              "hero": "Soldier: 76", "heroCN": "士兵76",
              "name": "Ornament",
              "id": "soldier-76-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/soldier-76-ornament.png",
              "ornamentID": "soldier-76-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/soldier-76-ornament.png"
            },
            {
              "hero": "Soldier: 76", "heroCN": "士兵76",
              "name": "Army Man: 76",
              "id": "soldier-76-army-man-76",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/soldier-76-army-man-76.png",
              "ornamentID": "soldier-76-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/soldier-76-ornament.png"
            },
            {
              "hero": "Sombra", "heroCN": "黑影",
              "name": "Puppet",
              "id": "sombra-puppet",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/sombra-puppet.png",
              "ornamentID": "sombra-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/sombra-ornament.png"
            },
            {
              "hero": "Sombra", "heroCN": "黑影",
              "name": "Ornament",
              "id": "sombra-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/sombra-ornament.png",
              "ornamentID": "sombra-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/sombra-ornament.png"
            },
            {
              "hero": "Symmetra", "heroCN": "秩序之光",
              "name": "Snowflake",
              "id": "symmetra-snowflake",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/symmetra-snowflake.png",
              "ornamentID": "symmetra-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/symmetra-ornament.png"
            },
            {
              "hero": "Symmetra", "heroCN": "秩序之光",
              "name": "Ornament",
              "id": "symmetra-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/symmetra-ornament.png",
              "ornamentID": "symmetra-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/symmetra-ornament.png"
            },
            {
              "hero": "Torbjörn", "heroCN": "托比昂",
              "name": "Workshop",
              "id": "torbjorn-workshop",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/torbjorn-workshop.png",
              "ornamentID": "torbjorn-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/torbjorn-ornament.png"
            },
            {
              "hero": "Torbjörn", "heroCN": "托比昂",
              "name": "Ornament",
              "id": "torbjorn-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/torbjorn-ornament.png",
              "ornamentID": "torbjorn-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/torbjorn-ornament.png"
            },
            {
              "hero": "Tracer", "heroCN": "猎空",
              "name": "Snowboarding",
              "id": "tracer-snowboarding",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/tracer-snowboarding.png",
              "ornamentID": "tracer-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/tracer-ornament.png"
            },
            {
              "hero": "Tracer", "heroCN": "猎空",
              "name": "Ornament",
              "id": "tracer-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/tracer-ornament.png",
              "ornamentID": "tracer-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/tracer-ornament.png"
            },
            {
              "hero": "Widowmaker", "heroCN": "黑百合",
              "name": "Skiing",
              "id": "widowmaker-skiing",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/widowmaker-skiing.png",
              "ornamentID": "widowmaker-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/widowmaker-ornament.png"
            },
            {
              "hero": "Widowmaker", "heroCN": "黑百合",
              "name": "Ornament",
              "id": "widowmaker-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/widowmaker-ornament.png",
              "ornamentID": "widowmaker-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/widowmaker-ornament.png"
            },
            {
              "hero": "Winston", "heroCN": "温斯顿",
              "name": "Presents",
              "id": "winston-presents",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/winston-presents.png",
              "ornamentID": "winston-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/winston-ornament.png"
            },
            {
              "hero": "Winston", "heroCN": "温斯顿",
              "name": "Ornament",
              "id": "winston-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/winston-ornament.png",
              "ornamentID": "winston-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/winston-ornament.png"
            },
            {
              "hero": "Zarya", "heroCN": "查莉娅",
              "name": "Matryoshka",
              "id": "zarya-matryoshka",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zarya-matryoshka.png",
              "ornamentID": "zarya-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zarya-ornament.png"
            },
            {
              "hero": "Zarya", "heroCN": "查莉娅",
              "name": "Ornament",
              "id": "zarya-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zarya-ornament.png",
              "ornamentID": "zarya-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zarya-ornament.png"
            },
            {
              "hero": "Zenyatta", "heroCN": "禅雅塔",
              "name": "Snowball Fight",
              "id": "zenyatta-snowball-fight",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zenyatta-snowball-fight.png",
              "ornamentID": "zenyatta-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zenyatta-ornament.png"
            },
            {
              "hero": "Zenyatta", "heroCN": "禅雅塔",
              "name": "Ornament",
              "id": "zenyatta-ornament",
              "quality": "common",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zenyatta-ornament.png",
              "ornamentID": "zenyatta-ornament",
              "ornamentURL": "./resources/updates/WINTER_WONDERLAND_2016/sprays/zenyatta-ornament.png"
            },
            {
              "name": "Winter Wonderland",
              "id": "winter-wonderland",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/winter-wonderland.png",
              "quality": "common"
            },
            {
              "name": "SnowReaper",
              "id": "snowreaper",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/snowreaper.png"
            },
            {
              "name": "SnowMei",
              "id": "snowmei",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/snowmei.png"
            },
            {
              "name": "SnowHog",
              "id": "snowhog",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/snowhog.png"
            },
            {
              "name": "SnowCree",
              "id": "snowcree",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/sprays/snowcree.png"
            }
          ],
          "voicelines": [
            {
              "hero": "Ana",
              "name": "I'm watching out for you",
              "id": "ana-im-watching-out-for-you",
              "quality": "common"
            },
            {
              "hero": "Bastion", "heroCN": "堡垒",
              "name": "DWEE DOO HOO",
              "id": "bastion-dwee-doo-hoo",
              "quality": "common"
            },
            {
              "hero": "D.Va", "heroCN": "D.VA",
              "name": "Aw, you shouldn't have",
              "id": "dva-aw-you-shouldnt-have",
              "quality": "common"
            },
            {
              "hero": "Genji", "heroCN": " 源氏",
              "name": "Merry Christmas!",
              "id": "genji-merry-christmas",
              "quality": "common"
            },
            {
              "hero": "Hanzo", "heroCN": "半藏",
              "name": "A gift for you",
              "id": "hanzo-a-gift-for-you",
              "quality": "common"
            },
            {
              "hero": "Junkrat","heroCN": "狂鼠",
              "name": "Merry Christmas",
              "id": "junkrat-merry-christmas",
              "quality": "common"
            },
            {
              "hero": "Lúcio", "heroCN": "卢西奥",
              "name": "Happy holidays!",
              "id": "lucio-happy-holidays",
              "quality": "common"
            },
            {
              "hero": "McCree", "heroCN": "麦克雷",
              "name": "Had to break the ice",
              "id": "mccree-had-to-break-the-ice",
              "quality": "common"
            },
            {
              "hero": "Mei", "heroCN": "美",
              "name": "I got you something!",
              "id": "mei-i-got-you-something",
              "quality": "common"
            },
            {
              "hero": "Mercy", "heroCN": "天使",
              "name": "Your guardian angel",
              "id": "mercy-your-guardian-angel",
              "quality": "common"
            },
            {
              "hero": "Pharah", "heroCN": "法老之鹰",
              "name": "The forecast",
              "id": "pharah-the-forecast",
              "quality": "common"
            },
            {
              "hero": "Reaper", "heroCN": "死神",
              "name": "Holiday spirit",
              "id": "reaper-holiday-spirit",
              "quality": "common"
            },
            {
              "hero": "Reinhardt", "heroCN": "莱因哈特",
              "name": "You're on my naughty list",
              "id": "reinhardt-youre-on-my-naughty-list",
              "quality": "common"
            },
            {
              "hero": "Roadhog", "heroCN": "路霸",
              "name": "Ho ho ho",
              "id": "roadhog-ho-ho-ho",
              "quality": "common"
            },
            {
              "hero": "Soldier: 76", "heroCN": "士兵76",
              "name": "Stay frosty",
              "id": "soldier-76-stay-frosty",
              "quality": "common"
            },
            {
              "hero": "Sombra", "heroCN": "黑影",
              "name": "I know who's been naughty",
              "id": "sombra-i-know-whos-been-naughty",
              "quality": "common"
            },
            {
              "hero": "Symmetra", "heroCN": "秩序之光",
              "name": "I made you something",
              "id": "symmetra-i-made-you-something",
              "quality": "common"
            },
            {
              "hero": "Torbjörn", "heroCN": "托比昂",
              "name": "Made to order",
              "id": "torbjorn-made-to-order",
              "quality": "common"
            },
            {
              "hero": "Tracer", "heroCN": "猎空",
              "name": "It's in the bag",
              "id": "tracer-its-in-the-bag",
              "quality": "common"
            },
            {
              "hero": "Widowmaker", "heroCN": "黑百合",
              "name": "Exquisite",
              "id": "widowmaker-exquisite",
              "quality": "common"
            },
            {
              "hero": "Winston", "heroCN": "温斯顿",
              "name": "I... got you something",
              "id": "winston-i-got-you-something",
              "quality": "common"
            },
            {
              "hero": "Zarya", "heroCN": "查莉娅",
              "name": "For the Motherland",
              "id": "zarya-for-the-motherland",
              "quality": "common"
            },
            {
              "hero": "Zenyatta", "heroCN": "禅雅塔",
              "name": "No snowflake",
              "id": "zenyatta-no-snowflake",
              "quality": "common"
            }
          ],
          "poses": [
            {
              "hero": "D.Va", "heroCN": "D.VA",
              "name": "Festive",
              "id": "dva-festive",
              "quality": "rare",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/dva-festive.jpg"
            },
            {
              "hero": "Mercy", "heroCN": "天使",
              "name": "Mistletoe",
              "id": "mercy-mistletoe",
              "quality": "rare",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/mercy-mistletoe.jpg"
            },
            {
              "hero": "Ana",
              "name": "Toast",
              "id": "ana-toast",
              "quality": "rare",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/ana-toast.jpg"
            },
            {
              "hero": "Pharah", "heroCN": "法老之鹰",
              "name": "Toast",
              "id": "pharah-toast",
              "quality": "rare",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/pharah-toast.jpg"
            },
            {
              "hero": "Reinhardt", "heroCN": "莱因哈特",
              "name": "Toast",
              "id": "reinhardt-toast",
              "quality": "rare",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/reinhardt-toast.jpg"
            },
            {
              "hero": "Soldier: 76", "heroCN": "士兵76",
              "name": "Toast",
              "id": "soldier-76-toast",
              "quality": "rare",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/soldier-76-toast.jpg"
            },
            {
              "hero": "Torbjörn", "heroCN": "托比昂",
              "name": "Toast",
              "id": "torbjorn-toast",
              "quality": "rare",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/poses/torbjorn-toast.jpg"
            }
          ],
          "skinsEpic": [
            {
              "hero": "Lúcio", "heroCN": "卢西奥",
              "name": "Andes",
              "id": "lucio-andes",
              "quality": "epic",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/lucio-andes.jpg"
            },
            {
              "hero": "Pharah", "heroCN": "法老之鹰",
              "name": "Frostbite",
              "id": "pharah-frostbite",
              "quality": "epic",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/pharah-frostbite.jpg"
            },
            {
              "hero": "Zarya", "heroCN": "查莉娅",
              "name": "Frosted",
              "id": "zarya-frosted",
              "quality": "epic",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/zarya-frosted.jpg"
            },
            {
              "hero": "Sombra", "heroCN": "黑影",
              "name": "Peppermint",
              "id": "sombra-peppermint",
              "quality": "epic",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/sombra-peppermint.jpg"
            },
            {
              "hero": "Roadhog", "heroCN": "路霸",
              "name": "Rudolph",
              "id": "roadhog-rudolph",
              "quality": "epic",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/roadhog-rudolph.jpg"
            },
            {
              "hero": "McCree", "heroCN": "麦克雷",
              "name": "Scrooge",
              "id": "mccree-scrooge",
              "quality": "epic",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/mccree-scrooge.jpg"
            },
            {
              "hero": "Reaper", "heroCN": "死神",
              "name": "Shiver",
              "id": "reaper-shiver",
              "quality": "epic",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsEpic/reaper-shiver.jpg"
            }
          ],
          "emotes": [
            {
              "hero": "McCree", "heroCN": "麦克雷",
              "name": "Hat Trick",
              "id": "mccree-hat-trick",
              "quality": "epic",
              "video": "./resources/updates/WINTER_WONDERLAND_2016/emotes/mccree-hat-trick.webm"
            },
            {
              "hero": "Zarya", "heroCN": "查莉娅",
              "legendary": true,
              "name": "Mystery Gift",
              "id": "zarya-mystery-gift",
              "quality": "legendary",
              "video": "./resources/updates/WINTER_WONDERLAND_2016/emotes/zarya-mystery-gift.webm"
            },
            {
              "hero": "Mei", "heroCN": "美",
              "name": "Snowman",
              "id": "mei-snowman",
              "quality": "epic",
              "video": "./resources/updates/WINTER_WONDERLAND_2016/emotes/mei-snowman.webm"
            }
          ],
          "skinsLegendary": [
            {
              "hero": "Mei", "heroCN": "美",
              "name": "Mei-rry",
              "id": "mei-meirry",
              "quality": "legendary",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsLegendary/mei-meirry.jpg"
            },
            {
              "hero": "Torbjörn", "heroCN": "托比昂",
              "name": "Santaclad",
              "id": "torbjorn-santaclad",
              "quality": "legendary",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsLegendary/torbjorn-santaclad.jpg"
            },
            {
              "hero": "Tracer", "heroCN": "猎空",
              "name": "Jingle",
              "id": "tracer-jingle",
              "quality": "legendary",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsLegendary/tracer-jingle.jpg"
            },
            {
              "hero": "Winston", "heroCN": "温斯顿",
              "name": "Yeti",
              "id": "winston-yeti",
              "quality": "legendary",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsLegendary/winston-yeti.jpg"
            },
            {
              "hero": "Zenyatta", "heroCN": "禅雅塔",
              "name": "Nutcracker",
              "id": "zenyatta-nutcracker",
              "quality": "legendary",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/skinsLegendary/zenyatta-nutcracker.jpg"
            }
          ],
          "intros": [
            {
              "hero": "Symmetra", "heroCN": "秩序之光",
              "name": "Snowflakes",
              "id": "symmetra-snowflakes",
              "quality": "epic",
              "video": "./resources/updates/WINTER_WONDERLAND_2016/intros/symmetra-snowflakes.webm"
            },
            {
              "hero": "Widowmaker", "heroCN": "黑百合",
              "name": "Under the Mistletoe",
              "id": "widowmaker-under-the-mistletoe",
              "quality": "epic",
              "video": "./resources/updates/WINTER_WONDERLAND_2016/intros/widowmaker-under-the-mistletoe.webm"
            }
          ],
          "icons": [
            {
              "name": "2017",
              "id": "2017",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/2017.png"
            },
            {
              "name": "Bells",
              "id": "bells",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/bells.png"
            },
            {
              "name": "Bubbly",
              "id": "bubbly",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/bubbly.png"
            },
            {
              "name": "Candy Cane",
              "id": "candy-cane",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/candy-cane.png"
            },
            {
              "name": "Cheers!",
              "id": "cheers",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/cheers.png"
            },
            {
              "name": "Dreidel",
              "id": "dreidel",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/dreidel.png"
            },
            {
              "name": "Gingerbread",
              "id": "gingerbread",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/gingerbread.png"
            },
            {
              "name": "Gingermari",
              "id": "gingermari",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/gingermari.png"
            },
            {
              "name": "Holly",
              "id": "holly",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/holly.png"
            },
            {
              "name": "Hot Cocoa",
              "id": "hot-cocoa",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/hot-cocoa.png"
            },
            {
              "name": "Jingle",
              "id": "tracer-jingle",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/tracer-jingle.png"
            },
            {
              "name": "Mochi",
              "id": "mochi",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/mochi.png"
            },
            {
              "name": "Nutcracker",
              "id": "zenyatta-nutcracker",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/zenyatta-nutcracker.png"
            },
            {
              "name": "Ornament",
              "id": "ornament",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/ornament.png"
            },
            {
              "name": "Pachimerry",
              "id": "pachimerry",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/pachimerry.png"
            },
            {
              "name": "Pachireindeer",
              "id": "pachireindeer",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/pachireindeer.png"
            },
            {
              "name": "Peppermint",
              "id": "peppermint",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/peppermint.png"
            },
            {
              "name": "Present",
              "id": "present",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/present.png"
            },
            {
              "name": "Santaclad",
              "id": "torbjorn-santaclad",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/torbjorn-santaclad.png"
            },
            {
              "name": "Snow Globe",
              "id": "snow-globe",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/snow-globe.png"
            },
            {
              "name": "Snowman",
              "id": "snowman",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/snowman.png"
            },
            {
              "name": "Stocking",
              "id": "stocking",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/stocking.png"
            },
            {
              "name": "Tannenbaum",
              "id": "tannenbaum",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/tannenbaum.png"
            },
            {
              "name": "Winter Wonderland",
              "id": "winter-wonderland",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/winter-wonderland.png"
            },
            {
              "name": "Wreath",
              "id": "wreath",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/wreath.png"
            },
            {
              "name": "Yeti",
              "id": "winston-yeti",
              "img": "./resources/updates/WINTER_WONDERLAND_2016/icons/winston-yeti.png"
            }
          ]
        }
      },
      "YEAR_OF_THE_ROOSTER_2017": {
        "name": "金鸡鸣春 2017",
        "id": "YEAR_OF_THE_ROOSTER_2017",
        "dates": {
          "start": "1485180000000",
          "end": "1486908000000"
        },
        "items": {
          "skinsEpic": [
            {
              "hero": "Junkrat", "heroCN": "狂鼠",
              "name": "爆竹",
              "id": "junkrat-firework",
              "quality": "epic",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsEpic/junkrat-firework.jpg"
            },
            {
              "hero": "Mercy", "heroCN": "天使",
              "name": "金黄",
              "id": "mercy-golden",
              "quality": "epic",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsEpic/mercy-golden.jpg"
            },
            {
              "hero": "Symmetra", "heroCN": "秩序之光",
              "name": "旗袍",
              "id": "symmetra-qipao",
              "quality": "epic",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsEpic/symmetra-qipao.jpg"
            },
            {
              "hero": "Bastion", "heroCN": "堡垒",
              "name": "幺鸡堡垒",
              "id": "bastion-rooster",
              "quality": "epic",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsEpic/bastion-rooster.jpg"
            },
            {
              "hero": "Tracer", "heroCN": "猎空",
              "name": "玫瑰",
              "id": "tracer-rose",
              "quality": "epic",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsEpic/tracer-rose.jpg"
            },
            {
              "hero": "Ana", "heroCN": "安娜",
              "name": "河回假面",
              "id": "ana-tal",
              "quality": "epic",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsEpic/ana-tal.jpg"
            }
          ],
          "sprays": [
            {
              "hero": "Ana", "heroCN": "安娜",
              "name": "秧歌",
              "id": "ana-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/ana-dance.png",
              "dragonID": "ana-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/ana-dragon-dance.png"
            },
            {
              "hero": "Ana", "heroCN": "安娜",
              "name": "舞龙",
              "id": "ana-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/ana-dragon-dance.png",
              "dragonID": "ana-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/ana-dragon-dance.png"
            },
            {
              "hero": "Bastion", "heroCN": "堡垒",
              "name": "舞龙",
              "id": "bastion-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/bastion-dragon-dance.png",
              "dragonID": "bastion-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/bastion-dragon-dance.png"
            },
            {
              "hero": "Bastion", "heroCN": "堡垒",
              "name": "堡证美味",
              "id": "bastion-bastyum",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/bastion-bastyum.png",
              "dragonID": "bastion-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/bastion-dragon-dance.png"
            },
            {
              "hero": "D.Va", "heroCN": "D.VA",
              "name": "跷跷板",
              "id": "dva-seesaw",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/dva-seesaw.png",
              "dragonID": "dva-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/dva-dragon-dance.png"
            },
            {
              "hero": "D.Va", "heroCN": "D.VA",
              "name": "舞龙",
              "id": "dva-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/dva-dragon-dance.png",
              "dragonID": "dva-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/dva-dragon-dance.png"
            },
            {
              "hero": "Genji", "heroCN": " 源氏",
              "name": "舞龙",
              "id": "genji-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/genji-dragon-dance.png",
              "dragonID": "genji-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/genji-dragon-dance.png"
            },
            {
              "hero": "Genji", "heroCN": " 源氏",
              "name": "青龙",
              "id": "genji-green-dragon",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/genji-green-dragon.png",
              "dragonID": "genji-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/genji-dragon-dance.png"
            },
            {
              "hero": "Hanzo", "heroCN": "半藏",
              "name": "蓝龙",
              "id": "hanzo-blue-dragon",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/hanzo-blue-dragon.png",
              "dragonID": "hanzo-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/hanzo-dragon-dance.png"
            },
            {
              "hero": "Hanzo", "heroCN": "半藏",
              "name": "舞龙",
              "id": "hanzo-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/hanzo-dragon-dance.png",
              "dragonID": "hanzo-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/hanzo-dragon-dance.png"
            },
            {
              "hero": "Junkrat", "heroCN": "狂鼠",
              "name": "舞龙",
              "id": "junkrat-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/junkrat-dragon-dance.png",
              "dragonID": "junkrat-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/junkrat-dragon-dance.png"
            },
            {
              "hero": "Junkrat", "heroCN": "狂鼠",
              "name": "上天啦！",
              "id": "junkrat-im-flying",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/junkrat-im-flying.png",
              "dragonID": "junkrat-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/junkrat-dragon-dance.png"
            },
            {
              "hero": "Lúcio", "heroCN": "卢西奥",
              "name": "Keep Ups",
              "id": "lucio-keep-ups",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/lucio-keep-ups.png",
              "dragonID": "lucio-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/lucio-dragon-dance.png"
            },
            {
              "hero": "Lúcio", "heroCN": "卢西奥",
              "name": "舞龙",
              "id": "lucio-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/lucio-dragon-dance.png",
              "dragonID": "lucio-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/lucio-dragon-dance.png"
            },
            {
              "hero": "McCree", "heroCN": "麦克雷",
              "name": "猜硬币",
              "id": "mccree-call-it",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mccree-call-it.png",
              "dragonID": "mccree-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mccree-dragon-dance.png"
            },
            {
              "hero": "McCree", "heroCN": "麦克雷",
              "name": "舞龙",
              "id": "mccree-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mccree-dragon-dance.png",
              "dragonID": "mccree-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mccree-dragon-dance.png"
            },
            {
              "hero": "Mei", "heroCN": "美",
              "name": "恭喜发财",
              "id": "mei-fortune",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mei-fortune.png",
              "dragonID": "mei-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mei-dragon-dance.png"
            },
            {
              "hero": "Mei", "heroCN": "美",
              "name": "舞龙",
              "id": "mei-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mei-dragon-dance.png",
              "dragonID": "mei-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mei-dragon-dance.png"
            },
            {
              "hero": "Mercy", "heroCN": "天使",
              "name": "舞龙",
              "id": "mercy-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mercy-dragon-dance.png",
              "dragonID": "mercy-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mercy-dragon-dance.png"
            },
            {
              "hero": "Mercy", "heroCN": "天使",
              "name": "撑伞",
              "id": "mercy-parasol",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mercy-parasol.png",
              "dragonID": "mercy-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/mercy-dragon-dance.png"
            },
            {
              "hero": "Pharah", "heroCN": "法老之鹰",
              "name": "新年快乐",
              "id": "pharah-happy-new-year",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/pharah-happy-new-year.png",
              "dragonID": "pharah-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/pharah-dragon-dance.png"
            },
            {
              "hero": "Pharah", "heroCN": "法老之鹰",
              "name": "舞龙",
              "id": "pharah-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/pharah-dragon-dance.png",
              "dragonID": "pharah-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/pharah-dragon-dance.png"
            },
            {
              "hero": "Reaper", "heroCN": "死神",
              "name": "火焰绽放",
              "id": "reaper-fire-blossom",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/reaper-fire-blossom.png",
              "dragonID": "reaper-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/reaper-dragon-dance.png"
            },
            {
              "hero": "Reaper", "heroCN": "死神",
              "name": "舞龙",
              "id": "reaper-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/reaper-dragon-dance.png",
              "dragonID": "reaper-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/reaper-dragon-dance.png"
            },
            {
              "hero": "Reinhardt", "heroCN": "莱因哈特",
              "name": "舞狮",
              "id": "reinhardt-lion-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/reinhardt-lion-dance.png",
              "dragonID": "reinhardt-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/reinhardt-dragon-dance.png"
            },
            {
              "hero": "Reinhardt", "heroCN": "莱因哈特",
              "name": "舞龙",
              "id": "reinhardt-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/reinhardt-dragon-dance.png",
              "dragonID": "reinhardt-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/reinhardt-dragon-dance.png"
            },
            {
              "hero": "Roadhog", "heroCN": "路霸",
              "name": "蒸包子",
              "id": "roadhog-steamed-buns",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/roadhog-steamed-buns.png",
              "dragonID": "roadhog-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/roadhog-dragon-dance.png"
            },
            {
              "hero": "Roadhog", "heroCN": "路霸",
              "name": "舞龙",
              "id": "roadhog-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/roadhog-dragon-dance.png",
              "dragonID": "roadhog-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/roadhog-dragon-dance.png"
            },
            {
              "hero": "Soldier: 76", "heroCN": "士兵76",
              "name": "拜年",
              "id": "soldier-76-folded-hands",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/soldier-76-folded-hands.png",
              "dragonID": "soldier-76-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/soldier-76-dragon-dance.png"
            },
            {
              "hero": "Soldier: 76", "heroCN": "士兵76",
              "name": "舞龙",
              "id": "soldier-76-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/soldier-76-dragon-dance.png",
              "dragonID": "soldier-76-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/soldier-76-dragon-dance.png"
            },
            {
              "hero": "Sombra", "heroCN": "黑影",
              "name": "舞龙",
              "id": "sombra-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/sombra-dragon-dance.png",
              "dragonID": "sombra-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/sombra-dragon-dance.png"
            },
            {
              "hero": "Sombra", "heroCN": "黑影",
              "name": "恭喜发财",
              "id": "sombra-fortunate",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/sombra-fortunate.png",
              "dragonID": "sombra-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/sombra-dragon-dance.png"
            },
            {
              "hero": "Symmetra", "heroCN": "秩序之光",
              "name": "灯笼",
              "id": "symmetra-lantern",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/symmetra-lantern.png",
              "dragonID": "symmetra-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/symmetra-dragon-dance.png"
            },
            {
              "hero": "Symmetra", "heroCN": "秩序之光",
              "name": "舞龙",
              "id": "symmetra-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/symmetra-dragon-dance.png",
              "dragonID": "symmetra-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/symmetra-dragon-dance.png"
            },
            {
              "hero": "Torbjörn", "heroCN": "托比昂",
              "name": "元宝",
              "id": "torbjorn-gold",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/torbjorn-gold.png",
              "dragonID": "torbjorn-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/torbjorn-dragon-dance.png"
            },
            {
              "hero": "Torbjörn", "heroCN": "托比昂",
              "name": "舞龙",
              "id": "torbjorn-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/torbjorn-dragon-dance.png",
              "dragonID": "torbjorn-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/torbjorn-dragon-dance.png"
            },
            {
              "hero": "Tracer", "heroCN": "猎空",
              "name": "舞扇",
              "id": "tracer-fan-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/tracer-fan-dance.png",
              "dragonID": "tracer-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/tracer-dragon-dance.png"
            },
            {
              "hero": "Tracer", "heroCN": "猎空",
              "name": "舞龙",
              "id": "tracer-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/tracer-dragon-dance.png",
              "dragonID": "tracer-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/tracer-dragon-dance.png"
            },
            {
              "hero": "Widowmaker", "heroCN": "黑百合",
              "name": "发髻",
              "id": "widowmaker-hairpin",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/widowmaker-hairpin.png",
              "dragonID": "widowmaker-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/widowmaker-dragon-dance.png"
            },
            {
              "hero": "Widowmaker", "heroCN": "黑百合",
              "name": "舞龙",
              "id": "widowmaker-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/widowmaker-dragon-dance.png",
              "dragonID": "widowmaker-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/widowmaker-dragon-dance.png"
            },
            {
              "hero": "Winston", "heroCN": "温斯顿",
              "name": "风筝",
              "id": "winston-kite",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/winston-kite.png",
              "dragonID": "winston-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/winston-dragon-dance.png"
            },
            {
              "hero": "Winston", "heroCN": "温斯顿",
              "name": "舞龙",
              "id": "winston-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/winston-dragon-dance.png",
              "dragonID": "winston-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/winston-dragon-dance.png"
            },
            {
              "hero": "Zarya", "heroCN": "查莉娅",
              "name": "补充能量",
              "id": "zarya-calories",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/zarya-calories.png",
              "dragonID": "zarya-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/zarya-dragon-dance.png"
            },
            {
              "hero": "Zarya", "heroCN": "查莉娅",
              "name": "舞龙",
              "id": "zarya-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/zarya-dragon-dance.png",
              "dragonID": "zarya-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/zarya-dragon-dance.png"
            },
            {
              "hero": "Zenyatta", "heroCN": "禅雅塔",
              "name": "柶戏",
              "id": "zenyatta-yut-nori",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/zenyatta-yut-nori.png",
              "dragonID": "zenyatta-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/zenyatta-dragon-dance.png"
            },
            {
              "hero": "Zenyatta", "heroCN": "禅雅塔",
              "name": "舞龙",
              "id": "zenyatta-dragon-dance",
              "quality": "common",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/zenyatta-dragon-dance.png",
              "dragonID": "zenyatta-dragon-dance",
              "dragonURL": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/zenyatta-dragon-dance.png"
            },
            {
              "name": "金鸡鸣春",
              "id": "year-of-the-rooster",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/year-of-the-rooster.png",
              "quality": "common"
            },
            {
              "name": "红包",
              "id": "red-envelope",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/red-envelope.png",
              "quality": "common"
            },
            {
              "name": "福袋",
              "id": "lucky-pouch",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/lucky-pouch.png",
              "quality": "common"
            },
            {
              "name": "龙首",
              "id": "dragons-head",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/dragons-head.png",
              "quality": "common"
            },
            {
              "name": "醒狮",
              "id": "awakened-lion",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/awakened-lion.png"
            },
            {
              "name": "舞狮",
              "id": "auspicious-lion",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/sprays/auspicious-lion.png"
            }
          ],
          "voicelines": [
            {
              "hero": "Ana", "heroCN": "安娜",
              "name": "The moon in winter",
              "id": "ana-the-moon-in-winter",
              "quality": "common"
            },
            {
              "hero": "Bastion", "heroCN": "堡垒",
              "name": "Woop doo woo dun woop",
              "id": "bastion-woop-doo-woo-dun-woop",
              "quality": "common"
            },
            {
              "hero": "D.Va", "heroCN": "D.VA",
              "name": "The best things in life",
              "id": "dva-the-best-things-in-life",
              "quality": "common"
            },
            {
              "hero": "Genji", "heroCN": " 源氏",
              "name": "To know yourself",
              "id": "genji-to-know-yourself",
              "quality": "common"
            },
            {
              "hero": "Hanzo", "heroCN": "半藏",
              "name": "When the moon is full",
              "id": "hanzo-when-the-moon-is-full",
              "quality": "common"
            },
            {
              "hero": "Junkrat", "heroCN": "狂鼠",
              "name": "Gong Xi Fa Cai",
              "id": "junkrat-gong-xi-fa-cai",
              "quality": "common"
            },
            {
              "hero": "Lúcio", "heroCN": "卢西奥",
              "name": "I make this look good...",
              "id": "lucio-i-make-this-look-good",
              "quality": "common"
            },
            {
              "hero": "McCree", "heroCN": "麦克雷",
              "name": "Calls for a celebration",
              "id": "mccree-calls-for-a-celebration",
              "quality": "common"
            },
            {
              "hero": "Mei", "heroCN": "美",
              "name": "Wishing you prosperity",
              "id": "mei-wishing-you-prosperity",
              "quality": "common"
            },
            {
              "hero": "Mercy", "heroCN": "天使",
              "name": "A most impressive display",
              "id": "mercy-a-most-impressive-display",
              "quality": "common"
            },
            {
              "hero": "Pharah", "heroCN": "法老之鹰",
              "name": "I keep the peace",
              "id": "pharah-i-keep-the-peace",
              "quality": "common"
            },
            {
              "hero": "Reaper", "heroCN": "死神",
              "name": "Now those are fireworks",
              "id": "reaper-now-those-are-fireworks",
              "quality": "common"
            },
            {
              "hero": "Reinhardt", "heroCN": "莱因哈特",
              "name": "Are you chicken?",
              "id": "reinhardt-are-you-chicken",
              "quality": "common"
            },
            {
              "hero": "Roadhog", "heroCN": "路霸",
              "name": "You chicken?",
              "id": "roadhog-you-chicken",
              "quality": "common"
            },
            {
              "hero": "Soldier: 76", "heroCN": "士兵76",
              "name": "The rooster crows",
              "id": "soldier-76-the-rooster-crows",
              "quality": "common"
            },
            {
              "hero": "Sombra", "heroCN": "黑影",
              "name": "You're easily impressed",
              "id": "sombra-youre-easily-impressed",
              "quality": "common"
            },
            {
              "hero": "Symmetra", "heroCN": "秩序之光",
              "name": "Good fortune",
              "id": "symmetra-good-fortune",
              "quality": "common"
            },
            {
              "hero": "Torbjörn", "heroCN": "托比昂",
              "name": "Too hot for you?",
              "id": "torbjorn-too-hot-for-you",
              "quality": "common"
            },
            {
              "hero": "Tracer", "heroCN": "猎空",
              "name": "Ready for some fireworks?",
              "id": "tracer-ready-for-some-fireworks",
              "quality": "common"
            },
            {
              "hero": "Widowmaker", "heroCN": "黑百合",
              "name": "You have my attention",
              "id": "widowmaker-you-have-my-attention",
              "quality": "common"
            },
            {
              "hero": "Winston", "heroCN": "温斯顿",
              "name": "That was awesome!",
              "id": "winston-that-was-awesome",
              "quality": "common"
            },
            {
              "hero": "Zarya", "heroCN": "查莉娅",
              "name": "Get pumped",
              "id": "zarya-get-pumped",
              "quality": "common"
            },
            {
              "hero": "Zenyatta", "heroCN": "禅雅塔",
              "name": "Every rooster crows",
              "id": "zenyatta-every-rooster-crows",
              "quality": "common"
            }
          ],
          "poses": [
            {
              "hero": "Junkrat", "heroCN": "狂鼠",
              "name": "切勿模仿",
              "id": "junkrat-bad-for-your-health",
              "quality": "rare",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/poses/junkrat-bad-for-your-health.jpg"
            },
            {
              "hero": "Bastion", "heroCN": "堡垒",
              "name": "烟火",
              "id": "bastion-firework",
              "quality": "rare",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/poses/bastion-firework.jpg"
            },
            {
              "hero": "Ana", "heroCN": "安娜",
              "name": "拜年",
              "id": "ana-folded-hands",
              "quality": "rare",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/poses/ana-folded-hands.jpg"
            },
            {
              "hero": "D.Va", "heroCN": "D.VA",
              "name": "福袋",
              "id": "dva-lucky-pouch",
              "quality": "rare",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/poses/dva-lucky-pouch.jpg"
            },
            {
              "hero": "Mei", "heroCN": "美",
              "name": "新年如意",
              "id": "mei-lucky",
              "quality": "rare",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/poses/mei-lucky.jpg"
            },
            {
              "hero": "Sombra", "heroCN": "黑影",
              "name": "烟火",
              "id": "sombra-sparklers",
              "quality": "rare",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/poses/sombra-sparklers.jpg"
            },
            {
              "hero": "Roadhog", "heroCN": "路霸",
              "name": "全是我的",
              "id": "roadhog-whats-mine-is-mine",
              "quality": "rare",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/poses/roadhog-whats-mine-is-mine.jpg"
            }
          ],
          "skinsLegendary": [
            {
              "hero": "D.Va", "heroCN": "D.VA",
              "name": "旧正机甲",
              "id": "dva-palanquin",
              "quality": "legendary",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsLegendary/dva-palanquin.jpg"
            },
            {
              "hero": "Mei", "heroCN": "美",
              "name": "嫦娥",
              "id": "mei-change",
              "quality": "legendary",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsLegendary/mei-change.jpg"
            },
            {
              "hero": "Mei", "heroCN": "美",
              "name": "月神",
              "id": "mei-luna",
              "quality": "legendary",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsLegendary/mei-luna.jpg"
            },
            {
              "hero": "Reinhardt", "heroCN": "莱因哈特",
              "name": "悟净",
              "id": "reinhardt-wujing",
              "quality": "legendary",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsLegendary/reinhardt-wujing.jpg"
            },
            {
              "hero": "Roadhog", "heroCN": "路霸",
              "name": "悟能",
              "id": "roadhog-bajie",
              "quality": "legendary",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsLegendary/roadhog-bajie.jpg"
            },
            {
              "hero": "Winston", "heroCN": "温斯顿",
              "name": "悟空",
              "id": "winston-wukong",
              "quality": "legendary",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsLegendary/winston-wukong.jpg"
            },
            {
              "hero": "Zenyatta", "heroCN": "禅雅塔",
              "name": "三藏",
              "id": "zenyatta-sanzang",
              "quality": "legendary",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/skinsLegendary/zenyatta-sanzang.jpg"
            }
          ],
          "emotes": [
            {
              "hero": "D.Va", "heroCN": "D.VA",
              "name": "行礼",
              "id": "dva-bow",
              "quality": "epic",
              "video": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/emotes/dva-bow.webm"
            },
            {
              "hero": "Junkrat", "heroCN": "狂鼠",
              "name": "哑弹？",
              "id": "junkrat-dud",
              "quality": "epic",
              "video": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/emotes/junkrat-dud.webm"
            },
            {
              "hero": "Mei", "heroCN": "美",
              "name": "激动",
              "id": "mei-so-excited",
              "quality": "epic",
              "video": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/emotes/mei-so-excited.webm"
            }
          ],
          "icons": [
            {
              "name": "新年小鱿",
              "id": "bokimari",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/bokimari.png"
            },
            {
              "name": "嫦娥",
              "id": "mei-change",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/mei-change.png"
            },
            {
              "name": "铜钱",
              "id": "coin",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/coin.png"
            },
            {
              "name": "舞龙",
              "id": "dragon-dance",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/dragon-dance.png"
            },
            {
              "name": "旺福临门",
              "id": "fortune",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/fortune.png"
            },
            {
              "name": "春节小鱿",
              "id": "fuchimari",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/fuchimari.png"
            },
            {
              "name": "元宝",
              "id": "gold",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/gold.png"
            },
            {
              "name": "韩服",
              "id": "dva-hanbok",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/dva-hanbok.png"
            },
            {
              "name": "年年有鱼",
              "id": "have-fish",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/have-fish.png"
            },
            {
              "name": "灯笼",
              "id": "lantern",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/lantern.png"
            },
            {
              "name": "舞狮",
              "id": "lion-dance",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/lion-dance.png"
            },
            {
              "name": "福袋",
              "id": "lucky-pouch",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/lucky-pouch.png"
            },
            {
              "name": "春节安娜",
              "id": "lunamari",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/lunamari.png"
            },
            {
              "name": "悟空",
              "id": "winston-monkey",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/winston-monkey.png"
            },
            {
              "name": "年糕",
              "id": "new-year-cake",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/new-year-cake.png"
            },
            {
              "name": "灯笼小鱿",
              "id": "pachilantern",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/pachilantern.png"
            },
            {
              "name": "八戒",
              "id": "roadhog-piggy",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/roadhog-piggy.png"
            },
            {
              "name": "红包",
              "id": "red-envelope",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/red-envelope.png"
            },
            {
              "name": "沙僧",
              "id": "reinhardt-sandy",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/reinhardt-sandy.png"
            },
            {
              "name": "三藏",
              "id": "zenyatta-sanzang",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/zenyatta-sanzang.png"
            },
            {
              "name": "岁首",
              "id": "seollal",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/seollal.png"
            },
            {
              "name": "柑橘",
              "id": "tangerines",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/tangerines.png"
            },
            {
              "name": "2017年金鸡鸣春",
              "id": "year-of-the-rooster",
              "img": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/icons/year-of-the-rooster.png"
            }
          ],
          "intros": [
            {
              "hero": "Roadhog", "heroCN": "路霸",
              "name": "胡吃海塞",
              "id": "roadhog-feast",
              "quality": "epic",
              "video": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/intros/roadhog-feast.webm"
            },
            {
              "hero": "Mercy", "heroCN": "天使",
              "name": "福到运到",
              "id": "mercy-fortune",
              "quality": "epic",
              "video": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/intros/mercy-fortune.webm"
            },
            {
              "hero": "Tracer", "heroCN": "猎空",
              "name": "舞狮迎春",
              "id": "tracer-lion-dance",
              "quality": "epic",
              "video": "./resources/updates/YEAR_OF_THE_ROOSTER_2017/intros/tracer-lion-dance.webm"
            }
          ]
        }
      }
    }
  }
})
