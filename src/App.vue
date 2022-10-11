<template>
  <div class="bgc">
    <nav>
      <router-link to="/all">全部</router-link> |
      <router-link to="/active">未完成</router-link> |
      <router-link to="/complete">已完成</router-link>
    </nav>
    <TodoInput/>
    <div id="list">
      <TodoItem v-for='index in todoIndex' :key='index' :index='index'/>
    </div>
  </div>
</template>


<script>
  import TodoInput from '@/components/TodoInput/index.vue'
  import TodoItem from '@/components/TodoItem/index.vue'

  export default {
    components: {
      TodoInput,
      TodoItem
  },
     computed: {
      todoIndex() {
        return this.$store.getters['todoIndex']
      }
    },
    mounted() {
      this.$store.dispatch('INIT_TODOS')
    }
  }
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
    padding: 0;
    margin: 0
  }

.bgc {
  background: rgb(96, 202, 141);
  height:100vh
}

nav {
  padding: 30px;
  color: white;
  font-size: 1.2rem;

}
nav a {
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
}

nav a.router-link-exact-active {
  background: white;
  border-radius: 10px;
  padding: 0.5rem;
  color: black
}

.inputStyle input{
  padding:10px;
  width: 500px;
  border-radius: 10px;
  }

  .outer {
    display: flex;
    justify-content: space-around;
    margin: auto;
    background: white;
    margin-bottom: 20px;
    margin-top: 10px;
    width: 500px;
    border-radius: 10px;
  }
  .outer input:hover {
    cursor: pointer;
  }
.outer label{
  font-size: 20px;
  word-break: break-all;
  padding: 0px 15px 0px 6px;
  height: 40px;
  display: block;
  line-height: 40px;
}
.delete {
  color:red;
  border: 0;
  background-color: white;
}
.delete:hover {
  cursor: pointer;
}
</style>
