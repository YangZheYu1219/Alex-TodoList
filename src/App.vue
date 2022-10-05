<template>
  <div>
    <nav>
      <router-link to="/all">全部</router-link> |
      <router-link to="/active">未完成</router-link> |
      <router-link to="/complete">已完成</router-link>
    </nav>
  </div>
</template>

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

div {
  background: rgb(96, 202, 141);
  height: 100vh
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
</style>
