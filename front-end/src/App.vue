<template>
  <div id="app">
    <menu-principal :user="user" />
    <!-- <HomePage :user="user" /> -->

    <router-view />
  </div>
</template>

<script>
import MenuPrincipal from "./components/MenuPrincipal.vue";

export default {
  name: "App",
  components: {
    MenuPrincipal
    // HomePage
  },
  data() {
    return {
      user: null
    };
  },
  methods: {
    mudaUser(nome) {
      this.user = nome;
    }
  }
};
</script>

<style>
</style>
