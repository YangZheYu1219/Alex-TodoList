import { createStore } from 'vuex'

const LS = {
  load() {
    //getItem一開始沒有存，有可能拿不到東西，所以給個空陣列
    return localStorage.getItem('todo-list') || '[]'
  },
  save(data) {
    localStorage.setItem('todo-list', data)
  }
}

const filter = {
  all(todos) {
    return todos
  },
  active(todos) {
    return todos.filter(todo => !todo.complete)
  },
  complete(todos) {
    return todos.filter(todo => todo.complete)
  }
}

export default createStore({
  strick: true,
  state: {
    todos: [
      {content:"todo content1", complete: false},
      {content:"todo content2", complete: true},
      {content:"todo content3", complete: false}
    ]
    //存訪資料狀態
  },
  getters: {
    //取得資料，也可像computed，自定義運算處理資料
    todoIndex(state) {
      //取得 原本陣列的index，不然篩選後的順序會改變，index會錯誤
      return filter[state.route.name](state.todos).map(todo => 
        //map 重新做陣列，只要陣列中的index (不是整包資料，資料比較單純)，
        state.todos.indexOf(todo)
      )
    }
  },
  mutations: {
    //save state資料
    SET_TODOS(state, data) {
       state.todos = data
       //儲存 localStorage
       LS.save(state.todos)
    },
    ADD_TODOS(state, data) {
      state.todos.push(data)
      //推上去後再儲存localStorage狀態
      LS.save(state.todos)
    },
    // update是要更新哪一個
    UPDATA_TODOS(state, {index, data}) {
      state.todos[index] = data
      LS.save(state.todos)
    },
    REMOVE_TODOS(state, index) {
      state.todos.splice(index, 1)
      LS.save(state.todos)
    }
  },
  actions: {
    //負責觸發 mutation 來改變 state 的資料
    //actions 會以非同步方式執行程式碼。
    INIT_TODOS({commit}) {
      //load localStorage 把內容讀回來
      commit('SET_TODOS', LS.load())
    }
  },
  modules: {
  }
})
