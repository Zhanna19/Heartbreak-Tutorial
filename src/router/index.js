import Vue from 'vue'
import Router from 'vue-router'
import RemotesList from '../components/RemotesList'
import RemoteForm from '../components/RemoteForm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'RemoteList',
      component: RemotesList
    },
    {
      path: '/remote',
      name: 'RemoteForm',
      component: RemoteForm
    },
    {
      path: '/remote/:id',
      name: 'RemoteForm',
      component: RemoteForm,
      props: true
    }
  ]
})