import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardList: [
      // negativ
      {
        type: 'negativ',
        img: 'card_img_negativ.jpg',
        desc: 'Oh Nein!! Dein Golfhandschuh ist kaputt gegangen.',
        instruction: 'Schlage/Zeichne mit der schwächeren Hand',
        frequency: 3
      },
      {
        type: 'negativ',
        img: 'card_img_negativ.jpg',
        desc: 'Du wirst von einer Biene verfolgt und willst sie loswerden.',
        instruction: 'Mache mit einer Hand Luftkreise (um die Biene los zu werden) während du zeichnest',
        frequency: 1
      },
      {
        type: 'negativ',
        img: 'card_img_negativ.jpg',
        desc: 'Du merkst wie dein Hemd aus der Hose rutscht.',
        instruction: 'Halte eine Hand auf den Rücken um zu zeichnen',
        frequency: 1
      },
      {
        type: 'negativ',
        img: 'card_img_negativ.jpg',
        desc: 'Dein Golfwagen hat einen platten Reifen. Du musst Ihn reparieren.',
        instruction: 'Eine Runde aussetzen',
        frequency: 2
      },
      {
        type: 'negativ',
        img: 'card_img_negativ.jpg',
        desc: 'Dein Ball liegt unter einem Baum. Der Ast oberhalb von dir könnte jede Sekunde abbrechen. Um jederzeit ausweichen zu können:',
        instruction: 'Schaue für diesen Schlag die ganze Zeit nach oben',
        frequency: 2
      },
      {
        type: 'negativ',
        img: 'card_img_negativ.jpg',
        desc: 'Du hast unerlaubterweise den Ball verschoben. Das gibt einen Strafschlag.',
        instruction: '+1 Schlag',
        frequency: 3
      },
      {
        type: 'negativ',
        img: 'card_img_negativ.jpg',
        desc: 'Mücken auf dem Golfplatz!!',
        instruction: 'Kreise während dem Schlag mit dem Kopf, um nicht gestochen zu werden',
        frequency: 1
      },
      {
        type: 'negativ',
        img: 'card_img_negativ.jpg',
        desc: 'Du fühlst dich noch etwas unsicher beim Schlagen.',
        instruction: 'Halte den Stift mit beiden Händen fest',
        frequency: 2
      },
      {
        type: 'negativ',
        img: 'card_img_negativ.jpg',
        desc: 'Starker Wind auf dem Golfplatz.',
        instruction: 'Dein Gegenspieler darf das Blatt während des Schlages leicht verschieben',
        frequency: 2
      },
      {
        type: 'negativ',
        img: 'card_img_negativ.jpg',
        desc: 'Es hagelt auf dem Golfplatz.',
        instruction: 'Dein Gegenspieler darf während des Schlages auf den Tisch klopfen',
        frequency: 1
      },
      {
        type: 'negativ',
        img: 'card_img_negativ.jpg',
        desc: 'Achtung, ein Tier auf dem Golfplatz!',
        instruction: 'Baue eine Spirale in deinen Schlag ein um das Tier zu umspielen',
        frequency: 1
      },
      // neutral
      {
        type: 'neutral',
        img: 'card_img_neutral.jpg',
        desc: 'Du fühlst dich ein wenig unsicher auf dem Golfplatz. Deshalb tust du einfach dasselbe wie der Spieler vor dir.',
        instruction: 'Die Karte des Spielers vor dir gilt nun auch für dich',
        frequency: 2
      },
      {
        type: 'neutral',
        img: 'card_img_neutral.jpg',
        desc: 'Heute ist ein ganz normaler Tag.',
        instruction: 'Nichts passiert, führe einen ganz normalen Zug aus',
        frequency: 3
      },
      // positiv
      {
        type: 'positiv',
        img: 'card_img_positiv.jpg',
        desc: 'Letzte Nacht hat es geregnet. Die Bunker sind voll mit Wasser.',
        instruction: 'Für dich sind die Sandbunker kein Hindernis (ergeben keinen Strafschlag)',
        frequency: 2
      },
      {
        type: 'positiv',
        img: 'card_img_positiv.jpg',
        desc: 'Es ist so kalt, dass die Wasserhindernisse gefroren sind.',
        instruction: 'Spiele, falls du während des nächsten Zuges in ein Wasserhindernis gerätst, einfach weiter',
        frequency: 2
      },
      {
        type: 'positiv',
        img: 'card_img_positiv.jpg',
        desc: 'Niemand hat gesehen, dass du bereits geschlagen hast.',
        instruction: 'Du darfst 2x schlagen (nur 1 Schlag wird gezählt)',
        frequency: 2
      },
      {
        type: 'positiv',
        img: 'card_img_positiv.jpg',
        desc: 'Dein Mitspieler hat einen Fehler beim Aufschreiben gemacht und eine Schlag nicht aufgeschrieben.',
        instruction: '-1 Schlag',
        frequency: 3
      },
      {
        type: 'positiv',
        img: 'card_img_positiv.jpg',
        desc: 'Du erfindest eine Regel die es gar nicht gibt, deshalb erhält einer deiner Mitspieler einen Schlag dazu.',
        instruction: 'Wähle einen Mitspieler aus der +1 Schlag erhalten soll',
        frequency: 2
      },
      {
        type: 'positiv',
        img: 'card_img_positiv.jpg',
        desc: 'Du bist ein wenig unfair und tust so als wäre eine Wespe in der Nähe.',
        instruction: 'Kneife deinen Gegenspieler beim nächsten Schlag',
        frequency: 1
      },
      {
        type: 'positiv',
        img: 'card_img_positiv.jpg',
        desc: 'Dein Gegenspieler hat gut gespielt und ein bisschen zu viel Schnaps getrunken.',
        instruction: 'Er erlaubt es dir einen Schlag abzuziehen',
        frequency: 2
      }
    ],
    cardStack: [
    ],
    currentCard: null,
    // usedCards: [],
    showCard: true
  },
  mutations: {
    generateStack: state => {
      var frequency = 0
      state.stackEmpty = false
      state.cardList.forEach(function (card) {
        frequency = card.frequency
        for (var i = 0; i < frequency; i++) {
          state.cardStack.push(card)
        }
      })
    },
    randomize: state => {
      var array = state.cardStack
      var currentIndex = array.length, temporaryValue, randomIndex

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }
    },
    addCard: state => {
      state.currentCard = state.cardStack[0]
      state.cardStack.shift()
    },
    removeCard: state => {
      // if(state.currentCard.type != 'start') {
      //   state.usedCards.unshift(state.currentCard)
      // }
      state.currentCard = null
    },
    changeShowCard: state => {
      state.showCard = !state.showCard
    }
  },
  actions: {
    newStack: context => {
      context.commit('generateStack')
      context.commit('randomize')
      context.state.cardStack.unshift({ type: 'start' })
      context.commit('addCard')
    },
    nextCard: context => {
      context.commit('changeShowCard')
      setTimeout(function () {
        context.commit('removeCard')
        context.commit('addCard')
        if (context.state.cardStack.length < 1) {
          context.commit('generateStack')
          context.commit('randomize')
        }
        context.commit('changeShowCard')
      }, 700)
      // if(context.cardStack.length < 2) {
      //   context.commit('generateStack')
      //   context.commit('randomize')
      // }
    }
  },
  getters: {}
})
