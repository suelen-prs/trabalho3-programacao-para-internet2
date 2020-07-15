<template>
  <div class="container">
    <h2>
      Propostas dos Veículos
      <!-- <router-link to="/formcarros" class="btn btn-success float-right">
                <i class="fas fa-plus-circle"></i> Adicionar
      </router-link>-->
    </h2>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Modelo</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Proposta R$</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="proposta in propostas" v-bind:key="proposta.id">
          <td>{{proposta.modelo}}</td>
          <td>{{proposta.nomePessoa}}</td>
          <td>{{proposta.email}}</td>
          <td class="text-center">{{proposta.telefone}}</td>
          <td class="text-right">{{proposta.lance | estiloMoeda}}</td>
          <!-- <td class="text-center"><img v-bind:src="carro.foto" alt="Foto do Carro"></td> -->
          <td class="text-center">
            <a href="#" class="btn btn-sm btn-danger mx-1" title="Excluir">
              <i class="fas fa-minus-circle"></i>
            </a>
            <a href="#" class="btn btn-sm btn-info" title="Aceitar" @click="enviar(proposta)">
              <i class="far fa-star"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      propostas: []
    };
  },
  methods: {
    listar() {
      axios
        .get(this.$urlAPI + "/propostas")
        .then(response => (this.propostas = response.data));
    },
    enviar(proposta) {
      axios
        .post(this.$urlAPI + "/propostas/aceitar", proposta)
        .then(response =>
          alert(`Ok! Email enviado com sucesso ${response.data.nome}`)
        );
    }
  },
  mounted() {
    this.listar();
  },
  filters: {
    estiloMoeda(value) {
      return value.toLocaleString("pt-br", { minimumFractionDigits: 2 });
    }
  }
};
</script>

<style scoped>
table img {
  width: 100px;
  height: 60px;
}
</style>