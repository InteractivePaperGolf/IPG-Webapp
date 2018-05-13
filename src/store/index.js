import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cardList: [
      {
        img: 'card_img_1.jpg',
        type: 'positiv',
        desc: 'Niemand hat gesehen, dass du bereits geschlagen hast.',
        instruction: 'Du darfst noch einmal schlagen.',
        frequency: 3
      },
      {
        img: 'card_img_2.jpg',
        type: 'negativ',
        desc: 'Oh Nein!! Dein Golfhandschuh ist kaputt gegangen.',
        instruction: 'Schlage / Zeichne mit der schwächeren Hand.',
        frequency: 2
      },
      {
        img: 'card_img_3.jpg',
        type: 'neutral',
        desc: 'Du fühlst dich ein wenig unsicher auf dem Golfplatz. Deshalb tust du einfach das selbe wie der Spieler vor dir.',
        instruction: 'Die Karte des Spielers vor dir gilt nun auch für dich.',
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
