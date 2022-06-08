import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: 'One'
      },
      {
        id: 2,
        title: 'Two'
      },
      {
        id: 3,
        title: 'Three'
      }
    ]
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  mutations: {
    mutationsAddTodo(state, todo) {
      state.todos.push(todo);
      console.log(todo);
    },
    mutationsDelTodo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id != id);
    },
    mutationsModTodo(state, todo) {
      let idx = state.todos.findIndex(x=>x.id == todo.id);
      if(idx > -1) {
        state.todos[idx] = todo;
      }
    }
  },
  actions: {
    actionsAddTodo({commit}, todo) {
      commit('mutationsAddTodo', todo);
    },
    actionsDelTodo({commit}, id) {
      commit('mutationsDelTodo', id);
    },
    actionsModTodo({commit}, todo) {
      commit('mutationsModTodo', todo);
    }
  },
  modules: {
  }
})
