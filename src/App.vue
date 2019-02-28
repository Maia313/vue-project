<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}" exact>
              <img class="logo"/>
              Pattern Maker
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name:'Create'}" exact>
              Create
            </router-link>
          </li>
          <li class="nav-item library">
            <router-link class="nav-link" to="/library" exact>
              Library
            </router-link>
            <div class="library-items">
              {{library.length}}
            </div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar"/>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapState({
      rootFoo: 'foo',
      usersFoo: state => state.users.foo,
    }),
    ...mapState('patterns', { patternsFoo: 'foo' }),
    ...mapGetters({ rootGetterFoo: 'foo' }),
    ...mapGetters('patterns', { patternsGetterFoo: 'foo' }),
    library() {
      return this.$store.state.patterns.library;
    },
  },
};
</script>

<style>
body {
  background: rgb(15, 1, 48);
  background-attachment: fixed;
}
</style>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
main {
  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 864px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.nav-item.library {
  position: relative;
  margin-left: auto;
  border-right: none;
}
.logo {
  vertical-align: middle;
  height: 20px;
  
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color: white;
}
.container {
  display: flex;
  margin: 5px auto 0 auto;
  justify-content: center;
}
.aside {
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 300px;
}
.library-items {
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 18px;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: pink;
}
</style>
