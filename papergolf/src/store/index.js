import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    cardList: [
      {
        cardImg: './assets/cardImg/card_img_1.jpg',
        cardType: 'positiv',
        cardDesc: 'Niemand hat gesehen, dass du bereits geschlagen hast.',
        cardInstruction: 'Du darfst noch einmal schlagen.',
        cardFrequency: 3
      }
      {
        cardImg: './assets/cardImg/card_img_2.jpg',
        cardType: 'negativ',
        cardDesc: 'Oh Nein!! Dein Golfhandschuh ist kaputt gegangen.',
        cardInstruction: 'Schlage / Zeichne mit der schwächeren Hand.',
        cardFrequency: 2
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {}
})