<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
    <!-- Brand -->
    <img src="herbie.png" alt="Herbie" class="mx-3" />
    <router-link class="navbar-brand" to="/">Revenda Herbie</router-link>

    <!-- Links -->
    <ul class="navbar-nav">
      <!-- Dropdown -->
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbardrop"
          data-toggle="dropdown"
        >Cadastros</a>
        <div class="dropdown-menu">
          <router-link class="dropdown-item" to="/cadcarros">Veículos</router-link>
          <a class="dropdown-item" href="#">Marcas</a>
          <a class="dropdown-item" href="#">Usuários</a>
        </div>
      </li>

      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbardrop"
          data-toggle="dropdown"
        >Pesquisas</a>
        <div class="dropdown-menu">
          <router-link class="dropdown-item" to="#">veiculos</router-link>
          <router-link class="dropdown-item" to="/propostas">Propostas</router-link>
        </div>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Gráficos</a>
        <div class="dropdown-menu">
          <router-link class="dropdown-item" to="/grafcarrosmarcas">Veículos por Marcas</router-link>
          <router-link class="dropdown-item" to="/grafcarrosmodelos">Veículos por Modelos</router-link>
          <router-link class="dropdown-item" to="/grafcadastros">Cadastro de Veículos</router-link>
          <router-link class="dropdown-item" to="/grafmodelospropostas">Modelo x Proposta</router-link>
        </div>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="#">Utilitários</a>
      </li>
    </ul>

    <ul class="navbar-nav ml-auto">
      <!-- Dropdown -->
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
          <i class="fas fa-user mr-1"></i>
          <span v-if="user">{{user}}</span>
          <span v-else>(Não Logado)</span>
        </a>
        <div class="dropdown-menu">
          <router-link class="dropdown-item" to="/login">Login</router-link>
          <a class="dropdown-item" href="#" @click="sair">Logout</a>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    user: String
  },
  methods: {
    sair() {
      localStorage.removeItem("token");
      this.$parent.mudaUser(null);
    }
  }
};
</script>

<style scoped>
img {
  width: 60px;
  height: 40px;
}
</style>