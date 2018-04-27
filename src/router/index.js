import Vue from 'vue'
import Router from 'vue-router'
import AppView from '@/components/AppView'
import GameView from '@/components/app/GameView'
import RulesView from '@/components/app/RulesView'
import BoardView from '@/components/app/BoardView'
import HelpView from '@/components/app/HelpView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: AppView,
      children: [
        {
          path: '/',
          name: 'GameView',
          component: GameView
        },
        {
          path: 'rules',
          name: 'RulesView',
          component: RulesView
        },
        {
          path: 'board',
          name: 'BoardView',
          component: BoardView
        },
        {
          path: 'help',
          name: 'HelpView',
          component: HelpView
        }
      ]
    }
  ]
})
